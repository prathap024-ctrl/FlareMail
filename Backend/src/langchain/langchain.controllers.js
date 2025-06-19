import { model } from "../Ai_Model/Gemini.js";
import { chatPrompt } from "../prompts/Prompts.js";
import { emailOutputSchema } from "../Schema/emailSchema.js";

export const generateEmail = async (req, res) => {
  try {
    const { targetAudience, productService, tone, cta, keywords } = req.body;

    // Validate required fields
    if (!targetAudience || !productService || !tone || !cta) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const structuredModel = model.withStructuredOutput(emailOutputSchema);
    const chain = chatPrompt.pipe(structuredModel);

    const result = await chain.invoke({
      targetAudience,
      productService,
      tone,
      cta,
      keywords: keywords || "",
    });

    const EmailOutput = {
      subject: result.subject?.replace(/^Subject:\s*/i, "").trim(),
      email: result.email
        .replace(/^Subject:.*\\n*/i, "") // remove any 'Subject:' prefix from email content
        .replace(/\n{2,}/g, "\n\n") // collapse excessive newlines
        .trim(), // trim all leading/trailing whitespace
    };

    res.json(EmailOutput);
  } catch (err) {
    console.error("Gemini error:", err.message || err);
    res.status(500).json({ error: "Failed to generate email" });
  }
};
