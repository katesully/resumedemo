const express = require('express');
const path = require('path');
const app = express();

// Important: Use process.env.PORT for Elastic Beanstalk
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});