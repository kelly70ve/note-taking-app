// DEPENDENCIES

var express = require("express");
var path = require("path");
var fs = require("fs"); 
const { static } = require("express");

//  EXPRESS APP
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Need static so browser knows where html files are 
// Was getting a MINE type
app.use(express.static(path.join(__dirname,"public")));

// ROUTES

// GET * - Should return the index.html file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// GET /notes - Should return the notes.html file.
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

// GET /api/notes - Should read the db.json file and return all saved notes as JSON
app.get("/api/notes", function (req, res) {

  fs.readFile("db/db.json", (err, data) => {
    if (err) throw err;
    var parseData = JSON.parse(data)
    return res.json(parseData);
  });

});



// POST /api/notes - Should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.

app.post("/api/notes", function (req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

  var newNote = req.body; 

  fs.readFile("db/db.json", (err, data) => {
    if (err) throw err;

    var notes = JSON.parse(data);

    var addedNote = [...notes, newNote];

    fs.writeFile("db/db.json", JSON.stringify(addedNote), (err, data) => {
      if (err) {console.log(err)};
      console.log("A note has been written");
    })
  });

  res.json(newNote);
}); 

// ABOVE WORKS ***** 

// DELETE /api/notes/:id - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.

app.delete("/api/notes/:id", function (req, res) {

}); 

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
