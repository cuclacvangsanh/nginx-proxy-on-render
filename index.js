const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Cấu hình CORS để xử lý preflight requests
app.use(cors());

// Proxy tất cả các request đến API server chính của bạn
app.use('/', createProxyMiddleware({
    target: 'https://api-server2-std4.onrender.com',
    changeOrigin: true,
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Proxy server đang chạy trên port ${PORT}`);
});
