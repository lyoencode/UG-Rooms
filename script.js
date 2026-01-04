// Data Dummy Ruang Kelas
const dummyRooms = [
    {
        id: 1,
        code: "LAB-301",
        name: "Laboratorium Komputer 301",
        capacity: 40,
        projector: true,
        location: "Gedung D, Lantai 3",
        facilities: ["AC", "Proyektor", "PC 40 Unit", "Whiteboard", "Internet"],
        status: "available",
        building: "Gedung D"
    },
    {
        id: 2,
        code: "R-402",
        name: "Ruang Kelas 402",
        capacity: 60,
        projector: true,
        location: "Gedung A, Lantai 4",
        facilities: ["AC", "Proyektor", "Sound System", "Whiteboard"],
        status: "available",
        building: "Gedung A"
    },
    {
        id: 3,
        code: "R-205",
        name: "Ruang Kelas 205",
        capacity: 50,
        projector: true,
        location: "Gedung B, Lantai 2",
        facilities: ["AC", "Proyektor", "Whiteboard"],
        status: "unavailable",
        building: "Gedung B"
    },
    {
        id: 4,
        code: "LAB-101",
        name: "Laboratorium Desain 101",
        capacity: 30,
        projector: true,
        location: "Gedung C, Lantai 1",
        facilities: ["AC", "Proyektor", "iMac 30 Unit", "Tablet Grafik", "Internet"],
        status: "available",
        building: "Gedung C"
    },
    {
        id: 5,
        code: "LAB-501",
        name: "Laboratorium AI 501",
        capacity: 25,
        projector: true,
        location: "Gedung E, Lantai 5",
        facilities: ["AC", "Proyektor 4K", "Server GPU", "PC High-End", "Internet Fiber"],
        status: "available",
        building: "Gedung E"
    },
    {
        id: 6,
        code: "R-401",
        name: "Ruang Kelas 401",
        capacity: 45,
        projector: false,
        location: "Gedung B, Lantai 4",
        facilities: ["AC", "Whiteboard"],
        status: "available",
        building: "Gedung B"
    },
    {
        id: 7,
        code: "AUD-001",
        name: "Auditorium Utama",
        capacity: 200,
        projector: true,
        location: "Gedung Pusat, Lantai 1",
        facilities: ["AC", "Proyektor 4K", "Sound System Profesional", "Panggung", "Mic Wireless"],
        status: "unavailable",
        building: "Gedung Pusat"
    },
    {
        id: 8,
        code: "R-105",
        name: "Ruang Seminar 105",
        capacity: 80,
        projector: true,
        location: "Gedung F, Lantai 1",
        facilities: ["AC", "Proyektor", "Sound System", "Whiteboard", "Meja Bundar"],
        status: "available",
        building: "Gedung F"
    }
];

// Data Dummy Jadwal
const dummySchedule = [
    { id: 1, room: "LAB-301", day: "Senin", date: "2024-01-15", startTime: "08:00", endTime: "10:00", lecturer: "Dr. Ahmad Santoso, M.Kom", course: "Pemrograman Web", status: "confirmed" },
    { id: 2, room: "R-402", day: "Senin", date: "2024-01-15", startTime: "10:00", endTime: "12:00", lecturer: "Prof. Siti Nurhaliza, Ph.D", course: "Data Science", status: "confirmed" },
    { id: 3, room: "R-205", day: "Senin", date: "2024-01-15", startTime: "13:00", endTime: "15:00", lecturer: "Dr. Budi Raharjo, M.T.I", course: "Manajemen Proyek IT", status: "confirmed" },
    { id: 4, room: "LAB-101", day: "Senin", date: "2024-01-15", startTime: "15:00", endTime: "17:00", lecturer: "Maya Indah, S.Ds., M.Ds.", course: "UI/UX Design", status: "pending" },
    { id: 5, room: "LAB-501", day: "Selasa", date: "2024-01-16", startTime: "08:00", endTime: "10:00", lecturer: "Dr. Rizki Priambodo, M.Sc", course: "Machine Learning", status: "confirmed" },
    { id: 6, room: "R-401", day: "Selasa", date: "2024-01-16", startTime: "10:00", endTime: "12:00", lecturer: "Ir. Bambang Susanto, M.Kom", course: "Cyber Security", status: "confirmed" },
    { id: 7, room: "AUD-001", day: "Selasa", date: "2024-01-16", startTime: "13:00", endTime: "15:00", lecturer: "Dr. Michael Tanuwijaya", course: "Seminar Teknologi", status: "confirmed" },
    { id: 8, room: "R-105", day: "Selasa", date: "2024-01-16", startTime: "15:00", endTime: "17:00", lecturer: "Dr. Sarah Wijaya, M.Si", course: "Statistika", status: "pending" }
];

// Data Dummy Pengguna (Dosen)
const dummyUsers = [
    { id: 1, name: "Dr. Ahmad Santoso, M.Kom", email: "ahmad.santoso@staff.gunadarma.ac.id", role: "dosen", faculty: "Teknologi Informasi" },
    { id: 2, name: "Prof. Siti Nurhaliza, Ph.D", email: "siti.nurhaliza@staff.gunadarma.ac.id", role: "dosen", faculty: "Ilmu Komputer" },
    { id: 3, name: "Dr. Budi Raharjo, M.T.I", email: "budi.raharjo@staff.gunadarma.ac.id", role: "dosen", faculty: "Sistem Informasi" },
    { id: 4, name: "Maya Indah, S.Ds., M.Ds.", email: "maya.indah@staff.gunadarma.ac.id", role: "dosen", faculty: "Desain Komunikasi Visual" }
];

