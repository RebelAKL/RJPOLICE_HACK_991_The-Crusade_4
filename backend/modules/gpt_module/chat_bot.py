import langchain
from langchain.memory import ConversationBufferMemory
from langchain import LLMChain, PromptTemplate
import json
import textwrap
from llama_model import LlamaModel
from backend.modules.ocr_module.config import *

class FIRChat:
    def __init__(self):
        
