const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 4000;

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// app.get("/", (req, res) => {
//     res.render("index");
// });
// app.get("/about", (req, res) => {
//     res.render("about");
// });
app.get("/", (req, res) => {
    res.render("weather");
});
app.get("*", (req, res) => {
    res.render("error404", {
        errorMsg: "Oops! Page not found"
    });
});

app.listen(port, () => {
    console.log(`Listening to port no ${port}`);
});