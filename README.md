# Ideas List - Suit Media Test Project

Sebuah aplikasi web single page yang menampilkan daftar ideas dengan fitur sorting, pagination, dan lazy loading. Dibangun menggunakan React + Vite + Tailwind CSS dengan ar## License

Project ini dibuat untuk keperluan test technical interview di Suit Media.

---

## Technical Highlights

### Architecture Decisions

1. **Single Page Application**: Menggunakan section-based navigation untuk user experience yang seamless
2. **Ideas-First Approach**: Ideas section diprioritaskan sebagai landing page utama
3. **Smart Image Management**: 20 curated Unsplash images sebagai fallback dengan distribusi berdasarkan post ID
4. **CMS Integration**: Banner dapat dikelola via CMS dengan fallback yang robust
5. **Performance Optimization**: Lazy loading, memoization, dan debounced handlers

### Key Features Implementation

- **Smooth Navigation**: Intersection Observer untuk active section detection
- **Smart Pagination**: Pagination yang tetap di Ideas section
- **Advanced Image Fallback**: Hierarchy fallback dengan error recovery
- **Responsive Grid**: Adaptif dari 1-4 kolom dengan spacing optimal
- **Professional UI/UX**: Modern design dengan gradient themes per section

### Code Quality

- Clean, maintainable React components
- Proper error handling dan fallback systems
- TypeScript-ready structure
- Performance-optimized rendering
- Comprehensive documentationng page yang komprehensif.

## Fitur yang Diimplementasikan

### 1. Header

- ✅ **Fixed position** dengan hide/show effect saat scroll
- ✅ **Transparent background** saat scroll dengan blur effect
- ✅ **Active state menu** berdasarkan section yang sedang dilihat
- ✅ **Smooth scroll navigation** ke setiap section
- ✅ **Responsive design** dengan mobile menu
- ✅ Menggunakan **logo-suit-media.png**
- ✅ **Navigation order**: Ideas → Work → About → Services → Careers → Contact

### 2. Banner

- ✅ **Background image** yang dapat di-update melalui CMS
- ✅ **Fallback image system** dengan `banner-ideas-bg.jpeg`
- ✅ **Diagonal area** pada bagian bawah banner (SVG shape) dengan kemiringan ke kanan
- ✅ **Parallax effect** antara image dan text saat scroll
- ✅ **CMS integration** untuk title dan subtitle
- ✅ **Image error handling** dengan automatic fallback
- ✅ Responsive design untuk berbagai ukuran layar

### 3. List Post

- ✅ **Sorting** berdasarkan terbaru dan terlama
- ✅ **Show per page** dengan pilihan [10, 20, 50]
- ✅ **Pagination** dengan navigasi halaman
- ✅ **Smart pagination scrolling** - tetap di section Ideas saat ganti halaman
- ✅ **URL state management** - state tersimpan di URL dan persist saat refresh
- ✅ **Lazy loading** pada gambar dengan intersection observer
- ✅ **Consistent aspect ratio** untuk thumbnail (4:3)
- ✅ **Title limit** maksimal 3 baris dengan ellipsis
- ✅ **4 cards per row** pada desktop dengan spacing optimal
- ✅ **Responsive grid** (1-2-4 kolom tergantung ukuran layar)
- ✅ **Smart image fallback system** dengan 20 Unsplash images
- ✅ **Image loading optimization** dengan error recovery

### 4. Landing Page Architecture

- ✅ **Single Page Application** dengan multiple sections
- ✅ **Section-based navigation** yang smooth dan responsive
- ✅ **Ideas section** diprioritaskan sebagai halaman utama
- ✅ **Complete sections**: Work, About, Services, Ideas, Careers, Contact
- ✅ **Gradient backgrounds** untuk setiap section dengan tema yang berbeda
- ✅ **Scroll behavior** yang optimal dengan intersection observer

### 5. API Integration

- ✅ **Proxy configuration** untuk API Suitmedia
- ✅ **Banner CMS integration** dengan getBannerData endpoint
- ✅ **Fallback mock data** jika API tidak tersedia
- ✅ **Error handling** yang robust
- ✅ **Loading states** dengan spinner
- ✅ Proper **URL parameters** sesuai dokumentasi API
- ✅ **Intelligent image fallback** system

