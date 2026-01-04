# ✅ CHECKLIST TESTING UG ROOM

Gunakan checklist ini untuk memastikan semua fitur berfungsi dengan baik setelah integrasi Supabase.

---

## 📋 PERSIAPAN

### 1. Setup Database
- [ ] Jalankan file `setup-database.sql` di Supabase SQL Editor
- [ ] Verifikasi semua tabel sudah dibuat (profiles, rooms, schedules, bookings, helpdesk_chats)
- [ ] Verifikasi RLS (Row Level Security) sudah aktif
- [ ] Verifikasi policies sudah dibuat

### 2. Data Sample
- [ ] Tabel `rooms` sudah ada data (minimal 5 ruangan)
- [ ] Tabel `schedules` sudah ada data (minimal 3 jadwal)
- [ ] Cek dengan query: `SELECT COUNT(*) FROM rooms;`

### 3. Buat User Dosen Test
**Via Supabase Dashboard:**
- [ ] Buka Authentication → Users → Invite User
- [ ] Email: `11154782@staff.gunadarma.ac.id`
- [ ] Password: `sanditaufik82` (atau password lain)
- [ ] Klik Send Invite atau Create User
- [ ] User akan otomatis dibuat profil via trigger

**Verifikasi:**
- [ ] Cek di tabel `auth.users` ada user baru
- [ ] Cek di tabel `profiles` ada profil dengan NIM `11154782`

### 4. Update Credentials
- [ ] Ganti `SUPABASE_URL` di `script.js`
- [ ] Ganti `SUPABASE_KEY` di `script.js`
- [ ] Ganti `SUPABASE_URL` di `login.html`
- [ ] Ganti `SUPABASE_KEY` di `login.html`

### 5. Upload File
- [ ] Upload semua file ke hosting/server
- [ ] Struktur folder:
  ```
  /
  ├── index.html
  ├── script.js
  ├── style.css
  └── pages/
      ├── login.html
      ├── pesan-kelas.html
      ├── info-kelas.html
      ├── jadwal-kuliah.html
      └── bantuan.html
  ```

---

## 🧪 TESTING FITUR

### A. Homepage (index.html)
- [ ] Halaman berhasil loading
- [ ] Logo dan navbar terlihat
- [ ] Tombol "Login" ada di navbar
- [ ] Statistik "Ruang Tersedia" menampilkan angka dari database (bukan 0)
- [ ] Statistik "Reservasi Hari Ini" menampilkan angka (bisa 0 jika belum ada booking)
- [ ] Widget Helpdesk bisa dibuka/tutup
- [ ] Tombol "Lihat Daftar Kelas" → redirect ke `info-kelas.html`

**Console Check:**
- [ ] Buka F12 → Console
- [ ] Harus ada: `✅ Supabase Client Ready: {}`
- [ ] Tidak ada error merah

---

### B. Login (pages/login.html)

#### Test Login Berhasil
- [ ] Buka `pages/login.html`
- [ ] Input NIM: `11154782`
- [ ] Input Password: `sanditaufik82` (atau password yang dibuat)
- [ ] Klik "Log in"
- [ ] Muncul toast hijau: "Login Berhasil! Halo, Taufik Hidayat"
- [ ] Otomatis redirect ke `index.html` setelah 1.5 detik

#### Test Login Gagal
- [ ] Input NIM salah: `99999999`
- [ ] Input Password: `apapun`
- [ ] Klik "Log in"
- [ ] Muncul toast merah: "NIM atau Password salah!"

#### Test Validasi
- [ ] Input NIM kosong → Muncul error
- [ ] Input NIM kurang dari 8 digit: `1234` → Muncul error
- [ ] Input NIM huruf: `abcd1234` → Muncul error

#### Setelah Login Berhasil
- [ ] Di navbar, tombol berubah dari "Login" menjadi nama user: "Taufik" (warna merah)
- [ ] Klik tombol nama user → Muncul konfirmasi logout
- [ ] Klik OK → Logout berhasil → Tombol kembali jadi "Login"

