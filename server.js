const express = require("express");
const serveIndex = require("serve-index");

const port = 3000;

const app = express();

app.use(express.static("."));
app.use(serveIndex(".", { icons: true }));

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