// Data Dummy Pemesanan
const dummyBookings = [
    { id: 1, roomId: 1, userId: 1, date: "2024-01-22", startTime: "08:00", endTime: "10:00", purpose: "Kuliah Pemrograman Web", status: "approved" },
    { id: 2, roomId: 2, userId: 2, date: "2024-01-22", startTime: "10:00", endTime: "12:00", purpose: "Kuliah Data Science", status: "pending" },
    { id: 3, roomId: 3, userId: 3, date: "2024-01-23", startTime: "13:00", endTime: "15:00", purpose: "Kuliah Manajemen Proyek", status: "approved" },
    { id: 4, roomId: 4, userId: 4, date: "2024-01-23", startTime: "15:00", endTime: "17:00", purpose: "Kuliah UI/UX Design", status: "rejected" }
];

// Fungsi untuk menampilkan ruang kelas di halaman beranda
function displayAvailableRooms() {
    const roomsContainer = document.getElementById('availableRooms');
    
    if (roomsContainer) {
        // Ambil 4 ruang kelas pertama yang available
        const availableRooms = dummyRooms.filter(room => room.status === "available").slice(0, 4);
        
        availableRooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'room-card';
            
            roomCard.innerHTML = `
                <div class="room-header">
                    <div class="room-code">${room.code}</div>
                    <div class="room-name">${room.name}</div>
                </div>
                <div class="room-content">
                    <div class="room-info">
                        <div class="room-info-item">
                            <span class="room-info-label">Kapasitas</span>
                            <span class="room-info-value">${room.capacity} kursi</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Proyektor</span>
                            <span class="room-info-value">${room.projector ? 'Tersedia' : 'Tidak Tersedia'}</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Lokasi</span>
                            <span class="room-info-value">${room.location}</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Status</span>
                            <span class="room-info-value room-available">Tersedia</span>
                        </div>
                    </div>
                    <div class="room-actions">
                        <a href="pages/pesan-kelas.html?room=${room.id}" class="btn-small btn-book">
                            <i class="fas fa-calendar-plus"></i> Pesan
                        </a>
                        <a href="pages/info-kelas.html#room-${room.id}" class="btn-small btn-detail">
                            <i class="fas fa-info-circle"></i> Detail
                        </a>
                    </div>
                </div>
            `;
            
            roomsContainer.appendChild(roomCard);
        });
    }
}

// Fungsi untuk menampilkan semua ruang kelas di halaman info kelas
function displayAllRooms() {
    const roomsContainer = document.getElementById('allRooms');
    
    if (roomsContainer) {
        dummyRooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'room-card';
            roomCard.id = `room-${room.id}`;
            
            // Format fasilitas
            const facilitiesList = room.facilities.map(facility => 
                `<span class="facility-tag">${facility}</span>`
            ).join('');
            
            roomCard.innerHTML = `
                <div class="room-header">
                    <div class="room-code">${room.code}</div>
                    <div class="room-name">${room.name}</div>
                </div>
                <div class="room-content">
                    <div class="room-info">
                        <div class="room-info-item">
                            <span class="room-info-label">Kapasitas</span>
                            <span class="room-info-value">${room.capacity} kursi</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Proyektor</span>
                            <span class="room-info-value">${room.projector ? '✅ Tersedia' : '❌ Tidak Tersedia'}</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Lokasi</span>
                            <span class="room-info-value">${room.location}</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Status</span>
                            <span class="room-info-value ${room.status === 'available' ? 'room-available' : 'room-unavailable'}">
                                ${room.status === 'available' ? 'Tersedia' : 'Tidak Tersedia'}
                            </span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Fasilitas</span>
                            <div class="facilities-list">
                                ${facilitiesList}
                            </div>
                        </div>
                    </div>
                    <div class="room-actions">
                        <a href="pesan-kelas.html?room=${room.id}" class="btn-small btn-book" ${room.status !== 'available' ? 'style="opacity:0.5; pointer-events:none;"' : ''}>
                            <i class="fas fa-calendar-plus"></i> Pesan Ruang
                        </a>
                    </div>
                </div>
            `;
            
            roomsContainer.appendChild(roomCard);
        });
    }
}

// Fungsi untuk menampilkan jadwal di halaman jadwal kuliah
function displayScheduleTable() {
    const scheduleContainer = document.getElementById('scheduleTable');
    
    if (scheduleContainer) {
        dummySchedule.forEach(item => {
            const row = document.createElement('tr');
            
            // Format status
            let statusBadge = '';
            if (item.status === 'confirmed') {
                statusBadge = '<span class="status-badge confirmed">Dikonfirmasi</span>';
            } else if (item.status === 'pending') {
                statusBadge = '<span class="status-badge pending">Menunggu</span>';
            }
            
            row.innerHTML = `
                <td>${item.day}<br><small>${formatDate(item.date)}</small></td>
                <td>${item.startTime} - ${item.endTime}</td>
                <td>${item.room}</td>
                <td>${item.course}</td>
                <td>${item.lecturer}</td>
                <td>${statusBadge}</td>
            `;
            
            scheduleContainer.appendChild(row);
        });
    }
}