### 6. Image Management System

- ✅ **20 Curated Unsplash images** sebagai fallback
- ✅ **Smart image rotation** berdasarkan post ID
- ✅ **Automatic error recovery** untuk broken images
- ✅ **Loading optimization** dengan lazy loading
- ✅ **Aspect ratio consistency** (4:3) untuk semua images
- ✅ **Professional themed images** (business, technology, workspace)

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
- **Endpoints:**
  - `/ideas` - Untuk mengambil data post ideas
  - `/banner/ideas` - Untuk mengambil data banner CMS (dengan fallback)
- **Parameters:**
  - `page[number]`: Nomor halaman
  - `page[size]`: Jumlah item per halaman
  - `append[]`: `['small_image', 'medium_image']`
  - `sort`: `'published_at'` atau `'-published_at'`

### Image Fallback System

- **API Images**: Prioritas utama dari medium_image atau small_image
- **Unsplash Fallback**: 20 curated professional images
- **Banner Fallback**: `banner-ideas-bg.jpeg` untuk banner
- **Smart Rotation**: Distribusi image berdasarkan post ID untuk konsistensi

## Struktur Project

```
src/
├── components/
│   ├── Header.jsx          # Header dengan scroll behavior & navigation
│   ├── Banner.jsx          # Banner dengan parallax effect & CMS integration
│   ├── PostList.jsx        # Main list dengan sorting & pagination
│   ├── PostCard.jsx        # Individual post card dengan image fallback
│   ├── Pagination.jsx      # Pagination component
│   └── LazyImage.jsx       # Lazy loading image component
├── pages/
│   ├── LandingPage.jsx     # Main landing page dengan semua sections
│   ├── WorkPage.jsx        # Work section content
│   ├── AboutPage.jsx       # About section content
│   ├── ServicesPage.jsx    # Services section content
│   ├── IdeasPage.jsx       # Ideas section content
│   ├── CareersPage.jsx     # Careers section content
│   └── ContactPage.jsx     # Contact section content
├── services/
│   └── api.js              # API service dengan fallback & banner CMS
├── data/
│   └── mockData.js         # Mock data untuk development
├── App.jsx                 # Main app component
└── main.jsx               # App entry point
```

## Fitur Khusus

### Single Page Application Architecture

- **Section-based navigation** dengan smooth scroll behavior
- **Active section detection** menggunakan Intersection Observer
- **Ideas-first approach** - Ideas section sebagai landing utama
- **Comprehensive sections** - 6 section lengkap dengan konten unik

### State Management

- State disimpan di URL parameters untuk persistence
- Refresh halaman tidak mengembalikan ke state awal
- Browser history support untuk navigation
- **Smart pagination** - tetap di section Ideas saat navigasi halaman

### Performance Optimizations

- Lazy loading images dengan Intersection Observer
- Component memoization untuk re-renders yang optimal
- Debounced scroll handlers
- **Image fallback system** untuk performa loading yang optimal
- **20 Curated Unsplash images** untuk variasi visual

### Advanced Image Management

- **Smart fallback hierarchy**: API → Unsplash → Placeholder
- **Consistent aspect ratios** (4:3) untuk semua images
- **Professional themed images** dari Unsplash
- **Error recovery system** dengan automatic retry
- **Loading optimization** dengan lazy loading

### CMS Integration

- **Banner management** via CMS dengan fallback system
- **Dynamic content** untuk title dan subtitle
- **Image upload support** dengan error handling
- **Graceful fallback** jika CMS tidak tersedia

### Responsive Design

- Mobile-first approach
- Grid yang adaptif (1-2-4 kolom)
- Touch-friendly controls
- Optimized untuk berbagai ukuran layar
- **Compact card design** untuk mobile viewing

### Error Handling

- Graceful fallback ke mock data
- User-friendly error messages
- Network error recovery
- **Image loading fallback** dengan timeout handling
- **API service resilience** dengan multiple endpoints

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
