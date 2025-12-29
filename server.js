const express = require('express');
const app = express();

app.use(express.json());

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); // added backticks
  next();
};
app.use(logger);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