// Fungsi untuk menampilkan kalender
function displayCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    
    if (calendarGrid) {
        // Header hari
        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        days.forEach(day => {
            const dayHeader = document.createElement('div');
            dayHeader.className = 'calendar-day-header';
            dayHeader.textContent = day;
            calendarGrid.appendChild(dayHeader);
        });
        
        // Tanggal (contoh sederhana untuk bulan Januari 2024)
        const currentDate = new Date(2024, 0, 1); // 1 Januari 2024
        const firstDay = currentDate.getDay(); // Hari pertama bulan (0=Minggu)
        const daysInMonth = 31; // Januari
        
        // Tambahkan hari kosong untuk hari pertama
        for (let i = 0; i < firstDay; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day empty';
            calendarGrid.appendChild(emptyDay);
        }
        
        // Tambahkan hari-hari dalam bulan
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            
            // Tanggal
            const dayNumber = document.createElement('div');
            dayNumber.className = 'calendar-day-number';
            dayNumber.textContent = day;
            dayElement.appendChild(dayNumber);
            
            // Tambahkan event jika ada di tanggal tersebut
            const eventsForDay = dummySchedule.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.getDate() === day && eventDate.getMonth() === 0; // Januari
            });
            
            eventsForDay.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'calendar-event';
                eventElement.innerHTML = `
                    <div class="calendar-event-title">${event.course}</div>
                    <div class="calendar-event-time">${event.room} | ${event.startTime}</div>
                `;
                dayElement.appendChild(eventElement);
            });
            
            calendarGrid.appendChild(dayElement);
        }
    }
}

