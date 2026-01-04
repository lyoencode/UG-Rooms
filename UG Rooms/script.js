// ==========================================
// 1. KONFIGURASI SUPABASE
// ==========================================
const SUPABASE_URL = 'https://maopaamqdlkrtmbrsomu.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_VI4Za4z5q9Naq9GlNOn1Bg_t7X7opLw';

// ✅ PERBAIKAN: Inisialisasi yang benar
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);

// Cek di Console browser apakah berhasil load
console.log("✅ Supabase Client Ready:", supabaseClient);


// ==========================================
// 2. FUNGSI-FUNGSI FETCH DATA DARI SUPABASE
// ==========================================

// Fetch semua ruangan dari database
async function fetchRooms() {
    try {
        const { data, error } = await supabaseClient
            .from('rooms')
            .select('*')
            .order('code', { ascending: true });
        
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Error fetching rooms:", error);
        return [];
    }
}

// Fetch jadwal kuliah dari database
async function fetchSchedules() {
    try {
        const { data, error } = await supabaseClient
            .from('schedules')
            .select(`
                *,
                rooms (code, name, campus)
            `)
            .order('day_of_week', { ascending: true });
        
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Error fetching schedules:", error);
        return [];
    }
}

// Fetch booking user yang sedang login
async function fetchUserBookings(userId) {
    try {
        const { data, error } = await supabaseClient
            .from('bookings')
            .select(`
                *,
                rooms (code, name, campus, region)
            `)
            .eq('user_id', userId)
            .order('created_at', { ascending: false });
        
        if (error) throw error;
        return data || [];
    } catch (error) {
        console.error("Error fetching bookings:", error);
        return [];
    }
}

// Fetch statistik untuk homepage
async function fetchStats() {
    try {
        // Hitung total ruangan tersedia
        const { count: availableCount } = await supabaseClient
            .from('rooms')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'available');
        
        // Hitung booking hari ini
        const today = new Date().toISOString().split('T')[0];
        const { count: todayBookings } = await supabaseClient
            .from('bookings')
            .select('*', { count: 'exact', head: true })
            .eq('date', today);
        
        return {
            availableRooms: availableCount || 0,
            todayBookings: todayBookings || 0
        };
    } catch (error) {
        console.error("Error fetching stats:", error);
        return {
            availableRooms: 0,
            todayBookings: 0
        };
    }
}


// ==========================================
// 3. FUNGSI DISPLAY UNTUK HOMEPAGE (index.html)
// ==========================================

// Update statistik di homepage
async function updateHomeStats() {
    const stats = await fetchStats();
    
    // Update UI
    const availableEl = document.querySelector('.green-accent .text-green');
    const bookingsEl = document.querySelector('.blue-accent .text-blue');
    
    if (availableEl) availableEl.textContent = stats.availableRooms;
    if (bookingsEl) bookingsEl.textContent = stats.todayBookings;
}


// ==========================================
// 4. FUNGSI DISPLAY UNTUK INFO KELAS (info-kelas.html)
// ==========================================

