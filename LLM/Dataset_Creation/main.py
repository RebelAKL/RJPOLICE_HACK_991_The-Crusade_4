import re
import pandas as pd

def create_table(text):
    pattern = re.compile(r'^(\d+\.)\s*(.*)$', re.MULTILINE)
    matches = pattern.findall(text)
    df = pd.DataFrame(matches, columns=['Numeric Data', 'Paragraph Text'])
    return df

def read_text_from_file(file_path, encoding='utf-8'):
    with open(file_path, 'r', encoding=encoding) as file:
        text = file.read()
    return text

def save_table_to_csv(df, output_file):
    df.to_csv(output_file, index=False)

file_path = r'F:\Projects\Python\Table maker\IPC_sections.txt'

text_from_file = read_text_from_file(file_path, encoding='utf-8')

table = create_table(text_from_file)

output_csv_path = 'output_table.csv'

save_table_to_csv(table, output_csv_path)

# Display the table
print(table)

print(f'Table saved to {output_csv_path}')