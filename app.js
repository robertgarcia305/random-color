const express = require("express");
const app = express();

app.use(express.static("public")); // Serve static files from a 'public' directory

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("http://localhost:3000")
});

// practice
const names = require("./names");

console.log(names);
console.log(names.johnsName);
// if the functions is alone it can also be like this displayName()
// since we are adding it to a variable in this file, you need to call it witht eh names.displayName() way
names.displayName();

// can also export this way, but you need some function to be called on the file you are exporting
// feel free to explore this file we are exporting 
require("./sum");