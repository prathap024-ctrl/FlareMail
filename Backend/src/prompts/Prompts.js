import { ChatPromptTemplate } from "@langchain/core/prompts";


export const chatPrompt = ChatPromptTemplate.fromTemplate(`
You are a professional cold email copywriter.

Write a cold email for a {targetAudience} introducing the product/service: "{productService}".
Use a {tone} tone and end with this call-to-action: "{cta}".

Include the following keywords if relevant: {keywords}.

Do NOT include the word "Subject:" in the email body.
Do NOT repeat the subject inside the email body.
Return only:
- a medium, catchy subject line
- a clean email body (no headers, no placeholders like [Name], and no extra line breaks)
`);