**Console Check:**
- [ ] Buka F12 → Console
- [ ] Saat login, harus ada: `✅ Supabase Client Ready`
- [ ] Tidak ada error

---

### C. Info Kelas (pages/info-kelas.html)

#### Display Ruangan
- [ ] Halaman berhasil loading
- [ ] Muncul teks "Menampilkan X Ruangan" (X = jumlah ruangan di database)
- [ ] Card ruangan muncul dengan data dari database
- [ ] Setiap card menampilkan:
  - Kode ruangan (contoh: D281)
  - Nama ruangan
  - Status (Tersedia/Tidak Tersedia)
  - Lokasi (Campus - Region)
  - Kapasitas
  - Fasilitas (badge)

#### Detail Ruangan
- [ ] Klik tombol "Lihat Detail" pada salah satu card
- [ ] Muncul modal dengan detail lengkap ruangan
- [ ] Foto ruangan ditampilkan
- [ ] Info ruangan lengkap (lokasi, tipe, kapasitas, status)
- [ ] List fasilitas ditampilkan
- [ ] Tombol "Pesan Ruangan Ini" muncul (jika available)
- [ ] Klik tombol X → Modal tertutup

**Console Check:**
- [ ] Tidak ada error saat load ruangan
- [ ] Tidak ada error saat buka modal detail

---

### D. Jadwal Kuliah (pages/jadwal-kuliah.html)

#### Display Jadwal
- [ ] Halaman berhasil loading
- [ ] Tabel jadwal muncul
- [ ] Data jadwal dari database ditampilkan
- [ ] Setiap row menampilkan:
  - Hari
  - Waktu (start - end)
  - Ruangan (kode + campus)
  - Mata Kuliah
  - Dosen
  - Status (badge "Aktif")

#### Test dengan Data Kosong
- [ ] Jika tidak ada jadwal → Muncul pesan "Tidak ada jadwal tersedia"

**Console Check:**
- [ ] Tidak ada error saat load jadwal

---

### E. Pesan Kelas (pages/pesan-kelas.html)

#### Test Tanpa Login
- [ ] Logout dulu (klik nama user → logout)
- [ ] Buka `pages/pesan-kelas.html`
- [ ] Card ruangan muncul
- [ ] Klik "Pesan Sekarang" pada salah satu card
- [ ] Muncul alert: "Silakan login terlebih dahulu untuk memesan ruangan!"
- [ ] Otomatis redirect ke `login.html`

#### Test dengan Login
- [ ] Login dulu (NIM: `11154782`, Password: `sanditaufik82`)
- [ ] Buka `pages/pesan-kelas.html`
- [ ] Card ruangan tersedia muncul (hanya yang status = 'available')
- [ ] Klik "Pesan Sekarang" pada salah satu card
- [ ] Muncul form booking di sebelah kanan

#### Test Form Booking
- [ ] Form detail ruangan ter-update sesuai ruangan yang dipilih
- [ ] Input Tanggal: Pilih tanggal besok
- [ ] Input Waktu Mulai: `10:00`
- [ ] Input Waktu Selesai: `12:00`
- [ ] Input Tujuan: `Kuliah Pengganti PBO`
- [ ] Klik "Ajukan Reservasi"
- [ ] Tombol berubah jadi "Mengirim..." dengan loading icon
- [ ] Muncul alert: "✅ Reservasi Berhasil Diajukan! Silakan tunggu persetujuan admin."
- [ ] Form tertutup, kembali ke list ruangan

#### Test Validasi Form
- [ ] Waktu Selesai lebih kecil dari Waktu Mulai → Muncul error
- [ ] Field kosong → Muncul error "Mohon lengkapi semua field!"