async function displayAllRooms() {
    const roomsContainer = document.getElementById('catalogGrid');
    
    if (!roomsContainer) return;
    
    // Tampilkan loading
    roomsContainer.innerHTML = '<div style="text-align:center;padding:40px;color:#666;">Memuat data ruangan...</div>';
    
    const rooms = await fetchRooms();
    
    if (rooms.length === 0) {
        roomsContainer.innerHTML = '<div style="text-align:center;padding:40px;color:#666;">Tidak ada ruangan tersedia.</div>';
        return;
    }
    
    // Update jumlah ruangan di header
    const countEl = document.querySelector('.catalog-count');
    if (countEl) countEl.textContent = `Menampilkan ${rooms.length} Ruangan`;
    
    roomsContainer.innerHTML = '';
    
    rooms.forEach(room => {
        const roomCard = document.createElement('div');
        roomCard.className = 'info-card-item';
        roomCard.id = `room-${room.id}`;
        
        // Parse facilities dari JSONB
        const facilities = room.facilities || [];
        const facilitiesList = facilities.map(f => 
            `<span class="facility-badge">${f}</span>`
        ).join('');
        
        // Status badge
        const statusClass = room.status === 'available' ? 'status-available' : 'status-unavailable';
        const statusText = room.status === 'available' ? 'Tersedia' : 'Tidak Tersedia';
        
        roomCard.innerHTML = `
            <div class="card-img-container">
                <img src="${room.image_url || '../assets/images/biaya-masuk-universitas-gunadarma-3-1024x576.jpg'}" alt="${room.name}" class="card-img">
                <span class="card-badge ${statusClass}">${statusText}</span>
            </div>
            <div class="card-body">
                <div class="card-title-row">
                    <h3 class="card-title">${room.code} - ${room.name}</h3>
                </div>
                <div class="card-info-row">
                    <span class="info-tag"><i class="fas fa-map-marker-alt"></i> ${room.campus} - ${room.region}</span>
                    <span class="info-tag"><i class="fas fa-users"></i> ${room.capacity} Orang</span>
                </div>
                <div class="card-facilities">
                    ${facilitiesList || '<span class="facility-badge">Standar</span>'}
                </div>
                <button class="btn-detail" onclick="viewRoomDetail(${room.id})">
                    Lihat Detail <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        roomsContainer.appendChild(roomCard);
    });
}

// Fungsi untuk melihat detail ruangan
async function viewRoomDetail(roomId) {
    try {
        const { data: room, error } = await supabaseClient
            .from('rooms')
            .select('*')
            .eq('id', roomId)
            .single();
        
        if (error) throw error;
        
        // Tampilkan modal detail
        showRoomDetailModal(room);
    } catch (error) {
        console.error("Error fetching room detail:", error);
        alert("Gagal memuat detail ruangan");
    }
}

// Tampilkan modal detail ruangan
function showRoomDetailModal(room) {
    // Cek apakah modal sudah ada
    let modal = document.getElementById('roomDetailModal');
    
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'roomDetailModal';
        modal.className = 'modal-overlay';
        document.body.appendChild(modal);
    }
    
    const facilities = room.facilities || [];
    const facilitiesList = facilities.map(f => `<li>${f}</li>`).join('');
    
    const statusClass = room.status === 'available' ? 'room-available' : 'room-unavailable';
    const statusText = room.status === 'available' ? 'Tersedia' : 'Tidak Tersedia';
    
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 800px;">
            <div class="modal-header">
                <h3>${room.code} - ${room.name}</h3>
                <button class="btn-close" onclick="closeRoomDetailModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <img src="${room.image_url || '../assets/images/biaya-masuk-universitas-gunadarma-3-1024x576.jpg'}" 
                     alt="${room.name}" 
                     style="width:100%; height:300px; object-fit:cover; border-radius:10px; margin-bottom:20px;">
                
                <div class="room-stats-grid">
                    <div class="stat-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <div class="stat-label">Lokasi</div>
                            <div class="stat-value">${room.campus} - ${room.region}</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-door-open"></i>
                        <div>
                            <div class="stat-label">Tipe Ruangan</div>
                            <div class="stat-value">${room.type}</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-users"></i>
                        <div>
                            <div class="stat-label">Kapasitas</div>
                            <div class="stat-value">${room.capacity} Orang</div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-check-circle"></i>
                        <div>
                            <div class="stat-label">Status</div>
                            <div class="stat-value ${statusClass}">${statusText}</div>
                        </div>
                    </div>
                </div>
                
                <h4 style="margin-top:20px; margin-bottom:10px;">Fasilitas:</h4>
                <ul style="list-style-position: inside; color:#555;">
                    ${facilitiesList || '<li>Fasilitas standar</li>'}
                </ul>
                
                ${room.status === 'available' ? `
                    <a href="pesan-kelas.html?room=${room.id}" class="btn-primary" style="margin-top:20px; display:inline-block;">
                        <i class="fas fa-calendar-plus"></i> Pesan Ruangan Ini
                    </a>
                ` : `
                    <div style="margin-top:20px; padding:15px; background:#fee; border-radius:8px; color:#c33;">
                        <i class="fas fa-info-circle"></i> Ruangan ini sedang tidak tersedia
                    </div>
                `}
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

function closeRoomDetailModal() {
    const modal = document.getElementById('roomDetailModal');
    if (modal) modal.style.display = 'none';
}


// ==========================================
// 5. FUNGSI DISPLAY UNTUK JADWAL KULIAH (jadwal-kuliah.html)
// ==========================================

async function displayScheduleTable() {
    const scheduleContainer = document.getElementById('scheduleTable');
    
    if (!scheduleContainer) return;
    
    // Tampilkan loading
    scheduleContainer.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;color:#666;">Memuat jadwal...</td></tr>';
    
    const schedules = await fetchSchedules();
    
    if (schedules.length === 0) {
        scheduleContainer.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:40px;color:#666;">Tidak ada jadwal tersedia.</td></tr>';
        return;
    }
    
    scheduleContainer.innerHTML = '';
    
    // Mapping hari
    const dayMap = {
        'Senin': 1, 'Selasa': 2, 'Rabu': 3, 'Kamis': 4, 'Jumat': 5, 'Sabtu': 6, 'Minggu': 0
    };
    
    schedules.forEach(schedule => {
        const row = document.createElement('tr');
        
        const roomInfo = schedule.rooms 
            ? `${schedule.rooms.code} (${schedule.rooms.campus})` 
            : 'N/A';
        
        row.innerHTML = `
            <td>${schedule.day_of_week}</td>
            <td>${schedule.start_time} - ${schedule.end_time}</td>
            <td>${roomInfo}</td>
            <td>${schedule.subject_name}</td>
            <td>${schedule.lecturer_name || '-'}</td>
            <td><span class="status-badge confirmed">Aktif</span></td>
        `;
        
        scheduleContainer.appendChild(row);
    });
}


// ==========================================
// 6. FUNGSI DISPLAY UNTUK PESAN KELAS (pesan-kelas.html)
// ==========================================

async function displayRoomCards() {
    const listView = document.getElementById('listView');
    const emptyState = document.getElementById('emptyState');
    
    if (!listView) return;
    
    // Tampilkan loading
    listView.innerHTML = '<div style="text-align:center;padding:40px;color:#fff;">Memuat ruangan...</div>';
    
    const rooms = await fetchRooms();
    
    if (rooms.length === 0) {
        listView.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    if (emptyState) emptyState.style.display = 'none';
    listView.innerHTML = '';
    
    rooms.forEach(room => {
        // Filter hanya ruangan yang available
        if (room.status !== 'available') return;
        
        const card = document.createElement('div');
        card.className = 'book-card';
        
        const facilities = room.facilities || [];
        const facilitiesList = facilities.slice(0, 3).map(f => 
            `<div class="facility-item-mini">
                <i class="fas fa-check-circle"></i>
                <span>${f}</span>
            </div>`
        ).join('');
        
        card.innerHTML = `
            <div class="book-card-header">
                <div class="book-badge available">Tersedia</div>
            </div>
            <div class="book-card-body">
                <h3 class="book-title">${room.code}</h3>
                <p class="book-subtitle">${room.name}</p>
                
                <div class="book-info-grid">
                    <div class="book-info-item">
                        <img src="../assets/images/tdesign_location-filled.png" class="book-icon">
                        <span>${room.campus} - ${room.region}</span>
                    </div>
                    <div class="book-info-item">
                        <img src="../assets/images/f7_person-2-fill.png" class="book-icon">
                        <span>${room.capacity} Orang</span>
                    </div>
                    <div class="book-info-item">
                        <img src="../assets/images/tabler_map-code.png" class="book-icon">
                        <span>Tipe: ${room.type}</span>
                    </div>
                </div>
                
                <div class="facilities-mini">
                    ${facilitiesList}
                </div>
                
                <button class="btn-book-now" onclick="openBookingDetail(${room.id})">
                    Pesan Sekarang
                </button>
            </div>
        `;
        
        listView.appendChild(card);
    });
}

// Buka detail booking
async function openBookingDetail(roomId) {
    // Cek login dulu
    const { data: { user } } = await supabaseClient.auth.getUser();
    
    if (!user) {
        alert("Silakan login terlebih dahulu untuk memesan ruangan!");
        window.location.href = "login.html";
        return;
    }
    
    try {
        const { data: room, error } = await supabaseClient
            .from('rooms')
            .select('*')
            .eq('id', roomId)
            .single();
        
        if (error) throw error;
        
        // Simpan room ID untuk proses booking
        window.currentRoomId = roomId;
        
        // Update UI detail view
        updateBookingDetailView(room);
        
        // Show detail view
        document.getElementById('listView').style.display = 'none';
        document.getElementById('filterBar').style.display = 'none';
        document.getElementById('detailView').style.display = 'block';
        
    } catch (error) {
        console.error("Error loading room detail:", error);
        alert("Gagal memuat detail ruangan");
    }
}

function updateBookingDetailView(room) {
    const detailView = document.getElementById('detailView');
    if (!detailView) return;
    
    const facilities = room.facilities || [];
    const facilitiesHTML = facilities.map(f => `
        <div class="facility-item">
            <img src="../assets/images/mingcute_black-board-line.png" class="facility-icon">
            <span class="facility-name">${f}</span>
        </div>
    `).join('');
    
    // Update konten
    detailView.querySelector('.detail-title').textContent = `Reservasi ${room.name}`;
    detailView.querySelector('.detail-info-side .info-item:nth-child(1) span').innerHTML = 
        `${room.campus} - ${room.region}`;
    detailView.querySelector('.detail-info-side .info-item:nth-child(2) span').innerHTML = 
        `Kode Kelas - <strong>${room.code}</strong>`;
    detailView.querySelector('.detail-info-side .info-item:nth-child(3) span').textContent = 
        `${room.capacity} Orang`;
    
    const facilitiesContainer = detailView.querySelector('.facilities-grid');
    if (facilitiesContainer && facilitiesHTML) {
        facilitiesContainer.innerHTML = facilitiesHTML;
    }
    
    // Update gambar
    const imgEl = detailView.querySelector('.detail-room-img');
    if (imgEl) {
        imgEl.src = room.image_url || '../assets/images/biaya-masuk-universitas-gunadarma-3-1024x576.jpg';
    }
}

function closeDetail() {
    document.getElementById('listView').style.display = 'flex';
    document.getElementById('filterBar').style.display = 'flex';
    document.getElementById('detailView').style.display = 'none';
    window.currentRoomId = null;
}


// ==========================================
// 7. FUNGSI BOOKING/RESERVASI
// ==========================================

async function handleBooking(event) {
    event.preventDefault();
    
    // 1. Cek user login
    const { data: { user } } = await supabaseClient.auth.getUser();
    
    if (!user) {
        alert("Sesi Anda habis. Silakan login kembali.");
        window.location.href = "login.html";
        return;
    }
    
    // 2. Ambil data form
    const date = document.getElementById('inputDate').value;
    const start = document.getElementById('inputStart').value;
    const end = document.getElementById('inputEnd').value;
    const purpose = document.getElementById('inputPurpose').value;
    const roomId = window.currentRoomId;
    
    // 3. Validasi
    if (!roomId) {
        alert("Error: Ruangan tidak terdeteksi.");
        return;
    }
    
    if (!date || !start || !end || !purpose) {
        alert("Mohon lengkapi semua field!");
        return;
    }
    
    // Validasi waktu
    if (start >= end) {
        alert("Waktu selesai harus lebih besar dari waktu mulai!");
        return;
    }
    
    // 4. Tampilkan loading
    const btn = document.querySelector('.btn-reservasi');
    const oldText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
    btn.disabled = true;
    
    // 5. Insert ke database
    const { error } = await supabaseClient
        .from('bookings')
        .insert({
            room_id: roomId,
            user_id: user.id,
            date: date,
            start_time: start,
            end_time: end,
            purpose: purpose,
            status: 'pending'
        });
    
    // 6. Handle hasil
    if (error) {
        console.error("Booking Error:", error);
        alert("Gagal melakukan reservasi: " + error.message);
        btn.innerHTML = oldText;
        btn.disabled = false;
    } else {
        alert("✅ Reservasi Berhasil Diajukan!\nSilakan tunggu persetujuan admin.");
        closeDetail();
        document.getElementById('bookingForm').reset();
        btn.innerHTML = oldText;
        btn.disabled = false;
    }
}


// ==========================================
// 8. FUNGSI FILTER & SEARCH
// ==========================================

// Global search dari navbar
function handleGlobalSearch() {
    const input = document.getElementById('globalSearchInput');
    if (!input) return;
    
    const keyword = input.value.trim();
    if (keyword) {
        // Cek apakah di root atau di pages
        const isInPages = window.location.pathname.includes('/pages/');
        const targetUrl = isInPages 
            ? 'pesan-kelas.html?q=' + encodeURIComponent(keyword)
            : 'pages/pesan-kelas.html?q=' + encodeURIComponent(keyword);
        window.location.href = targetUrl;
    }
}

// Filter ruangan di halaman pesan-kelas
async function applyCustomFilter() {
    const region = document.getElementById('inputRegion')?.value || '';
    const type = document.getElementById('inputTipe')?.value || '';
    
    const listView = document.getElementById('listView');
    const emptyState = document.getElementById('emptyState');
    
    if (!listView) return;
    
    listView.innerHTML = '<div style="text-align:center;padding:40px;color:#fff;">Memfilter ruangan...</div>';
    
    // Build query
    let query = supabaseClient.from('rooms').select('*').eq('status', 'available');
    
    if (region && region !== 'Semua Region') {
        query = query.eq('region', region);
    }
    
    if (type && type !== 'Semua Tipe') {
        query = query.eq('type', type);
    }
    
    const { data: rooms, error } = await query;
    
    if (error) {
        console.error("Filter error:", error);
        listView.innerHTML = '<div style="text-align:center;padding:40px;color:#fff;">Terjadi kesalahan saat memfilter</div>';
        return;
    }
    
    if (rooms.length === 0) {
        listView.innerHTML = '';
        if (emptyState) emptyState.style.display = 'block';
        return;
    }
    
    // Display hasil filter
    if (emptyState) emptyState.style.display = 'none';
    listView.innerHTML = '';
    
    rooms.forEach(room => {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        const facilities = room.facilities || [];
        const facilitiesList = facilities.slice(0, 3).map(f => 
            `<div class="facility-item-mini">
                <i class="fas fa-check-circle"></i>
                <span>${f}</span>
            </div>`
        ).join('');
        
        card.innerHTML = `
            <div class="book-card-header">
                <div class="book-badge available">Tersedia</div>
            </div>
            <div class="book-card-body">
                <h3 class="book-title">${room.code}</h3>
                <p class="book-subtitle">${room.name}</p>
                
                <div class="book-info-grid">
                    <div class="book-info-item">
                        <img src="../assets/images/tdesign_location-filled.png" class="book-icon">
                        <span>${room.campus} - ${room.region}</span>
                    </div>
                    <div class="book-info-item">
                        <img src="../assets/images/f7_person-2-fill.png" class="book-icon">
                        <span>${room.capacity} Orang</span>
                    </div>
                    <div class="book-info-item">
                        <img src="../assets/images/tabler_map-code.png" class="book-icon">
                        <span>Tipe: ${room.type}</span>
                    </div>
                </div>
                
                <div class="facilities-mini">
                    ${facilitiesList}
                </div>
                
                <button class="btn-book-now" onclick="openBookingDetail(${room.id})">
                    Pesan Sekarang
                </button>
            </div>
        `;
        
        listView.appendChild(card);
    });
}


// ==========================================
// 9. HELPER FUNCTIONS
// ==========================================

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

function formatTime(timeString) {
    if (!timeString) return '';
    return timeString.substring(0, 5); // Format HH:MM dari HH:MM:SS
}


// ==========================================
// 10. FUNGSI DROPDOWN CUSTOM (UNTUK UI)
// ==========================================

function toggleDropdown(listId) {
    const list = document.getElementById(listId);
    if (!list) return;
    list.classList.toggle('show');
}

function selectOption(inputId, listId, value) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    
    if (input) input.value = value;
    if (list) list.classList.remove('show');
}

function filterFunction(inputId, listId) {
    const input = document.getElementById(inputId);
    const list = document.getElementById(listId);
    
    if (!input || !list) return;
    
    const filter = input.value.toUpperCase();
    const items = list.getElementsByClassName('dropdown-item');
    
    for (let i = 0; i < items.length; i++) {
        const txtValue = items[i].textContent || items[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Tutup dropdown kalau klik di luar
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-input')) {
        const dropdowns = document.getElementsByClassName("dropdown-list");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// ==========================================
// 11. FUNGSI HELPDESK WIDGET
// ==========================================

function switchTab(tab) {
    const viewHome = document.getElementById('viewHome');
    const viewHistory = document.getElementById('viewHistory');
    const btnHome = document.getElementById('btnHome');
    const btnHistory = document.getElementById('btnHistory');
    
    if (!viewHome || !viewHistory || !btnHome || !btnHistory) return;
    
    if (tab === 'home') {
        viewHome.style.display = 'block';
        viewHistory.style.display = 'none';
        btnHome.classList.add('active');
        btnHistory.classList.remove('active');
        btnHome.innerHTML = '<i class="fas fa-home"></i>';
        btnHistory.innerHTML = '<i class="far fa-comment-alt"></i>'; 
    } else {
        viewHome.style.display = 'none';
        viewHistory.style.display = 'block';
        btnHome.classList.remove('active');
        btnHistory.classList.add('active');
        btnHome.innerHTML = '<i class="fas fa-home" style="opacity:0.5"></i>';
        btnHistory.innerHTML = '<i class="fas fa-comment-alt"></i>'; 
    }
}

function goToChatRoom() {
    const viewChatRoom = document.getElementById('viewChatRoom');
    if (viewChatRoom) viewChatRoom.style.display = 'flex';
}

function exitChatRoom() {
    const viewChatRoom = document.getElementById('viewChatRoom');
    if (viewChatRoom) viewChatRoom.style.display = 'none';
    switchTab('home');
}

function openHelpdesk() {
    const chatTrigger = document.getElementById('chatTrigger');
    const helpdeskWidget = document.getElementById('helpdeskWidget');
    
    if (chatTrigger) chatTrigger.style.display = 'none';
    if (helpdeskWidget) helpdeskWidget.style.display = 'flex';
    switchTab('home'); 
}

function closeHelpdesk() {
    const helpdeskWidget = document.getElementById('helpdeskWidget');
    const chatTrigger = document.getElementById('chatTrigger');
    
    if (helpdeskWidget) helpdeskWidget.style.display = 'none';
    if (chatTrigger) chatTrigger.style.display = 'flex';
}


// ==========================================
// 12. FUNGSI AUTH NAVBAR (LOGIN/LOGOUT)
// ==========================================

async function handleLogout() {
    if (confirm("Apakah Anda yakin ingin keluar?")) {
        // Logout dari Supabase
        await supabaseClient.auth.signOut();
        
        // Hapus localStorage
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userName");
        localStorage.removeItem("userRole");
        
        // Reload atau redirect
        window.location.href = window.location.pathname.includes('/pages/') 
            ? '../index.html' 
            : 'index.html';
    }
}


// ==========================================
// 13. INISIALISASI SAAT DOM LOADED
// ==========================================

document.addEventListener('DOMContentLoaded', async function() {
    
    // 1. Update Auth Button di Navbar
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userName = localStorage.getItem("userName");
    const authBtn = document.getElementById('authBtn');
    
    if (isLoggedIn === "true" && authBtn) {
        const firstName = userName ? userName.split(" ")[0] : "User";
        authBtn.innerHTML = `${firstName} <i class="fas fa-sign-out-alt"></i>`;
        authBtn.style.backgroundColor = "#E74C3C";
        authBtn.href = "#";
        authBtn.onclick = function(e) {
            e.preventDefault();
            handleLogout();
        };
    }
    
    // 2. Cek halaman dan jalankan fungsi yang sesuai
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    if (currentPage === 'index.html' || currentPage === '') {
        // Homepage
        await updateHomeStats();
    }
    else if (currentPage === 'info-kelas.html') {
        // Info Kelas
        await displayAllRooms();
    }
    else if (currentPage === 'jadwal-kuliah.html') {
        // Jadwal Kuliah
        await displayScheduleTable();
    }
    else if (currentPage === 'pesan-kelas.html') {
        // Pesan Kelas
        await displayRoomCards();
        
        // Setup form booking
        const bookingForm = document.getElementById('bookingForm');
        if (bookingForm) {
            bookingForm.onsubmit = handleBooking;
        }
        
        // Cek URL params untuk search
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('q');
        if (searchQuery) {
            const globalSearchInput = document.getElementById('globalSearchInput');
            if (globalSearchInput) {
                globalSearchInput.value = searchQuery;
            }
            // TODO: Implementasi search berdasarkan query
        }
    }
    
    // 3. Style inject untuk badges dan UI elements
    const style = document.createElement('style');
    style.textContent = `
        .status-badge {
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
            display: inline-block;
        }
        .status-badge.confirmed {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        .status-badge.pending {
            background-color: #fff3e0;
            color: #ef6c00;
        }
        .facility-badge {
            display: inline-block;
            background-color: #e8eaf6;
            color: #3949ab;
            padding: 4px 10px;
            border-radius: 4px;
            font-size: 0.85rem;
            margin: 2px;
        }
        .room-available {
            color: #2e7d32;
            font-weight: 600;
        }
        .room-unavailable {
            color: #c62828;
            font-weight: 600;
        }
        .status-available {
            background: #4caf50;
            color: white;
        }
        .status-unavailable {
            background: #f44336;
            color: white;
        }
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.7);
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }
        .modal-content {
            background: white;
            border-radius: 10px;
            padding: 0;
            max-width: 600px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
        }
        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        .modal-body {
            padding: 20px;
        }
        .btn-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }
        .btn-close:hover {
            color: #333;
        }
        .room-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin: 20px 0;
        }
        .stat-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            background: #f5f5f5;
            border-radius: 8px;
        }
        .stat-item i {
            font-size: 1.5rem;
            color: #763996;
        }
        .stat-label {
            font-size: 0.85rem;
            color: #666;
        }
        .stat-value {
            font-weight: 600;
            color: #333;
        }
    `;
    document.head.appendChild(style);
});