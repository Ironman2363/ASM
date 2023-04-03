const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const methods = require("method-override");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());
app.use(methods("_method"));
const port = 8888;
const controllers = require("./controllers/controlersAdmin");
mongoose
  .connect("mongodb://127.0.0.1:27017/QUANLY")
  .then(function () {
    console.log("Kết nối MongoDB thành công !");
  })
  .catch(function (err) {
    console.log("Lỗi: " + err);
  });
app.engine(
  ".hbs",
  handlebars.engine({
    extname: "hbs",
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set("view engine", ".hbs");
app.set("views", "./views");
app.use("/admin", controllers);

app.listen(port, function () {
  console.log("Port:" + port);
});