// Fungsi untuk pencarian ruang kelas
function setupRoomSearch() {
    const searchInput = document.getElementById('searchInput');
    const capacityFilter = document.getElementById('capacityFilter');
    const projectorFilter = document.getElementById('projectorFilter');
    const buildingFilter = document.getElementById('buildingFilter');
    const searchResults = document.getElementById('searchResults');
    
    if (searchResults) {
        // Tampilkan semua ruang kelas awal
        filterAndDisplayRooms();
        
        // Event listeners untuk filter
        if (searchInput) searchInput.addEventListener('input', filterAndDisplayRooms);
        if (capacityFilter) capacityFilter.addEventListener('change', filterAndDisplayRooms);
        if (projectorFilter) projectorFilter.addEventListener('change', filterAndDisplayRooms);
        if (buildingFilter) buildingFilter.addEventListener('change', filterAndDisplayRooms);
    }
    
    function filterAndDisplayRooms() {
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const capacity = capacityFilter ? capacityFilter.value : '';
        const projector = projectorFilter ? projectorFilter.value : '';
        const building = buildingFilter ? buildingFilter.value : '';
        
        const filteredRooms = dummyRooms.filter(room => {
            // Filter berdasarkan pencarian
            const matchesSearch = !searchTerm || 
                room.code.toLowerCase().includes(searchTerm) ||
                room.name.toLowerCase().includes(searchTerm) ||
                room.location.toLowerCase().includes(searchTerm);
            
            // Filter berdasarkan kapasitas
            const matchesCapacity = !capacity || 
                (capacity === 'small' && room.capacity <= 30) ||
                (capacity === 'medium' && room.capacity > 30 && room.capacity <= 60) ||
                (capacity === 'large' && room.capacity > 60);
            
            // Filter berdasarkan proyektor
            const matchesProjector = !projector || 
                (projector === 'yes' && room.projector) ||
                (projector === 'no' && !room.projector);
            
            // Filter berdasarkan gedung
            const matchesBuilding = !building || room.building === building;
            
            return matchesSearch && matchesCapacity && matchesProjector && matchesBuilding;
        });
        
        displaySearchResults(filteredRooms, searchResults);
    }
    
    function displaySearchResults(rooms, container) {
        container.innerHTML = '';
        
        if (rooms.length === 0) {
            container.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <h3>Tidak ada ruang kelas yang ditemukan</h3>
                    <p>Coba gunakan filter yang berbeda atau kata kunci lain</p>
                </div>
            `;
            return;
        }
        
        rooms.forEach(room => {
            const roomCard = document.createElement('div');
            roomCard.className = 'room-card';
            
            roomCard.innerHTML = `
                <div class="room-header">
                    <div class="room-code">${room.code}</div>
                    <div class="room-name">${room.name}</div>
                </div>
                <div class="room-content">
                    <div class="room-info">
                        <div class="room-info-item">
                            <span class="room-info-label">Kapasitas</span>
                            <span class="room-info-value">${room.capacity} kursi</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Proyektor</span>
                            <span class="room-info-value">${room.projector ? '✅ Tersedia' : '❌ Tidak Tersedia'}</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Lokasi</span>
                            <span class="room-info-value">${room.location}</span>
                        </div>
                        <div class="room-info-item">
                            <span class="room-info-label">Status</span>
                            <span class="room-info-value ${room.status === 'available' ? 'room-available' : 'room-unavailable'}">
                                ${room.status === 'available' ? 'Tersedia' : 'Tidak Tersedia'}
                            </span>
                        </div>
                    </div>
                    <div class="room-actions">
                        <a href="pesan-kelas.html?room=${room.id}" class="btn-small btn-book" ${room.status !== 'available' ? 'style="opacity:0.5; pointer-events:none;"' : ''}>
                            <i class="fas fa-calendar-plus"></i> Pesan
                        </a>
                        <a href="info-kelas.html#room-${room.id}" class="btn-small btn-detail">
                            <i class="fas fa-info-circle"></i> Detail
                        </a>
                    </div>
                </div>
            `;
            
            container.appendChild(roomCard);
        });
    }
}

// Fungsi untuk FAQ
function setupFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle active class
            answer.classList.toggle('active');
            
            // Toggle icon
            if (icon.classList.contains('fa-chevron-down')) {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            } else {
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
}

// Fungsi untuk chat
function setupChat() {
    const chatButton = document.getElementById('chatButton');
    const chatModal = document.getElementById('chatModal');
    const closeChat = document.getElementById('closeChat');
    const sendChat = document.getElementById('sendChat');
    const chatInput = document.getElementById('chatInput');
    const chatBody = document.getElementById('chatBody');
    
    if (chatButton && chatModal) {
        // Buka chat
        chatButton.addEventListener('click', () => {
            chatModal.style.display = 'flex';
            chatButton.querySelector('.chat-badge').style.display = 'none';
        });
        
        // Tutup chat
        closeChat.addEventListener('click', () => {
            chatModal.style.display = 'none';
        });
        
        // Kirim pesan
        if (sendChat && chatInput) {
            sendChat.addEventListener('click', sendMessage);
            chatInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') sendMessage();
            });
        }
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Tambah pesan user
            const userMessage = document.createElement('div');
            userMessage.className = 'chat-message user-message';
            const now = new Date();
            const timeString = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');
            
            userMessage.innerHTML = `
                <div class="message-content">
                    <p>${message}</p>
                </div>
                <div class="message-time">${timeString}</div>
            `;
            chatBody.appendChild(userMessage);
            
            // Kosongkan input
            chatInput.value = '';
            
            // Scroll ke bawah
            chatBody.scrollTop = chatBody.scrollHeight;
            
            // Bot response (simulasi)
            setTimeout(() => {
                const botResponse = getBotResponse(message);
                const botMessage = document.createElement('div');
                botMessage.className = 'chat-message bot-message';
                
                botMessage.innerHTML = `
                    <div class="message-content">
                        <p>${botResponse}</p>
                    </div>
                    <div class="message-time">${timeString}</div>
                `;
                chatBody.appendChild(botMessage);
                
                // Scroll ke bawah
                chatBody.scrollTop = chatBody.scrollHeight;
            }, 1000);
        }
    }
    
    function getBotResponse(message) {
        const msg = message.toLowerCase();
        
        if (msg.includes('pesan') || msg.includes('booking')) {
            return "Untuk memesan ruang kelas, silakan buka halaman 'Pesan Kelas'. Pilih ruang kelas, tanggal, dan waktu yang diinginkan, lalu isi form pemesanan.";
        } else if (msg.includes('jadwal') || msg.includes('kalender')) {
            return "Jadwal lengkap penggunaan ruang kelas dapat dilihat di halaman 'Jadwal Kuliah'. Anda juga bisa melihat kalender bulanan di halaman tersebut.";
        } else if (msg.includes('tersedia') || msg.includes('kosong')) {
            return "Untuk melihat ruang kelas yang tersedia, kunjungi halaman 'Cari Kelas'. Anda bisa filter berdasarkan kapasitas, fasilitas, dan gedung.";
        } else if (msg.includes('proyektor') || msg.includes('fasilitas')) {
            return "Informasi fasilitas setiap ruang kelas tersedia di halaman 'Info Kelas'. Setiap ruang dilengkapi dengan detail fasilitas seperti proyektor, AC, dan lainnya.";
        } else if (msg.includes('batal') || msg.includes('cancel')) {
            return "Untuk membatalkan pemesanan ruang kelas, silakan hubungi helpdesk di (021) 12345678 atau email ruangkelas@gunadarma.ac.id.";
        } else if (msg.includes('terima kasih') || msg.includes('thanks')) {
            return "Sama-sama! Jika ada pertanyaan lain, jangan ragu untuk bertanya.";
        } else {
            return "Terima kasih atas pesan Anda. Untuk informasi lebih detail tentang pemesanan ruang kelas, jadwal, atau ketersediaan, silakan kunjungi halaman terkait di menu navigasi.";
        }
    }
}

// Fungsi untuk form bantuan/support
function setupSupportForm() {
    const supportForm = document.getElementById('supportForm');
    
    if (supportForm) {
        supportForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil data form
            const name = document.getElementById('supportName').value;
            const email = document.getElementById('supportEmail').value;
            const subject = document.getElementById('supportSubject').value;
            const message = document.getElementById('supportMessage').value;
            
            // Simulasi pengiriman
            alert(`Terima kasih ${name}! Tiket bantuan Anda (#${Math.floor(Math.random() * 10000)}) telah dikirim. Tim helpdesk akan menghubungi Anda melalui email ${email} dalam 1x24 jam.`);
            
            // Reset form
            supportForm.reset();
        });
    }
}

// Fungsi untuk form login
function setupLoginForm() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simulasi login sederhana
            if (username && password) {
                // Simpan status login di localStorage
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('userRole', 'dosen');
                localStorage.setItem('userName', username.includes('@') ? username.split('@')[0] : username);
                
                // Redirect ke beranda
                window.location.href = 'beranda.html';
            } else {
                alert('Silakan isi username dan password.');
            }
        });
    }
    
    // Cek status login
    checkLoginStatus();
}

