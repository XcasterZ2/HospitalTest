const path = require('path');
const express = require('express');
const app = express();

// เส้นทาง static files ให้ชี้ไปที่ 'dist/lph-hisopd/browser'
app.use(express.static(path.join(__dirname, 'dist', 'lph-hisopd', 'browser')));

// เส้นทางสำหรับจัดการทุก request ที่เหลือ
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'lph-hisopd', 'browser', 'index.html'));
});

// กำหนด port
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
