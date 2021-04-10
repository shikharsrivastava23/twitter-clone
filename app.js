const express = require("express");
const bodyparser = require("body-parser");
const session = require("express-session");

const middleware = require("./middleware");
const path = require("path");
const app = express();
const port = 3009;

const mongoose = require("./database");

const server = app.listen(port, () =>
    console.log(`Server listening on port ${port}`)
);

app.set("view engine", "pug");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({ extended: false }));

app.use(
    session({ 
        secret: "jalapenos",
        resave: true,
        saveUninitialized: false,
    })
);

const loginRoute = require("./routes/loginRoutes");
app.use("/login", loginRoute);

const registerRoute = require("./routes/registerRoutes");
app.use("/register", registerRoute);

const postsApiRoute = require("./routes/api/posts");
app.use("/api/posts", postsApiRoute);

app.get("/", middleware.requireLogin, (req, res, next) => {
    let payload = {
        pageTitle: "Home",
        userLoggedIn: req.session.user,
    };
    res.status(200).render("home", payload);
});