// Fungsi untuk form pemesanan
function setupBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        // Isi pilihan ruang kelas
        const roomSelect = document.getElementById('bookingRoom');
        if (roomSelect) {
            dummyRooms.filter(room => room.status === 'available').forEach(room => {
                const option = document.createElement('option');
                option.value = room.id;
                option.textContent = `${room.code} - ${room.name} (${room.capacity} kursi)`;
                roomSelect.appendChild(option);
            });
        }
        
        // Tanggal minimal hari ini
        const dateInput = document.getElementById('bookingDate');
        if (dateInput) {
            const today = new Date().toISOString().split('T')[0];
            dateInput.min = today;
            dateInput.value = today;
        }
        
        // Handle submit
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Cek login
            if (!localStorage.getItem('isLoggedIn')) {
                alert('Anda harus login terlebih dahulu untuk memesan ruang kelas.');
                window.location.href = 'login.html';
                return;
            }
            
            const roomId = document.getElementById('bookingRoom').value;
            const date = document.getElementById('bookingDate').value;
            const startTime = document.getElementById('bookingStartTime').value;
            const endTime = document.getElementById('bookingEndTime').value;
            const purpose = document.getElementById('bookingPurpose').value;
            const participants = document.getElementById('bookingParticipants').value;
            
            // Validasi
            if (parseInt(participants) > 200) {
                alert('Jumlah peserta melebihi kapasitas maksimal. Silakan pilih ruang dengan kapasitas lebih besar.');
                return;
            }
            
            const selectedRoom = dummyRooms.find(room => room.id == roomId);
            
            // Simulasi pemesanan
            const bookingId = dummyBookings.length + 1;
            const userName = localStorage.getItem('userName') || 'Dosen';
            
            alert(`Terima kasih ${userName}! Pemesanan ruang ${selectedRoom.code} pada ${formatDate(date)} pukul ${startTime}-${endTime} telah berhasil diajukan. Nomor pemesanan: #BOOK${bookingId.toString().padStart(4, '0')}. Status akan dikirim via email.`);
            
            // Reset form
            bookingForm.reset();
            dateInput.value = today;
        });
    }
}

// Fungsi untuk hamburger menu
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Tutup menu saat klik link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Fungsi untuk mengambil parameter URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return params;
}

// Fungsi untuk mengisi form pemesanan berdasarkan parameter URL
function prefillBookingForm() {
    const params = getUrlParams();
    const roomId = params.get('room');
    
    if (roomId) {
        const roomSelect = document.getElementById('bookingRoom');
        if (roomSelect) {
            roomSelect.value = roomId;
        }
    }
}

// Fungsi untuk menampilkan detail ruang kelas berdasarkan ID
function displayRoomDetail() {
    const params = getUrlParams();
    const roomId = params.get('room');
    const roomDetailContainer = document.getElementById('roomDetail');
    
    if (roomDetailContainer && roomId) {
        const room = dummyRooms.find(r => r.id === parseInt(roomId));
        
        if (room) {
            // Format fasilitas
            const facilitiesList = room.facilities.map(facility => 
                `<li><i class="fas fa-check"></i> ${facility}</li>`
            ).join('');
            
            roomDetailContainer.innerHTML = `
                <div class="room-detail-header">
                    <h2>${room.code} - ${room.name}</h2>
                    <p class="room-location"><i class="fas fa-map-marker-alt"></i> ${room.location}</p>
                </div>
                
                <div class="room-detail-info">
                    <div class="info-card">
                        <h3><i class="fas fa-info-circle"></i> Informasi Ruang</h3>
                        <div class="room-stats">
                            <div class="room-stat">
                                <div class="stat-icon"><i class="fas fa-users"></i></div>
                                <div class="stat-content">
                                    <div class="stat-label">Kapasitas</div>
                                    <div class="stat-value">${room.capacity} kursi</div>
                                </div>
                            </div>
                            <div class="room-stat">
                                <div class="stat-icon"><i class="fas fa-video"></i></div>
                                <div class="stat-content">
                                    <div class="stat-label">Proyektor</div>
                                    <div class="stat-value">${room.projector ? 'Tersedia' : 'Tidak Tersedia'}</div>
                                </div>
                            </div>
                            <div class="room-stat">
                                <div class="stat-icon"><i class="fas fa-building"></i></div>
                                <div class="stat-content">
                                    <div class="stat-label">Gedung</div>
                                    <div class="stat-value">${room.building}</div>
                                </div>
                            </div>
                            <div class="room-stat">
                                <div class="stat-icon"><i class="fas fa-calendar-check"></i></div>
                                <div class="stat-content">
                                    <div class="stat-label">Status</div>
                                    <div class="stat-value ${room.status === 'available' ? 'room-available' : 'room-unavailable'}">
                                        ${room.status === 'available' ? 'Tersedia' : 'Tidak Tersedia'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="info-card">
                        <h3><i class="fas fa-list-check"></i> Fasilitas</h3>
                        <ul class="facilities-list">
                            ${facilitiesList}
                        </ul>
                    </div>
                    
                    ${room.status === 'available' ? `
                    <div class="info-card booking-card">
                        <h3><i class="fas fa-calendar-plus"></i> Pesan Ruang Ini</h3>
                        <p>Ruangan ini tersedia untuk dipesan. Klik tombol di bawah untuk mengajukan pemesanan.</p>
                        <a href="pesan-kelas.html?room=${room.id}" class="btn-primary">
                            <i class="fas fa-calendar-plus"></i> Ajukan Pemesanan
                        </a>
                    </div>
                    ` : `
                    <div class="info-card unavailable-card">
                        <h3><i class="fas fa-calendar-times"></i> Tidak Tersedia</h3>
                        <p>Maaf, ruangan ini saat ini tidak tersedia untuk dipesan. Silakan pilih ruangan lain atau cek jadwal ketersediaan.</p>
                        <a href="cari-kelas.html" class="btn-secondary">
                            <i class="fas fa-search"></i> Cari Ruang Lain
                        </a>
                    </div>
                    `}
                </div>
            `;
        }
    }
}

