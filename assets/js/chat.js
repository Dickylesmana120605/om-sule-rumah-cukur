function sendMessage() {
    const input = document.getElementById('messageInput');
    const messageText = input.value.trim();
    if (messageText !== '') {
        const messagesArea = document.getElementById('messages');

        // Tampilkan pesan pengguna
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user');
        userMessage.innerText = messageText;
        messagesArea.prepend(userMessage);

        // Reset input
        input.value = '';

        // Tampilkan pesan bot (simulasi)
        setTimeout(() => {
            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'bot');
            botMessage.innerText = getBotResponse(messageText);
            messagesArea.prepend(botMessage);
        }, 1000); // Simulasi penundaan respon bot
    }
}

function getBotResponse(userMessage) {
    // Mengubah pesan pengguna menjadi huruf kecil untuk pencarian kata kunci
    const lowerCaseMessage = userMessage.toLowerCase();
    
    // Peta kata kunci ke respons yang sesuai
    const responses = {
        "halo": "Hai! Ada yang bisa saya bantu?",
        "harga cukur berapa ya": "Untuk informasi harga cukur anak-anak 20.000, dewasa 25.000 dan untuk cukur panggilan menyesuaikan dengan jarak rumah anda.",
        "lokasi": "Lokasi kami berada di pusat kota palopo, tepatnya dicakalang baru.",
        "jam buka": "Kami buka setiap hari, pukul 08:00 pagi - 12:00 malam.",
        "kontak kamu": "Anda bisa menghubungi kami melalui no whatsapp 089626107927.",
        "terima kasih": "Sama-sama! Senang bisa membantu.",
        "bye": "Selamat tinggal! Semoga harimu menyenangkan."
    };

    // Cari respons yang cocok dengan kata kunci
    for (const keyword in responses) {
        if (lowerCaseMessage.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Respons default jika tidak ada kata kunci yang cocok
    return "Anda bisa menghubungi kami melalui no whatsapp 089626107927";
}

document.getElementById('messageInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});