# 🎨 **Forums (Pineapple Stack) — UI / Front End**

## 📜 Summary

Frontend dibangun menggunakan React, TailwindCSS, Axios, React Router, Redux Toolkit, Custom Hooks.  
UI mirip StackOverflow namun bertema tropis “Pineapple Island”.  
Member dapat menelusuri thread, memberi like, comment, star, dan membuat thread baru.

---

# 🍍 Story (UI Version)

Di Pineapple Island, pengetahuan adalah mata uang.  
Stackers saling bantu menjawab pertanyaan dalam **Stack Arena** — tempat thread berkumpul.  
Setiap thread adalah “Pineapple Seed” yang tumbuh lewat komentar dan vote apresiasi.

---

# 🎯 **TASK DETAILS**

# **1. Routing & Pages**

Buat halaman berikut:

### **1) Home / Threads List**

- Menampilkan list semua thread
- Ada search, filter, sort
- Card thread memiliki:
  - Title
  - Category
  - Author
  - Likes count
  - Comment count
  - Star icon
  - Created time
- Tombol:
  - Comment button
  - Like button
  - Star button

### **2) Detail Thread**

Berisi:

- Judul, author, kategori
- Full content
- Like button
- Star button
- Comments list
- Form add comment

### **3) Create Thread**

Form input:

- title
- content
- category
- auto redirect ke detail setelah create

### **4) Edit Thread**

- Isi form default value
- Update thread via PUT
- Validasi wajib

### **5) Starred Threads Page**

Menampilkan daftar thread favorit Member.

### **6) Login & Register Page**

- Login menggunakan email/password
- Menyimpan token ke Redux Toolkit (state global)

### **7) Profile Member Page**

- Data Member
- Daftar aktivitas terbaru (optional)

### **8) Admin Dashboard (Keeper)**

- Lihat semua thread
- Lihat semua comments
- Hapus thread siapa saja
- Hapus comment siapa saja

---

# **2. Component Requirements**

### ThreadCard.jsx

- Title, author, likes count
- Comment button
- Like button
- Star button
- Category badge

### CommentBox.jsx

- Comment text
- Username
- Timestamp

### Navbar.jsx

- Login/Logout
- User menu dropdown
- Link ke halaman Starred

---

# **3. Functionality Requirements**

## Search

Search thread berdasarkan **title**.

## Filter

Filter berdasarkan **category**.

## Sort

Urutkan by:

- newest
- most liked

## Like System

- Like/unlike langsung update state
- Tampilkan total likes

## Star System

- Toggle starred dengan icon
- Simpan ke Redux state
- Halaman khusus `/stars`

## Comments

- Single layer comment
- Bisa hapus comment sendiri
- Admin bisa hapus semua comment

---

# **4. State Management**

Gunakan Redux Toolkit untuk:

- authSlice
- threadSlice
- commentSlice
- starSlice
- notificationSlice

Gunakan Custom Hooks:

- `useAuth()`
- `useThreads()`
- `useThreadActions()` (like, star, delete)
- `useFetch(url)`

---

# **5. Protected Routes**

Gunakan React Router:

- `/create`, `/edit/:id` → Member only
- `/keeper` → Admin only

---

# 🚀 Deployment

- Frontend → Vercel
- API → Render
