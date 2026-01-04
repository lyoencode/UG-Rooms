# UG ROOM - Dokumentasi Perbaikan

## 📋 Ringkasan Perubahan

Proyek ini telah diperbaiki untuk mengintegrasikan **Supabase** sebagai backend dan menghapus semua data dummy. Berikut adalah perubahan utama:

---

## ✅ Masalah yang Diperbaiki

### 1. **Bug Inisialisasi Supabase**
**Masalah Lama:**
```javascript
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// ❌ Error: supabase is not defined
```

**Solusi Baru:**
```javascript
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
// ✅ Works!
```

### 2. **Data Dummy Dihapus**
Semua data dummy (rooms, schedules, bookings) telah dihapus dan diganti dengan **fetch real-time dari Supabase**.

### 3. **Autentikasi yang Benar**
Login sekarang menggunakan **Supabase Auth** dengan format email:
- Input: `11154782` (NIM)
- Dikonversi ke: `11154782@staff.gunadarma.ac.id`
- Password: sesuai yang didaftarkan di Supabase

---

## 📁 File yang Diperbaiki

### 1. **script.js** (File Utama)
**Perubahan:**
- ✅ Fix inisialisasi Supabase
- ✅ Menambahkan fungsi `fetchRooms()` - ambil data ruangan dari database
- ✅ Menambahkan fungsi `fetchSchedules()` - ambil jadwal dari database
- ✅ Menambahkan fungsi `fetchUserBookings()` - ambil booking user
- ✅ Menambahkan fungsi `fetchStats()` - statistik untuk homepage
- ✅ Implementasi filter & search dengan Supabase query
- ✅ Hapus semua dummy data

**Fungsi Penting:**
```javascript
// Fetch ruangan
const rooms = await fetchRooms();

// Fetch jadwal
const schedules = await fetchSchedules();

// Filter ruangan
let query = supabaseClient
    .from('rooms')
    .select('*')
    .eq('status', 'available');

if (region) query = query.eq('region', region);
if (type) query = query.eq('type', type);
```

### 2. **login.html**
**Perubahan:**
- ✅ Fix inisialisasi Supabase
- ✅ Implementasi login dengan Supabase Auth
- ✅ Konversi NIM ke email format
- ✅ Fetch profile dari tabel `profiles`
- ✅ Simpan session ke localStorage
- ✅ Redirect otomatis jika sudah login

**Flow Login:**
```
1. User input NIM: 11154782
2. Konversi ke email: 11154782@staff.gunadarma.ac.id
3. Login dengan Supabase Auth
4. Fetch nama dari tabel profiles
5. Simpan ke localStorage
6. Redirect ke homepage
```

### 3. **index.html**
**Perubahan:**
- ✅ Menghapus script dummy login
- ✅ Statistik real-time dari Supabase
- ✅ Update UI navbar (login/logout)

### 4. **pesan-kelas.html**
**Perubahan:**
- ✅ Display ruangan dari database
- ✅ Filter berdasarkan region & type
- ✅ Form booking langsung insert ke Supabase
- ✅ Validasi login sebelum booking

**Flow Booking:**
```
1. User klik "Pesan Sekarang"
2. Cek apakah sudah login
3. Tampilkan form booking
4. Submit → Insert ke tabel bookings
5. Status: pending (menunggu approval admin)
```

### 5. **info-kelas.html**
**Perubahan:**
- ✅ Display katalog ruangan dari database
- ✅ Detail ruangan dengan modal
- ✅ Fasilitas dari JSONB field

### 6. **jadwal-kuliah.html**
**Perubahan:**
- ✅ Display jadwal dari database
- ✅ Join dengan tabel rooms untuk info ruangan

---

## 🗄️ Struktur Database (Sudah Sesuai)

Pastikan database Supabase Anda sudah memiliki tabel-tabel ini:

### 1. **profiles**
```sql
- id (uuid, primary key, references auth.users)
- nim (text, unique)
- full_name (text)
- faculty (text)
- avatar_url (text)
```

### 2. **rooms**
```sql
- id (bigint, primary key)
- code (text) -- contoh: D281, K132
- name (text)
- campus (text) -- D, E, K, J
- region (text) -- Depok, Karawaci, dll
- type (text) -- Mengajar, Praktikum, Laboratorium
- capacity (int)
- facilities (jsonb) -- ['AC', 'Proyektor', 'PC']
- image_url (text)
- status (text, default 'available')
```

### 3. **schedules**
```sql
- id (bigint, primary key)
- room_id (bigint, foreign key → rooms.id)
- subject_name (text)
- lecturer_name (text)
- day_of_week (text) -- Senin, Selasa, ...
- start_time (time)
- end_time (time)
- semester (text)
```

### 4. **bookings**
```sql
- id (bigint, primary key)
- room_id (bigint, foreign key → rooms.id)
- user_id (uuid, foreign key → profiles.id)
- date (date)
- start_time (time)
- end_time (time)
- purpose (text)
- status (text, default 'pending')
- created_at (timestamp)
```