#### Verifikasi Database
- [ ] Buka Supabase → Table Editor → `bookings`
- [ ] Harus ada 1 row baru dengan:
  - room_id = (sesuai ruangan yang dipilih)
  - user_id = (UUID user yang login)
  - date, start_time, end_time = (sesuai input)
  - purpose = "Kuliah Pengganti PBO"
  - status = "pending"

#### Test Filter
- [ ] Pilih filter Region: "Depok"
- [ ] Klik "Gunakan Filter"
- [ ] Hanya ruangan di Depok yang muncul
- [ ] Reset filter (pilih "Semua Region")
- [ ] Semua ruangan muncul lagi

**Console Check:**
- [ ] Tidak ada error saat load ruangan
- [ ] Tidak ada error saat submit booking
- [ ] Cek response booking: Harus sukses tanpa error

---

### F. Search Global

#### Test dari Homepage
- [ ] Di homepage, ketik "D281" di search bar navbar
- [ ] Tekan Enter atau klik icon search
- [ ] Redirect ke `pages/pesan-kelas.html?q=D281`
- [ ] (Fitur search belum diimplementasi full, tapi redirect sudah bekerja)

#### Test dari Halaman Lain
- [ ] Di halaman lain (info-kelas, jadwal), coba search
- [ ] Redirect ke `pesan-kelas.html` dengan query

---

## 🔧 TROUBLESHOOTING COMMON ERRORS

### Error: "Supabase is not defined"
**Fix:**
- Pastikan `<script src="https://unpkg.com/@supabase/supabase-js@2"></script>` ada di `<head>`

### Error: "Failed to fetch"
**Fix:**
- Cek URL Supabase benar
- Cek Publishable Key benar
- Cek internet connection

### Error: "User not found" saat login
**Fix:**
- Pastikan user sudah dibuat di Supabase Auth
- Email harus format: `{nim}@staff.gunadarma.ac.id`
- Cek password benar

### Error: "Policy violation" saat booking
**Fix:**
- Pastikan RLS policies sudah dibuat dengan benar
- Jalankan ulang bagian "BUAT POLICIES" di `setup-database.sql`

### Statistik homepage tidak update
**Fix:**
- Cek console untuk error
- Pastikan ada data di tabel `rooms` dengan status = 'available'
- Cek fungsi `fetchStats()` di `script.js`

### Ruangan tidak muncul
**Fix:**
- Cek console untuk error
- Pastikan ada data di tabel `rooms`
- Cek RLS policy "Public Read Rooms" sudah dibuat
- Test query manual: `SELECT * FROM rooms;` di Supabase SQL Editor

---

## 📊 FINAL CHECK

### Database
- [ ] Total rooms: >= 5
- [ ] Total schedules: >= 3
- [ ] Total profiles: >= 1
- [ ] Total bookings: >= 1 (setelah test booking)
- [ ] RLS enabled untuk semua tabel
- [ ] Policies aktif dan bekerja

### Frontend
- [ ] Semua halaman loading tanpa error
- [ ] Login/Logout berfungsi
- [ ] Data real-time dari database
- [ ] Booking berhasil insert ke database
- [ ] Navbar update setelah login
- [ ] No console errors

### Security
- [ ] RLS aktif (data tidak bisa diakses tanpa policy)
- [ ] User hanya bisa baca/edit data sendiri
- [ ] Publishable Key digunakan (bukan Secret/Service Role)

---

## ✅ CHECKLIST COMPLETED!

Jika semua checklist di atas sudah ✅, maka aplikasi UG Room sudah siap digunakan! 🎉

**Next Steps:**
1. Deploy ke production server
2. Training user (dosen)
3. Monitoring penggunaan
4. Implementasi fitur tambahan (lihat TODO di README.md)

---

**Notes:**
- Simpan credentials Supabase dengan aman
- Jangan commit file dengan credentials ke Git
- Gunakan environment variables untuk production
- Backup database secara berkala
