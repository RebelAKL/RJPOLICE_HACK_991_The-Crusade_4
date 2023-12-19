import chardet

file_path = "F:\Projects\Python\Table maker\IPC_sections.txt"
def detect_encoding(file_path):
    with open(file_path, 'rb') as file:
        result = chardet.detect(file.read())
    return result['encoding']

detected_encoding = detect_encoding(file_path)
print(f"Detected encoding: {detected_encoding}")
