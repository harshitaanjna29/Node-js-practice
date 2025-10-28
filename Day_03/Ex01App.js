const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page</h1>');
}   );

app.post('/data', (req, res) => {
    console.log(req.body);
    res.send('Data received via POST request');
});

const port = 3000;
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});