const express = require('express');
const path = require('path');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Serve static HTML files
app.use(express.static(path.join(__dirname, "public")));

// In-memory user data
let user = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Linkoln Dash" }
];

// ✅ GET: Fetch all users
app.get('/user', (req, res) => {
  res.json(user);
});

// ✅ Root route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ POST: Add a new user
app.post('/user', (req, res) => {
  const newUser = {
    id: user.length + 1,
    name: req.body.name
  };
  user.push(newUser);
  res.status(201).json(newUser);
});

// ✅ PUT: Update an existing user
app.put('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = user.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).send('User not found');
  }

  user[userIndex].name = req.body.name;
  res.json(user[userIndex]);
});

// ✅ DELETE: Delete a user
app.delete('/user/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  // ⚠️ You had a typo: "uderId" → should be "userId"
  user = user.filter(u => u.id !== userId);

  res.send(`User with id ${userId} deleted`);
});

// ✅ Start the server
const port = 2800;
app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
