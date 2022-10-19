const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(
  session({
    secret: "sessionSecret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var sess;

router.post("/login", (req, res) => {
  sess = req.session;
  sess.nomeUsuario = req.body.nomeUsuario;
  sess.email = req.body.email;
  res.end("done");
});

router.get("/login", (req, res) => {
  const nomeUsuario = sess.nomeUsuario,
    email = sess.email;
  res.send({ nomeUsuario, email });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.end("done");
});

app.use("/", router);
app.listen(8080, () => {
  console.log("Listening on localhost:8080");
});
