// src/data/projects.js
const projects = [
    {
      id: 1,
      name: "Kasir System",
      description: "Cashier System built with Laravel and Bootstrap, designed to make cashier management easier.",
      image: "/kasir.png",
      featured: true,
      tech: ["laravel", "bootstrap"],
      source: "https://github.com/azkaa23/app-kasir",
      demo: "https://kasir-demo.vercel.app",
      features: [
        { role: "Semua", page: "Login", description: "Pilih login sebagai Admin atau Petugas." },
        { role: "Admin", page: "Dashboard", description: "Grafik: Penjualan Harian, Stok Produk, Jumlah Pengguna, Penjualan Produk, Member vs Non-member." },
        { role: "Admin", page: "Produk", description: "CRUD produk (gambar, nama, harga, stok), ekspor ke Excel." },
        { role: "Admin", page: "Penjualan", description: "Lihat semua transaksi, detail, cetak struk PDF, ekspor ke Excel." },
        { role: "Admin", page: "User", description: "Kelola user (email, nama, role), tambah/edit/hapus, ekspor ke Excel." },
        { role: "Petugas", page: "Dashboard", description: "Lihat total penjualan hari ini & waktu transaksi terakhir." },
        { role: "Petugas", page: "Produk", description: "Lihat daftar produk (nama, harga, gambar, stok)." },
        { role: "Petugas", page: "Penjualan", description: "Tambah penjualan baru, detail transaksi, cetak struk PDF, ekspor Excel, pencarian." },
        { role: "Petugas", page: "Proses Pemesanan", description: "Lihat produk terpilih, total otomatis, fitur member & poin, tombol PESAN." },
        { role: "Petugas", page: "Detail Pemesanan", description: "Ringkasan belanja, penggunaan poin, total bayar, tombol Selanjutnya." },
        { role: "Petugas", page: "Pembayaran", description: "Konfirmasi akhir: poin didapat/digunakan, kembalian, tanggal, tombol Selesai." }
      ],
      setup: [
        { step: "1. Clone the repository", command: "git clone https://github.com/azkaa23/app-kasir.git\ncd app-kasir" },
        { step: "2. Install PHP dependencies", command: "composer install" },
        { step: "3. Create environment file", command: "cp .env.example .env" },
        { step: "4. Generate application key", command: "php artisan key:generate" },
        {
          step: "5. Configure database",
          description: "Edit the .env file with your database credentials:\nDB_CONNECTION=mysql\nDB_HOST=127.0.0.1\nDB_PORT=3306\nDB_DATABASE=your_database_name\nDB_USERNAME=your_username\nDB_PASSWORD=your_password"
        },
        { step: "6. Run database migrations", command: "php artisan migrate" },
        { step: "7. (Optional) Seed database with sample data", command: "php artisan db:seed" },
        { step: "8. Start development server", command: "php artisan serve" }
      ],
      notes: [
        "Make sure you have PHP (^8.0), Composer, and MySQL installed",
        "Create an empty database before running migrations",
        "Access the application at http://localhost:8000"
      ]
    },
    {
      id: 2,
      name: "Portfolio Website",
      description: "A personal portfolio website built using React and Tailwind CSS.",
      image: "/images/portfolio.png",
      featured: false,
      tech: ["js"],
      source: "https://github.com/azkaa23/portfolio-website",
      demo: "https://azkaa23.vercel.app",
      features: [],
      setup: [],
      notes: []
    },
    {
      id: 3,
      name: "SIMPKL",
      description: "PKL Management Information System that helps schools manage student PKL process efficiently and integrated (Team Project)",
      image: "/admin.png",
      featured: true,
      tech: ["laravel", "bootstrap"],
      source: "https://github.com/abduljabar0606/SIMPKL",
      isTeamProject: true,
      features: [
        { "role": "Siswa", "page": "Absensi", "description": "Melakukan check-in dan check-out harian secara digital." },
        { "role": "Siswa", "page": "Jurnal Harian", "description": "Mengisi jurnal kegiatan setiap hari selama PKL." },
        { "role": "Superadmin", "page": "Pendaftaran Siswa", "description": "Membuat akun siswa beserta detail program dan lokasi PKL." },
        { "role": "Kesiswaan", "page": "Validasi Persiapan", "description": "Memvalidasi kesiapan siswa sebelum PKL, termasuk berkas dan izin." },
        { "role": "Perpustakaan", "page": "Validasi Buku", "description": "Memverifikasi riwayat peminjaman buku siswa sebelum PKL." },
        { "role": "Admin TU", "page": "Validasi Keuangan", "description": "Memverifikasi status keuangan siswa sebelum PKL." },
        { "role": "Kaprog", "page": "Validasi Hard Skill", "description": "Menilai kelayakan siswa berdasarkan hasil uji kelayakan PKL." },
        { "role": "Siswa", "page": "Pemilihan Lokasi", "description": "Memilih area PKL seperti Jabodetabek atau luar daerah." },
        { "role": "Perusahaan", "page": "Catatan", "description": "Memberikan feedback terkait kinerja siswa PKL, yang dikirim ke pembimbing." },
        { "role": "Pembimbing", "page": "Monitoring", "description": "Memantau dan memvalidasi absensi serta jurnal siswa secara rutin." }
      ],
      setup: [
      ],
      notes: [
       
      ]
    },    
    {
        id: 4,
        name: "ZustandHydrator",
        description: "State management project using Zustand and hydration.",
        image: "/kasir.png",
        tech: ["ts", "js"],
        source: "https://github.com/example/zustand-hydrator",
        demo: "https://zustand-demo.vercel.app",
        features: [
          { role: "User", page: "Home", description: "Landing page for Zustand app" },
        ],
        setup: [
          { step: "Install", command: "npm install", description: "Install dependencies" },
        ],
        notes: ["Ensure you run on Node 16 or later"]
    },       

  ];
  
  export default projects;
  