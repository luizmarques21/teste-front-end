const express = require("express");
const uuid = require("uuid");
const session = require("express-session");
const bodyParser = require("body-parser");
const FileStore = require("session-file-store")(session);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    genId: (req) => {
      return uuid();
    },
    store: new FileStore(),
    secret: "sessionSecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/login", (req, res) => {
  const nomeUsuario = req.session.nomeUsuario,
    email = req.session.email;
  res.send({ nomeUsuario, email });
});

app.post("/login", (req, res) => {
  req.session.nomeUsuario = req.body.nomeUsuario;
  req.session.email = req.body.email;
  res.send(req.session);
});

app.delete("/logout", (req, res) => {
  req.session.destroy();
  res.send(req.session);
});

app.listen(8080, () => {
  console.log("Listening on localhost:8080");
});
