let inputNama = prompt ('Masukkan Nama Anda')
let nama = ('Selamat datang ' + inputNama + ', Klik tombol OK atau Enter pada keyboard untuk melanjutkan')

alert(nama)

document.addEventListener('scroll', () => {
    const header = document.querySelector ('header');

    if (window.scrollY > 10) {
        header.classList.add('scrolled')
    } else {
        header.classList.remove('scrolled')
    }
})