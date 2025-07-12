# Ideas List - Suit Media Test Project

Sebuah aplikasi web yang menampilkan daftar ideas dengan fitur sorting, pagination, dan lazy loading. Dibangun menggunakan React + Vite + Tailwind CSS.

## Fitur yang Diimplementasikan

### 1. Header

- ✅ **Fixed position** dengan hide/show effect saat scroll
- ✅ **Transparent background** saat scroll dengan blur effect
- ✅ **Active state menu** untuk halaman "Ideas"
- ✅ **Responsive design** dengan mobile menu
- ✅ Menggunakan **logo-suit-media.png**

### 2. Banner

- ✅ **Background image** yang dapat di-update melalui CMS
- ✅ **Diagonal area** pada bagian bawah banner (SVG shape)
- ✅ **Parallax effect** antara image dan text saat scroll
- ✅ Responsive design untuk berbagai ukuran layar

### 3. List Post

- ✅ **Sorting** berdasarkan terbaru dan terlama
- ✅ **Show per page** dengan pilihan [10, 20, 50]
- ✅ **Pagination** dengan navigasi halaman
- ✅ **URL state management** - state tersimpan di URL dan persist saat refresh
- ✅ **Lazy loading** pada gambar dengan intersection observer
- ✅ **Consistent aspect ratio** untuk thumbnail (4:3)
- ✅ **Title limit** maksimal 3 baris dengan ellipsis
- ✅ **4 cards per row** pada desktop
- ✅ **Responsive grid** (1-2-3-4 kolom tergantung ukuran layar)

### 4. API Integration

- ✅ **Proxy configuration** untuk API Suitmedia
- ✅ **Fallback mock data** jika API tidak tersedia
- ✅ **Error handling** yang robust
- ✅ **Loading states** dengan spinner
- ✅ Proper **URL parameters** sesuai dokumentasi API

## Teknologi yang Digunakan

- **React 19** - Library frontend
- **Vite 7** - Build tool dan dev server
- **Tailwind CSS 4** - Styling framework
- **Axios** - HTTP client untuk API calls
- **Modern JavaScript (ES6+)** - Features seperti async/await, destructuring

## Cara Menjalankan

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Jalankan development server:**

   ```bash
   npm run dev
   ```

3. **Build untuk production:**

   ```bash
   npm run build
   ```

4. **Preview build:**
   ```bash
   npm run preview
   ```

## API Configuration

Aplikasi ini menggunakan API dari Suitmedia Backend:

- **Base URL:** `https://suitmedia-backend.suitdev.com/api`
- **Endpoint:** `/ideas`
- **Parameters:**
  - `page[number]`: Nomor halaman
  - `page[size]`: Jumlah item per halaman
  - `append[]`: `['small_image', 'medium_image']`
  - `sort`: `'published_at'` atau `'-published_at'`

## Struktur Project

```
src/
├── components/
│   ├── Header.jsx          # Header dengan scroll behavior
│   ├── Banner.jsx          # Banner dengan parallax effect
│   ├── PostList.jsx        # Main list dengan sorting & pagination
│   ├── PostCard.jsx        # Individual post card
│   ├── Pagination.jsx      # Pagination component
│   └── LazyImage.jsx       # Lazy loading image component
├── services/
│   └── api.js              # API service dengan fallback
├── data/
│   └── mockData.js         # Mock data untuk development
├── App.jsx                 # Main app component
└── main.jsx               # App entry point
```

## Fitur Khusus

### State Management

- State disimpan di URL parameters untuk persistence
- Refresh halaman tidak mengembalikan ke state awal
- Browser history support untuk navigation

### Performance Optimizations

- Lazy loading images dengan Intersection Observer
- Component memoization untuk re-renders yang optimal
- Debounced scroll handlers

### Responsive Design

- Mobile-first approach
- Grid yang adaptif (1-4 kolom)
- Touch-friendly controls
- Optimized untuk berbagai ukuran layar

### Error Handling

- Graceful fallback ke mock data
- User-friendly error messages
- Network error recovery

## Browser Support

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- Mobile browsers

## License

Project ini dibuat untuk keperluan test technical interview di Suit Media.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
