const app = require("express")();
const htmlTemplate = require("./templates/html");

app.use(
  "/",
  (req, res, next) => {
    req.headers["test-header"] = 1234;
    next();
  },
  (req, res, next) => {
    console.log(`Request has "test-header": ${!!req.headers["test-header"]}`);
    next();
  }
);

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(htmlTemplate));
});

app.listen(8080, () => {
  console.log(
    `Server is running on 8080
  http://localhost:8080/`);
});
