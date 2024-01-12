import streamlit as st
from PyPDF2 import PdfReader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import os

load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

def get_pdf_text(pdf_docs):
    text = ""
    for pdf in pdf_docs:
        pdf_reader = PdfReader(pdf)
        for page in pdf_reader.pages:
            text += page.extract_text()
    return text

def get_text_chunks(text):
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
    chunks = text_splitter.split_text(text)
    return chunks

def get_vector_store(text_chunks):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    vector_store = FAISS.from_texts(text_chunks, embedding=embeddings)
    vector_store.save_local("faiss_index")

def get_conversational_chain():
    prompt_template = """
    Provide a thorough legal analysis and logical response to the following question based on the given context.
    
    Context:\n {context}?\n
    Question: \n{question}\n
    
    Answer:
    """

    model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
    prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
    chain = load_qa_chain(model, chain_type="stuff", prompt=prompt)
    return chain

def user_input(user_question, conversational_chain, conversation_history):
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    new_db = FAISS.load_local("faiss_index", embeddings)
    docs = new_db.similarity_search(user_question)
    
    response = conversational_chain({"input_documents": docs, "question": user_question}, return_only_outputs=True)
    conversation_history.append({"User": user_question, "AI": response["output_text"]})
    
    st.write("Reply:", response["output_text"])
    display_conversation_history(conversation_history)

def display_conversation_history(conversation_history):
    st.subheader("Conversation History:")
    for dialogue in conversation_history:
        st.write(f"User: {dialogue['User']}")
        st.write(f"AI: {dialogue['AI']}")
        st.write("---")

def main():
    st.set_page_config("General Search")
    st.header("Use for general queries")

    user_question = st.text_input("How can I help you!!")

    conversation_history = st.session_state.get("conversation_history", [])
    if user_question:
        conversational_chain = get_conversational_chain()
        user_input(user_question, conversational_chain, conversation_history)
        st.session_state.conversation_history = conversation_history

    with st.sidebar:
        st.title("Menu:")
        pdf_docs = st.file_uploader("Upload all the law-related PDFs", accept_multiple_files=True)
        if st.button("Submit & Process"):
            with st.spinner("Processing..."):
                if pdf_docs:
                    raw_text = get_pdf_text(pdf_docs)
                    text_chunks = get_text_chunks(raw_text)
                    get_vector_store(text_chunks)
                    st.success("Done")
                else:
                    st.warning("Please upload at least one PDF file.")

if __name__ == "__main__":
    main()
