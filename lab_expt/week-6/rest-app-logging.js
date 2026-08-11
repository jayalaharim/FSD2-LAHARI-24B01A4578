const express = require('express');
const app = express();
const PORT = 3000;

// Built-in Middleware
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

// Security Middleware
app.use((req, res, next) => {
    const userAgent = req.get('User-Agent');

    if (!userAgent) {
        return res.status(400).json({
            message: "User-Agent missing"
        });
    }

    next();
});

// Sample Data
let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" }
];

// GET All Products
app.get('/products', (req, res) => {
    res.json(products);
});

// POST New Product
app.post('/products', (req, res) => {
    const product = {
        id: products.length + 1,
        name: req.body.name
    };

    products.push(product);
    res.status(201).json(product);
});

// PUT Update Product
app.put('/products/:id', (req, res) => {
    const product = products.find(
        p => p.id == req.params.id
    );

    if (product) {
        product.name = req.body.name;
        res.json({
            message: "Product updated",
            product
        });
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});

// DELETE Product
app.delete('/products/:id', (req, res) => {
    products = products.filter(
        p => p.id != req.params.id
    );

    res.json({
        message: "Product deleted",
        products
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});