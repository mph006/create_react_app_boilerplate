const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname,'../src/build')))

app.post("/api/fakeData", (req, res) => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then(d=>d.json())
        .then(d => res.json(d.slice(0, req.body.numRecords)));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});