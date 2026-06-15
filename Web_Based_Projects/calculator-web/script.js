// Mengambil elemen layar display dari HTML
const display = document.getElementById('display');

/**
 * Fungsi untuk menambahkan angka atau operator ke layar
 * @param {string} value - Angka atau simbol yang diklik
 */
function appendValue(value) {
    display.value += value;
}

/**
 * Fungsi untuk membersihkan seluruh layar (Tombol C)
 */
function clearDisplay() {
    display.value = '';
}

/**
 * Fungsi untuk menghitung rumus matematika yang ada di layar
 */
function calculate() {
    try {
        // eval() otomatis mengubah teks string seperti "7+3*2" menjadi hasil matematika (13)
        display.value = eval(display.value);
    } catch (error) {
        // Jika pengguna memasukkan rumus yang salah (misal "7++2")
        display.value = 'Error';
    }
}