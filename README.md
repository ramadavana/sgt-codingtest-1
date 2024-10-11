## Coding Test 1 - PT SGT
- Nama: Rama Davana
- Posisi yang dilamar: Front-End Developer
- Email: davana1402@gmail.com
- Whatsapp: +6282249604690

## Project Requirement
1. Node versi 20.15.0
2. NextJS versi 14.2.15
3. React versi ^18
4. Ant Design versi ^5.21.3
5. Tailwind CSS versi ^3.4.1

Catatan:
- Ketika membuat project saya menggunakan @latest sehingga sebagian besar dependencies menggunakan versi "latest".
- Selengkapnya dapat melihat di package.json (Seharusnya menjalankan command instalasi saja sudah cukup)

## How to Run
1. Clone/Download repositori ini.

2. Buka terminal di dalam folder, dan jalankan command di bawah ini satu per satu:
   ```bash
   npm install
   ```
   Kemudian:
   ```bash
   npm run dev
   ```

3. Access aplikasi dapat melalui localhost:
   ```bash
   http://localhost:3000
   ```

4. Homepage-nya tidak ada, hanya fitur loading saja, dan langsung direct ke Login dengan delay 3 detik.

5. Ketika login, dapat memasukkan input apa saja (tidak terintegrasi API). Diisi kosong juga bisa login.

6. Setelah menekan button submit/login, akan redirect lagi ke halaman Dashboard yang berisikan table dengan data yang terintegrasi dengan API. (Data yang diambil secara keseluruhan)

7. Terdapat fitur untuk filter data di atas table dengan form "Name" dan "Country". Input yang diberikan juga dapat dikombinasikan, seperti name = "Universitas" + country = "Indonesia"
   - Untuk "Name" tipe data string, dapat berisikan apa saja, tanpa minimal karakter, dan tanpa case sensitive (uppercase/lowercase tidak berpengaruh)
   - Untuk "Country" tipe data string, harus berisikan nama negara dengan lengap termasuk spasi, dan tanpa case sensitive, contoh:
     ```bash
     indonesia
     Indonesia

     United States
     united states
     ```

8. Tekan tombol "Filter" untuk menampilkan data yang sudah di-filter sesuai dengan input yang diberikan.

## Note
Tolong baca juga kodingan saya, apabila ada kekurangan secara struktural ataupun efisiensi dalam penulisan, saya mohon maaf. Hal tersebut dikarenakan keterbatasan waktu yang membuat saya mempelajari NextJS serta Ant Design, baik secara struktural ataupun syntax, dalam waktu yang relatif singkat.
