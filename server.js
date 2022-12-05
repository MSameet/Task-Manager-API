const express = require("express");
const app = express();
require("./src/db/mongoose");
const userRouter = require("./src/routers/user");
const taskRouter = require("./src/routers/task");

const port = 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

// const Task = require("./src/models/task");
// const User = require("./src/models/user");

// const myFunction = async () => {
//   const user = await User.findById("638c3953755776e14a4c3dbf");
//   await user.populate("tasks");
//   console.log(user.tasks);
// };
// myFunction();
