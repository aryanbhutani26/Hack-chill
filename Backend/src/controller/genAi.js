const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  const { GoogleAIFileManager } = require("@google/generative-ai/server");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  const fileManager = new GoogleAIFileManager(apiKey);
  
  /**
   * Uploads the given file to Gemini.
   *
   * See https://ai.google.dev/gemini-api/docs/prompting_with_media
   */
  async function uploadToGemini(path, mimeType) {
    const uploadResult = await fileManager.uploadFile(path, {
      mimeType,
      displayName: path,
    });
    const file = uploadResult.file;
    console.log(`Uploaded file ${file.displayName} as: ${file.name}`);
    return file;
  }
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run() {
    // TODO Make these files available on the local file system
    // You may need to update the file paths
    const files = [
      await uploadToGemini("", "image/jpeg"),
    ];
  
    const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              fileData: {
                mimeType: files[0].mimeType,
                fileUri: files[0].uri,
              },
            },
            {text: "i want you to behve like a professional examiner and help me check this paper\nI want you to give me the number of correct and incorrect answers done by the students. You can take consider the answer right in case of incorrect assessment"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I will analyze the provided image of the science test and determine the number of correct and incorrect answers based on my understanding of the subject matter.\n\nHere's my assessment:\n\n**Question 1:** What is force?\n*   **Answer Marked:** (c) Push and push both\n*   **Correct Answer:** (c) Push and push both\n*   **Assessment:** Correct\n\n**Question 2:** Which gas is responsible for the rusting of iron?\n*   **Answer Marked:** (a) Oxygen\n*   **Correct Answer:** (a) Oxygen\n*   **Assessment:** Correct\n\n**Question 3:** Which gas is released during photosynthesis?\n*   **Answer Marked:** (a) Carbon dioxide\n*   **Correct Answer:** (b) Oxygen\n*   **Assessment:** Incorrect\n\n**Question 4:** Which of the following is a physical change?\n*   **Answer Marked:** (d) Digesting food\n*   **Correct Answer:** (c) Boiling water\n*   **Assessment:** Incorrect\n\n**Question 5:** What is the process of a gas turning directly into a solid called?\n*   **Answer Marked:** (b) Sublimation\n*   **Correct Answer:** (b) Sublimation\n*   **Assessment:** Correct\n\n**Question 6:** Which of the following is a mixture?\n*   **Answer Marked:** (c) Air\n*   **Correct Answer:** (c) Air\n*   **Assessment:** Correct\n\n**Question 7:** A group of stars which seem to form a pattern is called?\n*   **Answer Marked:** (a) Galaxy\n*   **Correct Answer:** (c) Constellation\n*   **Assessment:** Incorrect\n\n**Question 8:** Solar eclipse occurs on\n*   **Answer Marked:** (a) Full moon day\n*   **Correct Answer:** (b) New moon day\n*   **Assessment:** Incorrect\n\n**Question 9:** The letter that does not show lateral inversion is\n*   **Answer Marked:** (d) W\n*   **Correct Answer:** (d) W\n*   **Assessment:** Correct\n\n**Question 10:** Which of the following is a chemical change?\n*   **Answer Marked:** (c) Burning wood\n*   **Correct Answer:** (c) Burning wood\n*   **Assessment:** Correct\n\n**Summary:**\n\n*   **Correct Answers:** 6\n*   **Incorrect Answers:** 4\n\nI hope this assessment is helpful!\n"},
          ],
        },
      ],
    });
  
    const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    console.log(result.response.text());
  }
  
  run();