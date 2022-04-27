const express = require("express");

const app = express();

const path = require("path");

const db = require("./db");

const res = require("express/lib/response");

const req = require("express/lib/request");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

////////////////prevent clickjacking////////////////////////////
app.use((req, res, next) => {
    res.setHeader("x-frame-options", "deny");
    next();
});
/////////////////////////////////////////////////////////////////

app.get("*", (req, res) => {
    res.redirect("/");
});

app.listen(process.env.PORT || 8080, () =>
    console.log("pt-participation server listening")
);
