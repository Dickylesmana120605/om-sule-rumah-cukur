document.addEventListener('DOMContentLoaded', function() {
    const orderTable = document.getElementById('orderTable');

    function loadAntrian() {
        const antrianData = JSON.parse(localStorage.getItem('antrianData')) || [];
        orderTable.innerHTML = '';
        antrianData.forEach((antrian, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${antrian.nama}</td>
                <td>${antrian.alamat}</td>
                <td>${antrian.noHp}</td>
                <td>${antrian.waktu}</td>
                <td>${antrian.hairstyle}</td>
                <td>${antrian.kategori}</td>
                <td>${antrian.harga}</td>
                <td><button class="deleteBtn" data-index="${index}">Hapus</button></td>
            `;
            orderTable.appendChild(row);
        });

        document.querySelectorAll('.deleteBtn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                deleteAntrian(index);
            });
        });
    }

    function deleteAntrian(index) {
        let antrianData = JSON.parse(localStorage.getItem('antrianData')) || [];
        antrianData.splice(index, 1);
        localStorage.setItem('antrianData', JSON.stringify(antrianData));
        loadAntrian();
        updateQueueNumber();
    }

    function updateQueueNumber() {
        const antrianData = JSON.parse(localStorage.getItem('antrianData')) || [];
        document.getElementById('queueInput').value = antrianData.length + 1;
    }
    loadAntrian();
});
