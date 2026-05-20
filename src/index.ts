import express from "express";

const app = express();
const PORT = 8080;

app.use(express.json());

app.get('/api/hello',
(req, res) => {
    res.json({
        message: "Hello from GET API",
    });
});

app.post("/api/data", (req, res) => {
    const data = req.body;
    res.json({
        message: "POST received",
        yourData: data
    });
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});