document.addEventListener('DOMContentLoaded', function() {
    const queueForm = document.getElementById('queueForm');
    const queueInput = document.getElementById('queueInput');
    const namaInput = document.getElementById('nama');
    const alamatInput = document.getElementById('alamat');
    const noHpInput = document.getElementById('noHp');
    const hairstyleSelect = document.getElementById('hairstyle');
    const kategoriSelect = document.getElementById('kategori');
    const hargaInput = document.getElementById('harga');

    const hargaList = {
        'Dewasa': {
            'Spike Hairstyles': 25000,
            'Skin Fade': 25000,
            'Trendy boy Hair cuts': 25000,
            'Hair Style Mohawk': 25000,
            'Tapper Hairstyle': 25000
        },
        'Anak-anak': {
            'Spike Hairstyles': 20000,
            'Skin Fade': 20000,
            'Trendy boy Hair cuts': 20000,
            'Hair Style Mohawk': 20000,
            'Tapper Hairstyle': 20000
        }
    };

    function updateHarga() {
        const hairstyle = hairstyleSelect.value;
        const kategori = kategoriSelect.value;
        if (hairstyle && kategori) {
            hargaInput.value = hargaList[kategori][hairstyle];
        }
    }

    hairstyleSelect.addEventListener('change', updateHarga);
    kategoriSelect.addEventListener('change', updateHarga);

    function updateQueueNumber() {
        const antrianData = JSON.parse(localStorage.getItem('antrianData')) || [];
        queueInput.value = antrianData.length + 1;
    }

    queueForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const antrianData = JSON.parse(localStorage.getItem('antrianData')) || [];
        const newAntrian = {
            nama: namaInput.value,
            alamat: alamatInput.value,
            noHp: noHpInput.value,
            hairstyle: hairstyleSelect.value,
            kategori: kategoriSelect.value,
            harga: hargaInput.value
        };

        antrianData.push(newAntrian);
        localStorage.setItem('antrianData', JSON.stringify(antrianData));

        updateQueueNumber();
        queueForm.reset();
        hargaInput.value = '';
    });

    updateQueueNumber();
});
