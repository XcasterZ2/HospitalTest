const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'dist', 'lph-hisopd')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'lph-hisopd', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
