const express = require("express");
const serveIndex = require("serve-index");

const mongoose = require("mongoose");

mongoose.connect("mongodb://mongo/test");

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    // minlength: 3
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Todo = mongoose.model("Todo", schema);

(async () => {
  const todos = await Todo.find();
  console.log("todos: ", todos);
})();

const port = 3000;

const app = express();

app.get("/todos", (req, res) => {
  (async () => {
    try {
      const todos = await Todo.find();
      console.log("todos: ", todos);
      res.json(todos);
    } catch (err) {
      console.log("err: ", err);
      res.status(500).end();
    }
  })();
});

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