---

## 🔐 Row Level Security (RLS)

Pastikan RLS sudah diaktifkan dengan policy:

```sql
-- Semua orang bisa baca ruangan
CREATE POLICY "Public Read Rooms"
ON rooms FOR SELECT USING (true);

-- User login bisa baca profil sendiri
CREATE POLICY "User Read Profile"
ON profiles FOR SELECT USING (auth.uid() = id);

-- User login bisa insert booking
CREATE POLICY "User Insert Booking"
ON bookings FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- User hanya bisa baca booking sendiri
CREATE POLICY "User Read Own Bookings"
ON bookings FOR SELECT USING (auth.uid() = user_id);
```

---

## 🚀 Cara Menggunakan

### 1. **Setup Supabase**
```bash
1. Buka Supabase Dashboard
2. Settings → API
3. Copy:
   - Project URL
   - Publishable Key (yang baru, bukan legacy anon key)
```

### 2. **Update Kredensial**
Edit di semua file (script.js, login.html):
```javascript
const SUPABASE_URL = 'https://your-project.supabase.co';
const SUPABASE_KEY = 'sb_publishable_...';
```

### 3. **Buat User Dosen di Supabase**

**Cara 1: Via Supabase Dashboard**
```
1. Authentication → Users → Invite User
2. Email: 11154782@staff.gunadarma.ac.id
3. Password: (buat password)
4. Kirim invite
```

**Cara 2: Via SQL (Lebih Cepat)**
```sql
-- 1. Buat user di auth.users (otomatis via Supabase Auth)
-- 2. Insert profil
INSERT INTO profiles (id, nim, full_name, faculty)
VALUES (
    'user-uuid-dari-auth',
    '11154782',
    'Taufik Hidayat',
    'Teknologi Industri'
);
```

### 4. **Input Data Sample**

**Ruangan:**
```sql
INSERT INTO rooms (code, name, campus, region, type, capacity, facilities, status)
VALUES 
('D281', 'Ruang Kelas D281', 'D', 'Depok', 'Mengajar', 40, '["AC", "Proyektor", "Whiteboard"]', 'available'),
('K132', 'Lab Komputer K132', 'K', 'Karawaci', 'Praktikum', 38, '["AC", "PC", "Proyektor", "Whiteboard"]', 'available'),
('E101', 'Auditorium E101', 'E', 'Kelapa Dua', 'Auditorium', 200, '["AC", "Proyektor", "Sound System", "Mic"]', 'available');
```

**Jadwal:**
```sql
INSERT INTO schedules (room_id, subject_name, lecturer_name, day_of_week, start_time, end_time, semester)
VALUES 
(1, 'Pemrograman Web', 'Hengky Mulyono', 'Senin', '08:00', '10:00', 'PTA 2025/2026'),
(2, 'Basis Data', 'Rina Noviana', 'Selasa', '10:00', '12:00', 'PTA 2025/2026');
```

### 5. **Test Login**
```
1. Buka: login.html
2. Input NIM: 11154782
3. Input Password: (password yang dibuat)
4. Klik Login
5. ✅ Berhasil → redirect ke index.html
```

---

## 🔍 Fitur yang Sudah Berfungsi

- ✅ Login dengan NIM
- ✅ Logout
- ✅ Display ruangan real-time
- ✅ Display jadwal kuliah
- ✅ Filter ruangan (region, type)
- ✅ Booking ruangan (insert ke database)
- ✅ Statistik homepage (ruang tersedia, booking hari ini)
- ✅ Detail ruangan dengan modal

---

## 🐛 Troubleshooting

### Problem: "Supabase is not defined"
**Solusi:** Pastikan `<script src="https://unpkg.com/@supabase/supabase-js@2"></script>` ada di `<head>`

### Problem: "Login gagal - NIM/Password salah"
**Solusi:** 
1. Cek apakah user sudah terdaftar di Supabase Auth
2. Email harus format: `{nim}@staff.gunadarma.ac.id`
3. Cek password benar

### Problem: "Data tidak muncul"
**Solusi:**
1. Buka Console Browser (F12)
2. Lihat error di tab Console
3. Cek apakah RLS policy sudah benar
4. Cek apakah ada data di tabel

### Problem: "Booking gagal"
**Solusi:**
1. Pastikan user sudah login
2. Cek policy `bookings` - user harus bisa INSERT
3. Validasi semua field form terisi

---

## 📝 TODO / Pengembangan Selanjutnya

- [ ] Implementasi chat helpdesk (insert ke `helpdesk_chats`)
- [ ] Halaman "Booking Saya" (list booking user)
- [ ] Sistem approval admin untuk booking
- [ ] Notifikasi real-time
- [ ] Upload foto ruangan
- [ ] Export jadwal ke PDF/Excel
- [ ] Cek bentrok jadwal otomatis

---

## 📞 Kontak

Jika ada pertanyaan atau bug, silakan hubungi developer atau buka issue.

---

**🎉 Selamat! Aplikasi UG Room sudah terintegrasi dengan Supabase!**
