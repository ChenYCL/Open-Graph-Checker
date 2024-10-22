import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 7000;

app.use(express.static("public"));

app.get("/check", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await fetch(url);
    const data = await response.text();
    const ogTags = extractOpenGraphTags(data);
    res.json(ogTags);
  } catch (error) {
    res.status(500).json({ error: "无法获取页面内容。" });
  }
});

function extractOpenGraphTags(html) {
  const ogTags = {};
  const regex = /<meta property="og:([^"]+)" content="([^"]*)"/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    ogTags[match[1]] = match[2];
  }
  return ogTags;
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
