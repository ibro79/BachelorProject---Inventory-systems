const express = require("express");

const app = express()

app.listen(5001, () => {
    console.log("server started on PORT: 5001");
});