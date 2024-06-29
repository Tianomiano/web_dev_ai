const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static(__dirname));

const users = [];

app.post('/submit', (req, res) => {
    const { name, email } = req.body;
    if (name && email) {
        users.push({ name, email });
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid input' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
