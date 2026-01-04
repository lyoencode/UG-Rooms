# 🚀 UG ROOM - QUICK START GUIDE

## 📦 File yang Sudah Diperbaiki

Berikut adalah file-file yang sudah diperbaiki dan siap digunakan:

### ✅ File JavaScript
- **script.js** - File utama dengan koneksi Supabase dan semua fungsi

### ✅ File HTML
- **index.html** - Homepage
- **login.html** - Halaman login (dalam folder pages/)
- **pesan-kelas.html** - Halaman booking ruangan (dalam folder pages/)
- **info-kelas.html** - Katalog ruangan (dalam folder pages/)
- **jadwal-kuliah.html** - Jadwal kuliah rutin (dalam folder pages/)
- **bantuan.html** - Halaman bantuan (dalam folder pages/)

### ✅ File CSS
- **style.css** - Styling (tidak berubah, sudah dicopy)

### ✅ File Dokumentasi
- **README.md** - Dokumentasi lengkap
- **CHECKLIST-TESTING.md** - Panduan testing
- **setup-database.sql** - SQL untuk setup database

---

## 🔑 Credentials Yang Perlu Diganti

Di file **script.js** dan **login.html**, ganti:

```javascript
const SUPABASE_URL = 'https://maopaamqdlkrtmbrsomu.supabase.co';
const SUPABASE_KEY = 'sb_publishable_...';
```

Dengan credentials Supabase Anda (yang SEKARANG sudah benar formatnya!).

---

## 📂 Struktur Folder yang Benar

```
/
├── index.html
├── script.js
├── style.css
├── assets/
│   └── images/
│       └── (semua gambar Anda)
└── pages/
    ├── login.html
    ├── pesan-kelas.html
    ├── info-kelas.html
    ├── jadwal-kuliah.html
    └── bantuan.html
```

---

## ⚡ Quick Start (3 Langkah)

### 1️⃣ Setup Database
```bash
# Buka Supabase Dashboard
# SQL Editor → New Query
# Copy-paste isi file: setup-database.sql
# Klik RUN
```

### 2️⃣ Buat User Test
```bash
# Supabase Dashboard
# Authentication → Users → Invite User
# Email: 11154782@staff.gunadarma.ac.id
# Password: sanditaufik82
# Klik Create User
```

### 3️⃣ Upload File & Test
```bash
# Upload semua file ke server/hosting
# Buka: login.html
# Login dengan NIM: 11154782, Password: sanditaufik82
# ✅ Berhasil!
```

---

## 🐛 Troubleshooting Cepat

| Problem | Solution |
|---------|----------|
| Supabase is not defined | Tambahkan `<script src="https://unpkg.com/@supabase/supabase-js@2"></script>` di head |
| Login gagal | Pastikan user sudah dibuat di Supabase Auth dengan email format benar |
| Data tidak muncul | Cek RLS policies sudah dibuat, cek console untuk error |
| Booking gagal | Pastikan user sudah login, cek policy INSERT untuk bookings |

---

## 📊 Apa yang Berubah?

### ✅ Yang Diperbaiki:
1. **Inisialisasi Supabase** - Bug `supabase.createClient` fixed
2. **Data Dummy Dihapus** - Semua data sekarang dari database real
3. **Login Real** - Menggunakan Supabase Auth
4. **Booking Real** - Insert langsung ke database
5. **Display Real** - Fetch data real-time dari Supabase

### ❌ Yang Dihapus:
- Semua `dummyRooms`, `dummySchedule`, `dummyBookings`
- Hardcoded user credentials
- Fake data/mock data

### ➕ Yang Ditambah:
- Fungsi `fetchRooms()` - Ambil ruangan dari DB
- Fungsi `fetchSchedules()` - Ambil jadwal dari DB
- Fungsi `fetchUserBookings()` - Ambil booking user dari DB
- Fungsi `fetchStats()` - Statistik real-time
- Filter & search dengan Supabase query
- Auto-update navbar setelah login

---

## 🎯 Testing Checklist (Singkat)

- [ ] Login berhasil dengan NIM + Password
- [ ] Statistik homepage menampilkan angka dari database
- [ ] Info kelas menampilkan ruangan dari database
- [ ] Jadwal kuliah menampilkan jadwal dari database
- [ ] Booking berhasil dan tersimpan di database
- [ ] Logout berhasil

Untuk testing lengkap, lihat **CHECKLIST-TESTING.md**

---

## 📚 Dokumentasi Lengkap

- **README.md** - Penjelasan detail semua perubahan
- **CHECKLIST-TESTING.md** - Panduan testing step-by-step
- **setup-database.sql** - SQL untuk setup database dengan data sample

---

## 🔥 Yang Perlu Anda Lakukan Sekarang

1. **Baca README.md** - Pahami semua perubahan
2. **Jalankan setup-database.sql** - Setup database Supabase
3. **Ganti credentials** - Update SUPABASE_URL dan SUPABASE_KEY
4. **Upload file** - Upload semua file ke server
5. **Buat user test** - Buat user di Supabase Auth
6. **Test login** - Test dengan NIM dan password
7. **Test booking** - Coba booking ruangan
8. **Ikuti CHECKLIST-TESTING.md** - Testing lengkap semua fitur

---

## 💡 Tips

- Gunakan **Incognito/Private Window** untuk test logout
- Buka **Console (F12)** untuk debug jika ada error
- Cek **Supabase Table Editor** untuk lihat data yang tersimpan
- Backup database sebelum production

---

## 🎉 Selamat!

Aplikasi UG Room Anda sudah siap dengan **Supabase Integration**!

Jika ada pertanyaan atau bug, silakan kontak developer atau buka issue.

**Happy Coding! 🚀**
