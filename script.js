// เชื่อมต่อกับ WebSocket Server
const socket = new WebSocket('ws://localhost:8080');

// ส่วนของ UI
const sendBtn = document.getElementById('sendBtn');
const messageInput = document.getElementById('message');
const responseDiv = document.getElementById('response');

// เมื่อเชื่อมต่อกับเซิร์ฟเวอร์สำเร็จ
socket.onopen = () => {
    console.log('เชื่อมต่อกับเซิร์ฟเวอร์สำเร็จ');
};

// รับข้อความตอบกลับจากเซิร์ฟเวอร์
socket.onmessage = (event) => {
    responseDiv.innerHTML = `เซิร์ฟเวอร์ตอบกลับ: ${event.data}`;
};

// ส่งข้อความไปยังเซิร์ฟเวอร์เมื่อกดปุ่ม
sendBtn.addEventListener('click', () => {
    const message = messageInput.value;
    if (message.trim()) {
        socket.send(message); // ส่งข้อความไปยังเซิร์ฟเวอร์
        messageInput.value = ''; // ล้างช่องข้อความหลังจากส่ง
    } else {
        alert('กรุณากรอกข้อความ');
    }
});

// แจ้งเตือนเมื่อการเชื่อมต่อถูกตัด
socket.onclose = () => {
    console.log('ตัดการเชื่อมต่อจากเซิร์ฟเวอร์');
};
