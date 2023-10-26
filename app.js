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
names.displayName();