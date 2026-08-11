// IMPORTING EXPRESS
const express = require('express');

// We use the express module to handle our web server logic.

const app = express();
const PORT = 3000;


/**
 * 1. BASIC JSON RESPONSE
 * When the user visits the root, we send a simple JSON object.
 */

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Book Management API",
        status: "Active",
        timestamp: new Date()
    });
});


/**
 * 2. SENDING AN ARRAY OF OBJECTS
 * This mimics a real-world database response.
 */

app.get('/books', (req, res) => {

    const bookList = [
        {
            id: 101,
            title: "The Alchemist",
            author: "Paulo Coelho",
            category: "Fiction"
        },
        {
            id: 102,
            title: "Wings of Fire",
            author: "A.P.J. Abdul Kalam",
            category: "Biography"
        },
        {
            id: 103,
            title: "Clean Code",
            author: "Robert C. Martin",
            category: "Programming"
        }
    ];

    // Sending the array as a JSON response
    res.json(bookList);
});


/**
 * 3. DYNAMIC JSON RESPONSE
 * Using Route Parameters to send data about a specific book.
 *
 * URL Example:
 * http://localhost:3000/book/45
 */

app.get('/book/:id', (req, res) => {

    const bookId = req.params.id;

    res.json({
        requestedId: bookId,
        title: "Java Programming",
        author: "James Gosling",
        category: "Programming",
        available: true,
        tags: ["java", "programming", "technology"]
    });

});


app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});