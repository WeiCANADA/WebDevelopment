//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post("/check", urlencodedParser, (req, res) => {
  console.log(req.body);    // your JSON
  if (checkPassword(req.body["password"])) {

    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/")
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


function checkPassword(password) {
  if (password === "ILoveProgramming") {
    return true;
  } else {
    return false;
  }
}