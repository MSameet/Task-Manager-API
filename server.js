const express = require("express");
const app = express();
require("./src/db/mongoose");
const userRouter = require("./src/routers/user");
const taskRouter = require("./src/routers/task");

const port = 3000;

app.use(express.json());
app.use("", (req, res) => {
  res.send("app is working");
});
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
