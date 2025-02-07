import { WebSocketServer } from 'ws';
import os from 'os';

const host = '127.0.0.1';
const portNumber = 8080;
const hostname = os.hostname();

// สร้าง WebSocket Server
const wss = new WebSocketServer({ port: portNumber }, () => {
    console.log(`✅ WebSocket Server กำลังทำงานที่ ws://${host}:${portNumber}`);
});

// รอฟังการเชื่อมต่อจากไคลเอนต์
wss.on('connection', (ws) => {
    console.log('🔗 ไคลเอนต์เชื่อมต่อสำเร็จ');

    ws.on('message', (message) => {
        console.log(`📩 ได้รับข้อความ: ${message}`);

        if (message === 'What you name?') {
            ws.send(`My name is ${hostname}`);
        } else {
            ws.send(`เซิร์ฟเวอร์ได้รับข้อความ: ${message}`);
        }
    });

    ws.on('close', () => {
        console.log('❌ ไคลเอนต์ตัดการเชื่อมต่อ');
    });
});
