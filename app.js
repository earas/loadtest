var express = require("express");
const path = require("path");
const port = process.env.PORT || 8080


var app = express();app.listen(port, () => {
    console.log("Server running on port " + port);
});

//app.use(bodyParser.json())
app.use(express.json());


// Setup static directory to serve
app.use(express.static(path.join(__dirname, "/public"),{ etag: true, lastModified: true }));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
    //res.json(thedata2);

   });