const express = require('express');
const app = express();
const PORT = 3000;

/*
1. ROUTE PARAMETER
Example:
http://localhost:3000/restaurant/101
*/

app.get('/restaurant/:id', (req, res) => {
    const restaurantId = req.params.id;

    res.send(`
        <h1>Restaurant Details</h1>
        <p>You selected Restaurant ID:
        <strong>${restaurantId}</strong></p>
    `);
});


/*
2. MULTIPLE ROUTE PARAMETERS
Example:
http://localhost:3000/order/5001/pizza
*/

app.get('/order/:orderId/:item', (req, res) => {
    const { orderId, item } = req.params;

    res.send(`
        <h1>Order Information</h1>
        <p>Order ID: <b>${orderId}</b></p>
        <p>Food Item: <b>${item}</b></p>
    `);
});


/*
3. QUERY PARAMETERS
Example:
http://localhost:3000/search?food=burger&price=low
*/

app.get('/search', (req, res) => {
    const food = req.query.food;
    const price = req.query.price;

    res.json({
        message: "Food Search Results",
        foodItem: food || "Not Specified",
        priceRange: price || "Any"
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});