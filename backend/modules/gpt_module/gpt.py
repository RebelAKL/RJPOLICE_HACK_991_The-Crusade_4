import openai

from dotenv import load_dotenv
import os

# from config import *
load_dotenv()

openai.api_key = os.getenv('OPEN_API_KEY')

# N_RETRIES = 3

# @retry(stop=stop_after_attempt(N_RETRIES), wait=wait_exponential(multiplier=1, min=4, max=70))
def generate_fir(prompt:str, temperature:float=.5):
    messages=[
        {
            "role": "system",
            "content":  """
        You have to generate a response based on text input from the user. The response needs to be formal and should follow the Indian Penal Code without any compromise.
        You have to guve proper sections which will be applicable to the collective statements of witnesses and follow the Indian penal code to the T.
        You cannnot use anyother law than Indian Penal Code.
        The response needs to be formal and must tell wether the section applicable is cognizable, give a proper short description of the section to the user, tell whether the offense is bailable or not.
        The format needs to match the following template and give output in json file.

                    FORM – IF1 - (Integrated Form)
            FIRST INFORMATION REPORT
            (Under Section 154 Cr.P.C)
            1. Dist. …………….. P.S……………….Year …………….. F.I.R. No. ……………. Date …………
            2. (i) *Act …………………………………. *Sections ……………………………………………...
            (ii) *Act …………………………………. *Sections ……………………………………………...
            (iii) *Act …………………………………. *Sections ……………………………………………...
            (iv) * Other Acts & Sections ………………………………………………………………………..
            3.
            (a) * Occurrence of Offence: * Day ……………….*Date …………………. *Time …………….

            (b) Information received at P.S. Date ………………………… Time ……………………………..

            (c) General Diary Reference: Entry No(s) …………………… Time ………………………………
            4. Type of information : *Written / Oral
            5. Place of occurrence: (a) Direction and Distance from P.S. ………………… Beat No. ……………..
            (b) * Address ……………………………………………………………………………………….
            …………………………………………………………………………………………………..
            (c) In case outside limit of this Police Station, then the name of P.S. ……………………………..
            District ……………………………
            6. Complainant / information :
            (a) Name …………………………………………………………………………………………….
            (b) Father’s / Husband’s Name ……………………………………………………………………...
            (c) Date / Year of Birth ……………………………………… (d) Nationality ………………….....
            (e) Passport No: ………………….. Date of Issue: ……………….. Place of Issue ………………..
            (f) Occupation: ………………………………………………………………………………………
            (g) Address: ………………………………………………………………………………………….
            7. Details of known / suspected / unknown / accused with full particulars
            (Attach separate sheet if necessary):
            …………………………………………………………………………………………………………..
            …………………………………………………………………………………………………………..
            …………………………………………………………………………………………………………..
            8. Reasons for delay in reporting by the complainant / Informant ………………………………………
            …………………………………………………………………………………………………………
            ………………………………………………………………………………………………………….
            9. Particulars of properties stolen / involved (Attach separate sheet if necessary): ……………………... 
            …………………………………………………………………………………………………………
            ………………………………………………………………………………………………………….
            …………………………………………………………………………………………………………
            10. * Total value of the properties stole / involved: ……………………………………………………..
            11. * Inquest Report /U.D. Case No., if any: ……………………………………………………………..
            ………………………………………………………………………………………………………..
            12. F.I.R. Contents (Attach separate sheets, if required):
            13. Action taken: Since the above report reveals commission of offence (s) u/s as mentioned at Item No.
            2., registered the case and took up the investigation/ direction /…………………… Rank …………
            to take up the investigation transferred to P.S. ………………………… on point of jurisdiction.
            F.I.R. read over to the complainant / Informant, admitted to be correctly recorded and copy given to
            the Complainant / Informant free of cost.
            Signature of the Officer-in-charge, Police Station
            * Name : …………………………………………
            *Rank:………………………No. ……………….
            14. Signature /Thumb-impression
            of the complainant / informant
            15. Date & time of despatch to the court: 
        """.strip()
        }
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-1106",
        messages=messages,
        temperature=0.4,
        max_tokens=1000,
    )

    return response.choices[0].message['content']

# if __name__ == '__main__':
    
    