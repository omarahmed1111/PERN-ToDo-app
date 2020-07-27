const express = require('express');
const app = express();
const cors = require("cors");
const pool = require("./db");


// Middleware
app.use(cors());
app.use(express.json());

app. listen(5000, () => {
    console.log("server started on port 5000");
});

// Routes


// create todo



// get all todos


// get a todo


// update a todo


// delete a todo