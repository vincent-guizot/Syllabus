<div style="display:flex;gap:12px;align-items:center;margin-bottom:12px">
  <button onclick="(function(){
    try{
      const el=document.getElementById('readme-md');
      const text = el ? el.innerText : document.querySelector('main')?.innerText || '';
      navigator.clipboard.writeText(text);
      alert('README copied to clipboard!');
    } catch(e){ alert('Unable to copy'); }
  })()" style="padding:8px 12px;border-radius:8px;border:1px solid #ddd;cursor:pointer">📋 Copy README</button>
  <span style="color:#555">Click to copy the whole README.md content to clipboard</span>
</div>

<div id="readme-md">

# 📦 Inventory Master

**Inventory Master** adalah aplikasi manajemen gudang yang terdiri dari **Back End (REST API)** dan **Front End (React)** untuk mengelola Warehouse, Category, Supplier, Item, dan Stock-In.

---

## 📘 Summary

Backend menyediakan REST API untuk mengelola:

- Warehouse
- Category
- Supplier
- Item
- StockIn

API dibangun dengan **Express.js**, **Node.js**, dan **PostgreSQL (Sequelize)** mengikuti pola **MVC** dan mendukung **CRUD lengkap + relasi 1-to-many**. Front End menggunakan **React + Vite + TailwindCSS** dan berkomunikasi ke API via **Axios**.

---

## 🧱 Tech Stack

**Back End**

- Node.js
- Express.js
- PostgreSQL
- Sequelize + Sequelize CLI
- Nodemon (dev)
- CORS, dotenv
- Deployment: Render

**Front End**

- React + Vite
- React Router (createBrowserRouter)
- Axios
- TailwindCSS
- lucide-react / react-icons
- SweetAlert / Toast
- Deployment: Vercel

---

## 🎯 Objectives

- Menyediakan CRUD untuk 5 entitas utama
- Menangani relasi:

  - Warehouse (1) → Category (many)
  - Category (1) → Item (many)
  - Supplier (1) → Item (many)
  - Item (1) → StockIn (many)

- Menggunakan MVC + migration + seeder
- Menyediakan endpoint relasi lengkap untuk kebutuhan Front End
- Menangani error dan response standar

---

## 📁 Project Structure (suggested)

```
backend/
  ├─ controllers/
  ├─ models/
  ├─ migrations/
  ├─ seeders/
  ├─ routes/
  ├─ config/
  ├─ app.js
  └─ server.js

frontend/
  ├─ src/
  │  ├─ pages/
  │  ├─ components/
  │  ├─ services/
  │  ├─ router/
  │  └─ App.jsx
  └─ vite.config.js
```

---

## 🧪 Back End — Quick Tasks

### Task 1 — Setup & Dependencies

```bash
npm init -y
npm install express pg pg-hstore sequelize sequelize-cli cors dotenv
npm install --save-dev nodemon
```

Buat folder dasar: `controllers`, `models`, `migrations`, `routes`, `seeders`, `config`.

---

### Task 2 — Sequelize Init & Config

```bash
npx sequelize init
# edit config/config.json or config/database.js
```

---

### Task 3 — Models & Migrations

Buat 5 model dan migration:

- Warehouse (name, location, capacity)
- Category (name, warehouseId)
- Supplier (name, contact)
- Item (name, sku, price, stock, categoryId, supplierId)
- StockIn (itemId, quantity, note, receivedAt)

Contoh generate:

```bash
npx sequelize model:generate --name Warehouse --attributes name:string,location:string,capacity:integer
```

Jalankan migration:

```bash
npx sequelize db:migrate
```

---

### Task 4 — Controllers & Services

Untuk setiap entitas implementasikan fungsi:

- create
- getAll
- getById
- update
- delete

Gunakan transaksi saat melakukan operasi yang mempengaruhi stock atau relasi multi-step.

---

### Task 5 — Routes (important endpoints)

**Warehouse**: `/warehouses`

- `GET /warehouses`
- `GET /warehouses/:id`
- `POST /warehouses`
- `PUT /warehouses/:id`
- `DELETE /warehouses/:id`
- `GET /warehouses/:id/categories` — categories in a warehouse

**Category**: `/categories`

- `GET /categories`
- `GET /categories/:id`
- `POST /categories`
- `PUT /categories/:id`
- `DELETE /categories/:id`
- `GET /categories/:id/items` — items in a category

**Item**: `/items`

- `GET /items`
- `GET /items/:id`
- `POST /items`
- `PUT /items/:id`
- `DELETE /items/:id`
- `GET /items/:id/stockin` — stock-in history for item

**Supplier**: `/suppliers`

- `GET /suppliers`
- `GET /suppliers/:id`
- `POST /suppliers`
- `PUT /suppliers/:id`
- `DELETE /suppliers/:id`
- `GET /suppliers/:id/items` — items from supplier

**StockIn**: `/stockin`

- `GET /stockin`
- `GET /stockin/:id`
- `POST /stockin`
- `PUT /stockin/:id`
- `DELETE /stockin/:id`

---

### Task 6 — Middleware

- CORS
- Error handler (standardize error response)
- 404 handler
- Request logger (morgan or custom)

**Response format**

- Success: `{ "message": "success", "data": ... }`
- Error: `{ "message": "error", "error": "..." }`

---

### Task 7 — Postman / Testing

- Test seluruh CRUD endpoint
- Test relasi endpoint (e.g., categories by warehouse)
- Test edge cases & error responses

---

### Deployment (Render)

1. Push repo ke GitHub
2. Buat Web Service baru di Render
3. Tambahkan env vars (e.g., `DATABASE_URL`, `NODE_ENV=production`)
4. Pada deployment shell jalankan migrations jika perlu:

```bash
npx sequelize db:migrate
```

---

## 🖥️ Front End — Quick Tasks

### Setup

- `npm create vite@latest` (React)
- Install: `react-router-dom axios tailwindcss lucide-react react-icons` etc.
- Struktur: `pages`, `components`, `services`, `router`

### Core Pages

- Dashboard (landing)
- Warehouse: list / create / edit / detail
- Category: list / create / edit
- Supplier: list / create / edit
- Items: list / create / edit / detail (show stock-ins)
- StockIn: list / create

### Integration

- Gunakan Axios + interceptors untuk attach BASE_URL dan handle errors
- Forms: client-side validation, show success/error toasts
- Routing: `createBrowserRouter`

---

## ✅ Notes & Best Practices

- Gunakan migration + seeders untuk data contoh
- Standarisasi response JSON
- Validasi input di controller (dan optional di model)
- Pakai transaction untuk operasi stok multi-step
- Buat dokumentasi Postman atau Swagger untuk reference API

---

_Last updated: 2025-11-22_

</div>
