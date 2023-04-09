const express = require("express")
const app = express()

var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect().catch(err => console.log(err))

async function connect() {
    // QUESTION 0.
  await mongoose.connect('YOUR URL HERE') // Copy and paste the url we got from MongoDB here, 
  // but replace <password> with the pasword you set for your user previously.
  // It should look like this: 'mongodb+srv://cubstartuser123:pAsSWoRd123@cluster0.o1uteiq.mongodb.net/test'
}

// Create a new mongoose.Schema here with the front as a String and the back as a String. 
// If you're stuck, take a look at the slides from the lecture for this.
// QUESTION 1.
const flashcardSchema = /* YOUR CODE HERE */

// Create a new mongoose.model here with "Flashcard" as the name, using the flashcardSchema we just created.
// If you're stuck, take a look at the slides from the lecture for this.
// QUESTION 2.
const Flashcard = /* YOUR CODE HERE */

// This is a similar POST route from the last homework. 
// However, we must modify it to add a new document to our database.
// Save the newCard into our database. 
// If you're stuck, take a look at the slides from the lecture for this.
// QUESTION 3. 
app.post("/new", async (req, res) => {
    const newCard = new Flashcard({front:req.body.front, back:req.body.back});
    /* YOUR CODE HERE */ 
    return res.send(newCard)
})

// QUESTION 4a. Use a method in Mongoose to find all the cards we have in our database. 
// (Hint: This is covered in lecture.)
app.get("/cards", async (req, res) => {
    const foundCards = await /* YOUR CODE HERE */
    return res.send(foundCards)
})

// QUESTION 4b. Use a method in Mongoose to find a card by its ID. 
// (Hint: This is covered in lecture.)
app.get("/card/:id", async (req, res) => {
    let id = req.params.id
    const foundCard = await /* YOUR CODE HERE */
    return res.send(foundCard)
})

// QUESTION 4c. Use a method in Mongoose to delete a card by its ID. 
// (If you're stuck, try googling what this could be!)
app.get("/delete/:id", async (req, res) => {
    let id = req.params.id
    const foundCard = await /* YOUR CODE HERE */
    return res.send(foundCard)
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})