# Data Mobil Hybrid di Indonesia

Aplikasi web untuk menampilkan informasi lengkap spesifikasi oli mesin untuk kendaraan hybrid di Indonesia.

## Fitur

- 📊 Data lengkap 52+ mobil hybrid dari berbagai merek (Toyota, Honda, Nissan, Suzuki, Wuling, Lexus, Hyundai, Kia, Mercedes-Benz, BMW, Mitsubishi, Audi, Volvo, Chery)
- 🔍 Pencarian berdasarkan merek atau model
- 🏷️ Filter berdasarkan merek kendaraan
- 📱 Responsive design untuk semua ukuran layar
- 🎨 UI modern dengan Tailwind CSS
- ⚡ Fast performance dengan Vite

## Informasi yang Ditampilkan

Untuk setiap kendaraan hybrid, aplikasi menampilkan:
- Merek dan model kendaraan
- Tahun produksi
- Tipe mesin
- SAE Grade oli yang direkomendasikan
- Kapasitas oli mesin
- Interval penggantian oli
- Tipe oli (Full Synthetic)

## Teknologi yang Digunakan

- **React 18** - Library UI
- **Vite** - Build tool dan dev server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library

## Cara Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### 3. Build untuk Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## Struktur Project

```
hybrid/
├── src/
│   ├── components/
│   │   └── HybridCarsData.jsx    # Komponen utama
│   ├── App.jsx                    # Root component
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── postcss.config.js              # PostCSS configuration
```

## Catatan Penting

- Interval penggantian oli dapat bervariasi tergantung kondisi berkendara
- Selalu ikuti rekomendasi dari buku manual kendaraan
- Konsultasi dengan bengkel resmi untuk informasi lebih detail

## License

MIT
