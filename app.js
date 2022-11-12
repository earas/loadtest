var express = require("express");

const path = require("path");


var app = express();app.listen(3030, () => {
    console.log("Server running on port 3030");
});

//app.use(bodyParser.json())
app.use(express.json());


// Setup static directory to serve
app.use(express.static(path.join(__dirname, "/public"),{ etag: true, lastModified: true }));

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname,'/public/index.html'))
    //res.json(thedata2);

   });