import express from "express";
const app = express();
const PORT = 8080;
import sum from "./sum.js";
app.listen(PORT, (req, res) => {
  console.log("I am listening");
});

app.get("/home", (req, res) => {
  res.json({
    msg: "I am root",
  });
});
app.get("/sum/:a/:b", async (req, res) => {
  const { a, b } = req.params;

  res.json({
    ans: sum(parseInt(a), parseInt(b)),
  });
});