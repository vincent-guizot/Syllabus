# UI / FRONT END – INVENTORY MASTER

## Summary

Aplikasi **Inventory Master** adalah aplikasi manajemen gudang yang digunakan untuk mengelola warehouse, kategori, supplier, item, dan stock-in. Aplikasi ini memiliki 7+ halaman dengan fitur **CRUD lengkap**, navigasi menggunakan **React Router (createBrowserRouter)**, styling menggunakan **TailwindCSS**, data fetch menggunakan **Axios**, dan komponen icon menggunakan **Lucide / React Icons**. Aplikasi ini berfungsi untuk memudahkan user mengatur data barang dari gudang hingga masuknya stok.

## Outline

1. Landing / Dashboard
2. Warehouse Pages
   - List Warehouse
   - Create Warehouse
   - Edit Warehouse
   - Detail Warehouse
3. Category Pages
   - List Category
   - Create Category
   - Edit Category
4. Supplier Pages
   - List Supplier
   - Create Supplier
   - Edit Supplier
5. Items Pages
   - List Items
   - Create Items
   - Edit Items
   - Detail Items
6. Stock In Pages
   - List Stock In
   - Create Stock In
7. Not Found Page
8. Routing menggunakan **createBrowserRouter**

## Tech Stacks

- React + Vite
- React Router (createBrowserRouter)
- React Hooks: useState, useEffect
- Axios
- TailwindCSS
- lucide-react / react-icons
- SweetAlert / Toast
- Deployment: Vercel

## Objectives

- Memahami alur Front End aplikasi CRUD lengkap
- Menerapkan:
  - useState (state management)
  - useEffect (data fetching)
  - Axios untuk komunikasi API
  - Routing dengan createBrowserRouter
  - Form handling & validasi
  - Modular component structure
- Membangun aplikasi dengan UI yang rapi dan fungsional

## Tasks

### Task 1 — Setup Project

- Setup React + Vite
- Install TailwindCSS, React Router, Axios, Icons
- Setup folder structure: pages, components, layouts, services, router

### Task 2 — Router Setup (createBrowserRouter)

- Buat router utama
- Buat layout utama (Header, Sidebar, Content)
- Hubungkan semua halaman ke router

### Task 3 — Warehouse Module

- Page: list, create, edit, detail
- Integrasi API (GET, POST, PUT, DELETE)
- Tampilkan data dengan tabel

### Task 4 — Category Module

- CRUD kategori
- Opsional: filter berdasarkan warehouse
- Integrasi API

### Task 5 — Supplier Module

- CRUD supplier
- Validasi form
- Integrasi API

### Task 6 — Items Module

- CRUD item
- Relasi: pilih kategori & supplier
- Detail item
- Opsional: stok item tampil dari stockins

### Task 7 — Stock In Module

- List stock-in
- Tambah data masuk stok
- Update stock item otomatis

### Task 8 — Reusable Components

- Button
- Input
- Table
- Modal (opsional)
- Pagination (opsional)

### Task 9 — UI / UX

- Styling dengan TailwindCSS
- Layout: navbar, sidebar, card
- Notifikasi sukses & error

### Task 10 — Deployment

- Deploy ke Vercel
- Set BASE_API_URL di `.env`
