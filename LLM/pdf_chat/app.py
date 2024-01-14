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

class ConversationalApp:
    def __init__(self):
        super().__init__()
        self.model = ChatGoogleGenerativeAI(model="gemini-pro", temperature=0.3)
        self.embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
    
    def get_pdf_text(self, pdf_docs):
        """Not OCR, so only works with searchable PDFs."""
        text = ""
        for pdf in pdf_docs:
            pdf_reader = PdfReader(pdf)
            for page in pdf_reader.pages:
                text += page.extract_text()
        return text

    def get_text_chunks(self, text):
        text_splitter = RecursiveCharacterTextSplitter(chunk_size=10000, chunk_overlap=1000)
        chunks = text_splitter.split_text(text)
        return chunks

    def get_vector_store(self, text_chunks ,is_new:bool=True ,save_local:bool=False, load_local:bool=False, local_path:str=None):
        if load_local:
            self.vector_store = FAISS.load_local(local_path if local_path is not None else "faiss_index", self.embeddings)
        
        if is_new and ~load_local:
            self.vector_store = FAISS.from_texts(text_chunks, self.embeddings)
            if save_local:
                self.save_vector_local(local_path=local_path)
    
    def save_vector_local(self, local_path:str=None):
        self.vector_store.save_local("faiss_index" if local_path is None else local_path)
    
    def make_vector_store(self, pdf_docs:list, is_new:bool=True, save_local:bool=False, load_local:bool=False, local_path:str=None):
        raw_text = self.get_pdf_text(pdf_docs)
        text_chunks = self.get_text_chunks(raw_text)
        self.get_vector_store(text_chunks, is_new=is_new, save_local=save_local, load_local=load_local, local_path=local_path)

    def get_conversational_chain(self):
        prompt_template = """
        Provide a thorough legal analysis and logical response to the following question based on the given context.

        Context:\n {context}?\n
        Question: \n{question}\n

        Answer:
        """
        prompt = PromptTemplate(template=prompt_template, input_variables=["context", "question"])
        chain = load_qa_chain(self.model, chain_type="stuff", prompt=prompt)
        return chain
    
    def user_input(self, user_question, conversational_chain, conversation_history, is_local:bool):
        new_db = FAISS.load_local("faiss_index", self.embeddings) if is_local else self.vector_store
        docs = new_db.similarity_search(user_question)
        
        response = conversational_chain({"input_documents": docs, "question": user_question}, return_only_outputs=True)
        conversation_history.append({"User": user_question, "AI": response["output_text"]})
        return response["output_text"], conversation_history
    
if __name__ == '__main__':
    conversational_app = ConversationalApp()