// =========================================
// FUNGSI RECEIPT/BUKTI PEMESANAN (GLOBAL)
// =========================================

// Fungsi untuk membuka receipt
function showReceipt() {
    // Cek apakah elemen receipt ada di halaman
    if (!document.getElementById('receiptView')) {
        console.error('Elemen receipt tidak ditemukan di halaman ini');
        return;
    }
    
    // Ambil data waktu dari form
    let startTime, endTime;
    
    // Coba berbagai selector untuk mendapatkan waktu
    const timeSelects = document.querySelectorAll('.form-select-detail');
    if (timeSelects.length >= 2) {
        startTime = timeSelects[0].value;
        endTime = timeSelects[1].value;
    } else {
        const allSelects = document.querySelectorAll('select');
        if (allSelects.length >= 2) {
            startTime = allSelects[0].value;
            endTime = allSelects[1].value;
        } else {
            startTime = '07:30';
            endTime = '10:30';
        }
    }
    
    // Validasi jika waktu masih default
    if (startTime === 'Pilih waktu mulai' || endTime === 'Pilih waktu selesai') {
        alert('Harap pilih waktu mulai dan selesai yang valid!');
        return;
    }
    
    // Ambil data user dari localStorage
    const userName = localStorage.getItem("userName") || "Taufik Hidayat";
    
    // Generate kode booking acak
    const bookingCode = '#BOOK-' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    // Set data ke receipt
    const receiptBookingCode = document.getElementById('receiptBookingCode');
    const receiptDate = document.getElementById('receiptDate');
    const receiptTime = document.getElementById('receiptTime');
    const receiptRoom = document.getElementById('receiptRoom');
    const receiptLocation = document.getElementById('receiptLocation');
    const receiptCapacity = document.getElementById('receiptCapacity');
    const receiptDosen = document.getElementById('receiptDosen');
    
    if (receiptBookingCode) receiptBookingCode.textContent = bookingCode;
    if (receiptDate) receiptDate.textContent = formatDate(new Date());
    if (receiptTime) receiptTime.textContent = `${startTime} - ${endTime}`;
    if (receiptRoom) receiptRoom.textContent = 'K132 - Lab. Komputer';
    if (receiptLocation) receiptLocation.textContent = 'Kampus K - Karawaci';
    if (receiptCapacity) receiptCapacity.textContent = '38 Orang';
    if (receiptDosen) receiptDosen.textContent = userName;
    
    // Simpan data ke localStorage untuk PDF
    localStorage.setItem('lastBookingData', JSON.stringify({
        code: bookingCode,
        date: formatDate(new Date()),
        time: `${startTime} - ${endTime}`,
        room: 'K132 - Lab. Komputer',
        location: 'Kampus K - Karawaci',
        capacity: '38 Orang',
        dosen: userName
    }));
    
    // Sembunyikan detail view dan tampilkan receipt
    const detailView = document.getElementById('detailView');
    const receiptView = document.getElementById('receiptView');
    const listView = document.getElementById('listView');
    const filterBar = document.getElementById('filterBar');
    
    if (detailView) detailView.style.display = 'none';
    if (receiptView) receiptView.style.display = 'block';
    if (listView) listView.style.display = 'none';
    if (filterBar) filterBar.style.display = 'none';
    
    // Mulai countdown
    startCountdown(50);
    
    // Simpan booking ke localStorage (simulasi database)
    saveBookingToLocalStorage(bookingCode, startTime, endTime);
}

// Fungsi untuk menutup receipt
function closeReceipt() {
    const receiptView = document.getElementById('receiptView');
    const listView = document.getElementById('listView');
    const filterBar = document.getElementById('filterBar');
    
    if (receiptView) receiptView.style.display = 'none';
    if (listView) listView.style.display = 'flex';
    if (filterBar) filterBar.style.display = 'flex';
}

// Countdown timer
let countdownInterval;
function startCountdown(seconds) {
    let count = seconds;
    const countdownElement = document.getElementById('countdown');
    
    if (!countdownElement) return;
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    
    countdownElement.textContent = count;
    
    countdownInterval = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        
        if (count <= 0) {
            clearInterval(countdownInterval);
            closeReceipt();
        }
    }, 1000);
}

// Simulasi save booking ke localStorage
function saveBookingToLocalStorage(bookingCode, startTime, endTime) {
    const bookingData = {
        code: bookingCode,
        date: new Date().toISOString(),
        room: 'K132 - Lab. Komputer',
        time: `${startTime} - ${endTime}`,
        dosen: localStorage.getItem("userName") || "Taufik Hidayat",
        status: 'confirmed'
    };
    
    // Ambil array booking yang sudah ada
    let bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(bookingData);
    localStorage.setItem('bookings', JSON.stringify(bookings));
}

// =========================================
// FUNGSI PDF - DIPERBAIKI
// =========================================

