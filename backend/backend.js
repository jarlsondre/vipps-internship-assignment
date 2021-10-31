import express from "express";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get("/", async (req, res, next) => {
  const topic = req.query.topic;
  let textSegment;
  try {
    textSegment = await fetchTopicFromWikipedia(topic);
  } catch (error) {
    return next(error);
  }
  // Creating a DOM in order to parse the html and find all the p tags
  const dom = new JSDOM({
    contentType: "text/html",
  });
  const div = dom.window.document.createElement("div");
  div.innerHTML = textSegment;
  const paragraphs = Array.from(div.getElementsByTagName("p"));
  const fullDocumentText = paragraphs.map((p) => p.textContent).join(" \n");
  let occurences = countOccurences(topic, fullDocumentText);
  let data = {
    occurences: occurences,
  };
  res.send(data);
});

const countOccurences = (word, text) => {
  return text.toLowerCase().split(word.toLowerCase()).length - 1;
};

async function fetchTopicFromWikipedia(topic) {
  let text = "";
  let errorOccured = false;
  let message;
  await fetch(
    "https://en.wikipedia.org/w/api.php?action=parse&section=0&prop=text&format=json&page=" +
      topic,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then(async (res) => {
      let jsonRes = JSON.parse(await res.text());
      try {
        text = jsonRes.parse.text["*"];
      } catch (error) {
        message = jsonRes.error.info;
        errorOccured = true;

        throw new Error(message);
      }
    })
    .catch((error) => {
      message = error.message;
      errorOccured = true;
    });

  if (errorOccured) {
    throw new Error(message);
  }
  return text;
}

app.listen(port, () => {
  console.log(`Wikipedia app listening at http://localhost:${port}`);
});

app.use(function (err, req, res, next) {
  res
    .status(400)
    .send({ error: "Fetching Wikipedia failed, error: " + err.message });
});
