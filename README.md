# KompuDoc

## Tentang Proyek
KompuDoc adalah website sederhana untuk konsultasi dan troubleshooting komputer. Website ini menyediakan halaman login yang memungkinkan pengguna untuk memasukkan e-mail, username, dan password sebelum mengakses halaman utama.

Proyek ini dibuat menggunakan **HTML**, **CSS**, dan **JavaScript**
## Fitur
- Form login dengan validasi e-mail, username, dan password
- Tombol visibilitas password
- Penyimpanan data login sederhana menggunakan `sessionStorage`
- Halaman utama yang menunjukkan username dan e-mail pengguna
- Dukungan mode terang dan gelap

## Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript
- `sessionStorage`

## Cara Menjalankan
Tidak ada instalasi atau dependensi tambahan yang diperlukan.
1. Clone repository
Clone repository menggunakan Git:
```bash
git clone https://github.com/Tr-Triatus/KompuDoc.git
```
Kemudian masuk ke folder proyek:
```bash
cd KompuDoc
```
2. Buka proyek
Buka folder proyek menggunakan code editor (i.e. **Visual Studio Code**)
Halaman utama proyek adalah:
```bash
index.html
```
3. Jalankan aplikasi
Buka file `index.html` menggunakan browser seperti Google Chrome. Alternatifnya, jika menggunakan Visual Studio Code, proyek dapat dijalankan menggunakan extension seperti **Live Server**. Setelah dijalankan, halaman login KompuDoc akan ditampilkan.

## Struktur Proyek
```text
KompuDoc/
├── index.html
├── home.html
├── css/
|    └── style.css
└── js/
     ├── login.js
     └── home.js
```