// Fungsi download PDF menggunakan jsPDF
function downloadReceipt() {
    // Cek apakah jsPDF tersedia
    if (typeof jsPDF === 'undefined') {
        // Jika jsPDF belum dimuat, muat dulu
        alert('Sedang memuat library PDF...');
        loadJSPDFLibrary().then(() => {
            generatePDF();
        }).catch(error => {
            console.error('Gagal memuat library PDF:', error);
            alert('Gagal memuat library PDF. Silakan coba lagi atau gunakan fitur print.');
        });
        return;
    }
    
    generatePDF();
}

// Fungsi untuk memuat library jsPDF
function loadJSPDFLibrary() {
    return new Promise((resolve, reject) => {
        if (typeof jsPDF !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => {
            console.log('jsPDF library loaded successfully');
            resolve();
        };
        script.onerror = () => {
            reject(new Error('Failed to load jsPDF library'));
        };
        document.head.appendChild(script);
    });
}

// Fungsi untuk generate PDF
function generatePDF() {
    try {
        // Ambil data dari localStorage atau dari halaman
        const bookingData = JSON.parse(localStorage.getItem('lastBookingData')) || getBookingDataFromPage();
        
        // Buat instance jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Atur ukuran dan margin
        const pageWidth = doc.internal.pageSize.getWidth();
        const margin = 20;
        const contentWidth = pageWidth - (margin * 2);
        
        // ===== HEADER =====
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(57, 73, 171); // Warna biru UG
        doc.text('UNIVERSITAS GUNADARMA', pageWidth / 2, margin, { align: 'center' });
        
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text('BUKTI PEMESANAN RUANG KELAS', pageWidth / 2, margin + 10, { align: 'center' });
        
        // Garis pemisah
        doc.setDrawColor(57, 73, 171);
        doc.setLineWidth(0.5);
        doc.line(margin, margin + 15, pageWidth - margin, margin + 15);
        
        // ===== INFORMASI UTAMA =====
        let yPos = margin + 25;
        
        // Logo atau gambar (opsional)
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        doc.text('KODE BOOKING:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.code, margin + 50, yPos);
        
        yPos += 10;
        doc.setFont('helvetica', 'bold');
        doc.text('TANGGAL PEMESANAN:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.date, margin + 60, yPos);
        
        yPos += 10;
        doc.setFont('helvetica', 'bold');
        doc.text('WAKTU KELAS:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.time, margin + 45, yPos);
        
        // ===== DETAIL RUANGAN =====
        yPos += 15;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(57, 73, 171);
        doc.text('DETAIL RUANGAN', margin, yPos);
        
        yPos += 8;
        doc.setDrawColor(200, 200, 200);
        doc.setLineWidth(0.2);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        
        yPos += 10;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('Nama Ruang:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.room, margin + 40, yPos);
        
        yPos += 8;
        doc.setFont('helvetica', 'bold');
        doc.text('Lokasi:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.location, margin + 25, yPos);
        
        yPos += 8;
        doc.setFont('helvetica', 'bold');
        doc.text('Kapasitas:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.capacity, margin + 30, yPos);
        
        // ===== DETAIL DOSEN =====
        yPos += 15;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(57, 73, 171);
        doc.text('INFORMASI PEMESAN', margin, yPos);
        
        yPos += 8;
        doc.setDrawColor(200, 200, 200);
        doc.line(margin, yPos, pageWidth - margin, yPos);
        
        yPos += 10;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('Nama Dosen:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(bookingData.dosen, margin + 40, yPos);
        
        yPos += 8;
        doc.setFont('helvetica', 'bold');
        doc.text('Status:', margin, yPos);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(0, 128, 0); // Hijau untuk status confirmed
        doc.text('CONFIRMED', margin + 25, yPos);
        
        // ===== CATATAN =====
        yPos += 20;
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(0, 0, 0);
        doc.text('CATATAN PENTING:', margin, yPos);
        
        yPos += 8;
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(10);
        
        const notes = [
            '1. Bukti ini harus ditunjukkan saat menggunakan ruangan',
            '2. Reservasi tidak dapat dibatalkan setelah dikonfirmasi',
            '3. Harap datang 15 menit sebelum waktu mulai',
            '4. Ruangan harus dikembalikan dalam keadaan baik',
            '5. Hubungi helpdesk jika ada kendala: (021) 12345678'
        ];
        
        notes.forEach((note, index) => {
            doc.text(note, margin + 5, yPos + (index * 5));
        });
        
        // ===== FOOTER =====
        doc.setFontSize(8);
        doc.setTextColor(100, 100, 100);
        const footerY = doc.internal.pageSize.getHeight() - 10;
        doc.text('Dicetak dari Sistem UG Room Booking - ' + new Date().toLocaleDateString('id-ID'), 
                pageWidth / 2, footerY, { align: 'center' });
        
        // ===== QR CODE (OPSIONAL) =====
        // Uncomment jika ingin menambahkan QR code
        // yPos += 40;
        // doc.setTextColor(0, 0, 0);
        // doc.setFontSize(10);
        // doc.text('Scan untuk verifikasi:', pageWidth / 2, yPos, { align: 'center' });
        
        // Simpan PDF
        const fileName = `Bukti_Pemesanan_${bookingData.code.replace('#', '')}.pdf`;
        doc.save(fileName);
        
        // Tampilkan konfirmasi
        alert(`PDF berhasil diunduh: ${fileName}`);
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        alert('Terjadi kesalahan saat membuat PDF. Silakan coba lagi.');
        
        // Fallback: jika gagal, gunakan print biasa
        printReceipt();
    }
}

// Fungsi untuk mengambil data dari halaman jika tidak ada di localStorage
function getBookingDataFromPage() {
    return {
        code: document.getElementById('receiptBookingCode')?.textContent || '#BOOK-0000',
        date: document.getElementById('receiptDate')?.textContent || formatDate(new Date()),
        time: document.getElementById('receiptTime')?.textContent || '07:30 - 10:30',
        room: document.getElementById('receiptRoom')?.textContent || 'K132 - Lab. Komputer',
        location: document.getElementById('receiptLocation')?.textContent || 'Kampus K - Karawaci',
        capacity: document.getElementById('receiptCapacity')?.textContent || '38 Orang',
        dosen: document.getElementById('receiptDosen')?.textContent || 'Taufik Hidayat'
    };
}

// Fungsi print receipt
function printReceipt() {
    // Sembunyikan elemen yang tidak perlu di print
    const elementsToHide = [
        '.btn-back',
        '.receipt-actions',
        '.receipt-timer',
        '.btn-close-receipt',
        '.nav-menu',
        '.hamburger',
        'footer',
        '.chat-button'
    ];
    
    const originalDisplay = [];
    
    elementsToHide.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            originalDisplay.push({ element: el, display: el.style.display });
            el.style.display = 'none';
        });
    });
    
    // Print halaman
    window.print();
    
    // Kembalikan tampilan elemen
    setTimeout(() => {
        originalDisplay.forEach(item => {
            if (item.element) {
                item.element.style.display = item.display;
            }
        });
    }, 500);
}

// Fungsi share receipt (simulasi)
function shareReceipt() {
    if (navigator.share) {
        const bookingCode = document.getElementById('receiptBookingCode')?.textContent || '#BOOK-0000';
        navigator.share({
            title: 'Bukti Pemesanan Kelas UG Room',
            text: `Saya telah memesan ruang kelas melalui UG Room. Kode Booking: ${bookingCode}`,
            url: window.location.href
        });
    } else {
        alert('Fitur share tidak tersedia di browser ini. Anda dapat screenshot halaman ini atau download PDF.');
    }
}

// Fungsi untuk cek status login
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const loginBtn = document.querySelector('.login-btn');
    
    if (isLoggedIn === 'true' && loginBtn) {
        const userName = localStorage.getItem('userName') || 'Dosen';
        loginBtn.innerHTML = `<i class="fas fa-user"></i> ${userName}`;
        loginBtn.href = 'beranda.html';
        
        // Tambah logout option
        loginBtn.addEventListener('click', function(e) {
            if (confirm('Apakah Anda ingin logout?')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userRole');
                localStorage.removeItem('userName');
                window.location.href = 'login.html';
            }
            e.preventDefault();
        });
    }
}

// Fungsi untuk logout
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (confirm('Apakah Anda yakin ingin logout?')) {
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userRole');
                localStorage.removeItem('userName');
                window.location.href = 'login.html';
            }
        });
    }
}

