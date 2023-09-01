import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req, res, next) { // next is a function that we call when we want to move on to the next middleware
  console.log("Request received" + req.method + " " + req.path);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
