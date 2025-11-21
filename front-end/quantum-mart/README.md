# 🛒 QuantumMart — Advanced React E-Commerce System

## Storyline

QuantumMart adalah platform e-commerce next-gen yang menjual barang digital.  
Mereka ingin membangun aplikasi web dengan fitur lengkap: multi-role (Admin & Member), CRUD produk, sistem keranjang (checkout tanpa pembayaran), filter, sorting, search, dan UI modern.

Kamu ditunjuk sebagai Lead Frontend Engineer.  
Tugasmu adalah membangun sistem ini secara penuh menggunakan React Router, Redux Toolkit, Hooks, Custom Hooks, TailwindCSS, dan axios.

---

## Objectives

### 🧩 Task 1 — Core Technologies Setup

Gunakan:

- **React Router (multi-page, protected routes)**
- **Redux Toolkit (global state untuk auth & cart)**
- **React Hooks** → `useState`, `useEffect`
- **Custom Hooks** → minimal 2 custom hooks (contoh: `useFetch`, `useAuth`, `useDebounce`)
- **TailwindCSS**
- **axios**
- **react-icons / lucide-react**

Aplikasi harus memiliki 2 role:

- **Admin** → boleh CRUD produk
- **Member** → hanya bisa membeli, tidak bisa CRUD

---

## 🛠️ Task 2 — Routing (Min. 7 Halaman)

Buat struktur router dengan halaman berikut:

1. **Landing Page**

   - Banner utama
   - Tombol masuk ke product catalog

2. **Product Catalog Page**

   - Menampilkan semua produk
   - Fitur wajib:
     - **Search** (live search / debounce)
     - **Filter** (by category, by price range)
     - **Sorting** (price low-high, high-low, newest)
   - Tombol detail produk
   - Tombol tambah ke cart (Member only)

3. **Product Detail Page**

   - Informasi lengkap produk
   - Tombol tambah ke cart
   - Jika Admin → Muncul tombol Edit & Delete

4. **Cart Page**

   - List item di cart
   - Update quantity
   - Hapus item
   - Tombol “Checkout” (tanpa pembayaran)
   - Setelah checkout → buat **Order Summary Page**

5. **Order Summary / Order Success Page**

   - Tampilkan data order
   - Reset cart setelah checkout

6. **Admin Dashboard Page** (Protected Route)

   - Hanya Admin yang bisa akses
   - Menampilkan total produk, total order, ringkasan admin
   - Navigasi ke halaman CRUD produk

7. **Admin Product Management Page**

   - CRUD produk lengkap
   - Form Create
   - Form Edit
   - List tabel lengkap

8. **Auth Pages**
   - Login Page → menentukan role (Admin / Member)
   - (Opsional) Register Page
   - Simpan role ke Redux global state

> **Protected Route Rules:**
>
> - Admin hanya bisa masuk dashboard & CRUD
> - Member tidak boleh masuk dashboard
> - Guest hanya bisa lihat catalog & detail

---

## 🧪 Task 3 — State Management (Redux Toolkit)

Buat minimal 3 slice:

1. **authSlice**

   - Menyimpan user login & role
   - Actions: login, logout, setRole

2. **cartSlice**

   - Items, qty, subtotal
   - Actions: addToCart, remove, updateQty, resetCart

3. **productSlice** (opsional, boleh fetch di custom hook juga)
   - Menyimpan list produk untuk cache
   - Actions: setProducts, setFilters, etc.

---

## 🌐 Task 4 — CRUD Produk (Admin Only)

Gunakan axios untuk:

- GET list produk
- GET detail produk
- POST tambah produk
- PUT/PATCH edit produk
- DELETE hapus produk

Validasi form wajib:

- name
- price
- category
- stock
- imageURL

Admin harus memiliki halaman:

- Create Product
- Edit Product
- Product Table List
- Delete Confirmation

---

## 🧲 Task 5 — Custom Hooks (Min. 2)

Contoh custom hooks yang boleh dipilih:

- `useFetch(url)` → fetch data dengan loading & error
- `useAuth()` → handle role, login, logout
- `useDebounce(value, delay)` → untuk live search
- `useCart()` → wrapper cart logic
- `useProducts()` → caching produk + filtering

---

## 🎛️ Task 6 — Filtering, Sorting, Searching (Wajib)

Pada Product Catalog:

### Filter

- By Category
- By Price (range slider atau manual input)

### Sorting

- Price Low → High
- Price High → Low
- Newest

### Search

- Input search
- Dengan **debounce** (custom hook)

Hasil filter harus real-time.

---

## 🛒 Task 7 — Checkout System (Tanpa Payment)

- Checkout hanya menghapus cart & membuat order summary
- Order dapat berupa objek sederhana:
  - items
  - date
  - total
  - user
- Redirect ke Order Success Page

---

## 🎨 Task 8 — UI Requirements

Gunakan Tailwind untuk membuat:

- Navbar dengan role badge
- Sidebar admin (kalau mau)
- Product Card
- Responsive grid
- Toast or alert untuk CRUD actions
- Beautiful pagination (opsional)

---

## 🧾 Output Akhir

- Aplikasi e-commerce tingkat menengah → high
- CRUD lengkap
- Routing lengkap dengan protected routes
- Redux Toolkit untuk auth & cart
- Admin & Member roles
- Filtering, sorting, search berjalan mulus
- Custom Hooks berjalan
- UI modern & responsif

**Selamat membangun QuantumMart — ingat, aplikasimu menentukan masa depan e-commerce!** ⚡
