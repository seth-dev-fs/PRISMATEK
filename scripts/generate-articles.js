async function callGemini(promptString) {
  try {
    const resp = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            role: 'user',
            parts: [{ text: promptString }],
          },
        ],
        generationConfig: {
          maxOutputTokens: 1024,
          temperature: 0.3,
        }
      },
      {
        timeout: 120000,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // extract text safely (unchanged)
    if (
      resp.data &&
      resp.data.candidates &&
      resp.data.candidates[0] &&
      resp.data.candidates[0].content &&
      Array.isArray(resp.data.candidates[0].content.parts) &&
      resp.data.candidates[0].content.parts[0] &&
      typeof resp.data.candidates[0].content.parts[0].text === 'string'
    ) {
      return resp.data.candidates[0].content.parts[0].text;
    }

    if (
      resp.data &&
      resp.data.output &&
      Array.isArray(resp.data.output) &&
      resp.data.output[0] &&
      resp.data.output[0].content &&
      Array.isArray(resp.data.output[0].content) &&
      resp.data.output[0].content[0] &&
      typeof resp.data.output[0].content[0].text === 'string'
    ) {
      return resp.data.output[0].content[0].text;
    }

    return JSON.stringify(resp.data);
  } catch (err) {
    logError(`Gemini API error: ${err.message}`);
    if (err.response && err.response.data) {
      logError(`Gemini response data: ${JSON.stringify(err.response.data)}`);
    }
    throw err;
  }
}