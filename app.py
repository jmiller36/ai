import streamlit as st
import anthropic
import os

client = anthropic.Anthropic(
    # defaults to os.environ.get("ANTHROPIC_API_KEY")
    api_key=os.environ["ANTHROPIC_API_KEY"],
)
message = client.messages.create(
    model="claude-3-5-sonnet-20240620",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude"}
    ]
)
print(message.content[0].text)

st.title("My Streamlit App")
with st.form(key='my_form'):
    st.write(f"{message.content[0].text}")
    user_input = st.text_input(label='Enter your name:')
    submit_button = st.form_submit_button(label='Submit')