// Helper function untuk format tanggal
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
}

// Inisialisasi semua fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Setup hamburger menu
    setupHamburgerMenu();
    
    // Setup chat
    setupChat();
    
    // Tampilkan ruang kelas di beranda
    displayAvailableRooms();
    
    // Tampilkan semua ruang kelas di halaman info kelas
    displayAllRooms();
    
    // Tampilkan jadwal di halaman jadwal kuliah
    displayScheduleTable();
    
    // Tampilkan kalender
    displayCalendar();
    
    // Setup pencarian ruang kelas
    setupRoomSearch();
    
    // Setup FAQ
    setupFAQ();
    
    // Setup form support
    setupSupportForm();
    
    // Setup form login
    setupLoginForm();
    
    // Setup form pemesanan
    setupBookingForm();
    
    // Prefill form pemesanan berdasarkan parameter URL
    prefillBookingForm();
    
    // Tampilkan detail ruang kelas jika ada
    displayRoomDetail();
    
    // Setup logout
    setupLogout();
    
    // Tambahkan kelas aktif di navbar berdasarkan halaman
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'beranda.html') ||
            (currentPage === 'index.html' && linkPage === 'beranda.html')) {
            link.classList.add('active');
        }
    });
    
    // Tambahkan style untuk status badge
    const style = document.createElement('style');
    style.textContent = `
        .status-badge {
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        .status-badge.confirmed {
            background-color: #e8f5e9;
            color: #2e7d32;
        }
        .status-badge.pending {
            background-color: #fff3e0;
            color: #ef6c00;
        }
        .facility-tag {
            display: inline-block;
            background-color: #e8eaf6;
            color: #3949ab;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 0.85rem;
            margin: 2px;
        }
        .facilities-list {
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
        }
        .room-stat {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e0e0e0;
        }
        .room-stat:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .stat-icon {
            width: 40px;
            height: 40px;
            background-color: #e8eaf6;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #3949ab;
            font-size: 1.2rem;
        }
        .stat-label {
            font-size: 0.9rem;
            color: #666;
        }
        .stat-value {
            font-weight: 600;
            font-size: 1.1rem;
            color: #333;
        }
        .no-results {
            text-align: center;
            padding: 60px 20px;
            color: #666;
        }
        .no-results i {
            font-size: 3rem;
            color: #bdbdbd;
            margin-bottom: 20px;
        }
        .no-results h3 {
            margin-bottom: 10px;
            color: #333;
        }
    `;
    document.head.appendChild(style);
});