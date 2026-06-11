# 📡 API / BACK END — INVENTORY MASTER

## 📘 Summary

Backend aplikasi **Inventory Master** menyediakan REST API untuk mengelola Warehouse, Category, Item, Supplier, dan StockIn.  
API dibangun menggunakan **Express.js**, **Node.js**, dan **PostgreSQL Sequelize** dengan arsitektur **MVC** serta mendukung **CRUD lengkap + relasi 1-to-many**.

---

## 🧱 Outline

1. Project Setup
2. Environment Setup
3. Sequelize Init
4. Models + Migrations
5. Controllers
6. Routes + Endpoint List (Lengkap)
7. Error Handler
8. Postman Testing
9. Deployment Render

---

## 🛠️ Tech Stacks

- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- Sequelize CLI
- Nodemon
- CORS
- Render

---

## 🎯 Objectives

Backend harus mampu:

- Menyediakan **CRUD untuk 5 tabel**
- Mengatur **relasi:**
  - Warehouse (1) → Category (many)
  - Category (1) → Item (many)
  - Supplier (1) → Item (many)
  - Item (1) → StockIn (many)
- Menggunakan **MVC + Sequelize Migration + Seeder**
- Membuat **endpoint relasi**
- Menangani error dengan baik
- Bisa digunakan Front End via Axios

---

## 🧪 TASKS

### **Task 1 — Project Setup**

```
npm init -y
npm install express pg pg-hstore sequelize sequelize-cli cors dotenv
npm install --save-dev nodemon
```

- Buat struktur:

```
/controllers
/models
/migrations
/routes
/seeders
/config
```

- Buat `app.js` & `server.js`

---

### **Task 2 — Sequelize Init**

```
npx sequelize init
```

- Isi konfigurasi di `config/config.json` atau `config/database.js`

---

### **Task 3 — Create 5 Models + Migrations**

1. Warehouse
2. Category
3. Supplier
4. Item
5. StockIn

Contoh generate:

```
npx sequelize model:generate --name Warehouse --attributes name:string,location:string,capacity:integer
```

Jalankan migration:

```
npx sequelize db:migrate
```

---

### **Task 4 — Create Controllers**

Setiap controller wajib memiliki:

- create
- getAll
- getById
- update
- delete

---

### **Task 5 — Routes + FULL Endpoint List**

## 📍 **All Endpoints**

---

## 🏭 **Warehouse Routes**

**Base URL**: `/warehouses`

| Method | Endpoint                     | Description                       |
| ------ | ---------------------------- | --------------------------------- |
| GET    | `/warehouses`                | Get all warehouses                |
| GET    | `/warehouses/:id`            | Get warehouse by ID               |
| POST   | `/warehouses`                | Create warehouse                  |
| PUT    | `/warehouses/:id`            | Update warehouse                  |
| DELETE | `/warehouses/:id`            | Delete warehouse                  |
| GET    | `/warehouses/:id/categories` | Get all categories in a warehouse |

---

## 🗂️ **Category Routes**

**Base URL**: `/categories`

| Method | Endpoint                | Description                    |
| ------ | ----------------------- | ------------------------------ |
| GET    | `/categories`           | Get all categories             |
| GET    | `/categories/:id`       | Get category by ID             |
| POST   | `/categories`           | Create category                |
| PUT    | `/categories/:id`       | Update category                |
| DELETE | `/categories/:id`       | Delete category                |
| GET    | `/categories/:id/items` | Get all items in this category |

---

## 📦 **Item Routes**

**Base URL**: `/items`

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| GET    | `/items`             | Get all items                 |
| GET    | `/items/:id`         | Get item by ID                |
| POST   | `/items`             | Create item                   |
| PUT    | `/items/:id`         | Update item                   |
| DELETE | `/items/:id`         | Delete item                   |
| GET    | `/items/:id/stockin` | Get stock-in history for item |

---

## 🚚 **Supplier Routes**

**Base URL**: `/suppliers`

| Method | Endpoint               | Description                         |
| ------ | ---------------------- | ----------------------------------- |
| GET    | `/suppliers`           | Get all suppliers                   |
| GET    | `/suppliers/:id`       | Get supplier by ID                  |
| POST   | `/suppliers`           | Create supplier                     |
| PUT    | `/suppliers/:id`       | Update supplier                     |
| DELETE | `/suppliers/:id`       | Delete supplier                     |
| GET    | `/suppliers/:id/items` | Get items supplied by this supplier |

---

## 📥 **StockIn Routes**

**Base URL**: `/stockin`

| Method | Endpoint       | Description                 |
| ------ | -------------- | --------------------------- |
| GET    | `/stockin`     | Get all stock-in records    |
| GET    | `/stockin/:id` | Get stock-in by ID          |
| POST   | `/stockin`     | Create stock-in (add stock) |
| PUT    | `/stockin/:id` | Update stock-in             |
| DELETE | `/stockin/:id` | Delete stock-in             |

---

### **Task 6 — Middleware**

- CORS
- Error handler
- 404 handler
- Request logger

---

### **Task 7 — Postman Testing**

- Test seluruh CRUD
- Test relasi endpoint
- Test error response

---

## 🚀 Deployment (Render)

1. Push project ke GitHub
2. Buat **Web Service** di Render
3. Tambahkan environment variables:
   - `DATABASE_URL`
   - `NODE_ENV=production`
4. Jalankan migration:
   ```
   npx sequelize db:migrate
   ```
5. Akses API:
   ```
   https://your-backend.onrender.com/items
   ```

---

## ✅ Notes

- Semua response harus menggunakan format:

```
{ "message": "success", "data": {...} }
```

- Error selalu:

```
{ "message": "error", "error": "..."}
```
