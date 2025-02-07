const os = require('os');
const http = require('http');

// ดึงข้อมูลระบบปฏิบัติการ
const platform = os.platform(); // ระบบปฏิบัติการ
const cpuCores = os.cpus().length; // จำนวนคอร์ของ CPU
const host = os.hostname(); // ชื่อโฮสต์ของเครื่อง

// กำหนดค่าของเซิร์ฟเวอร์
const hostname = '127.0.0.1';
const port = 3000;

console.log('กำลังเริ่มเซิร์ฟเวอร์...');

// สร้าง HTTP Server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`
    Creator By : 66046484 Nicha Wanwon
    Welcome to CSI203-Laboratory : Demo-serverNodejs
    ----------------------------------------
    Server Name : ${host}
    Running on Port : ${port}
    Operating System : ${platform}
    Number of CPU Cores : ${cpuCores}`);
});

// เริ่มให้เซิร์ฟเวอร์ฟังที่พอร์ตที่กำหนด
server.listen(port, hostname, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://${hostname}:${port}/`);
});
