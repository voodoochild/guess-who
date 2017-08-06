const express = require("express");
const app = express();

const appRoot = `${__dirname}/../app`;

app.use(express.static(appRoot));

app.get("/", (req, res) => {
    res.sendFile(`${appRoot}/index.html`);
});

app.listen(3000, () => {
    console.log("Listening on *:3000");
});
