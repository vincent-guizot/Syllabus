# 🛠️ **Forums (Pineapple Stack) — SERVER**

## 📜 Summary

Kamu akan membangun **REST API** untuk platform diskusi mirip _StackOverflow_ bernama **Pineapple Stack Forums**.  
User disebut **Member**, dan admin disebut **Keeper**.  
Setiap Member dapat membuat Thread, memberi Comment (1 level), Like, dan Starred.  
Sistem wajib menyimpan log notifikasi untuk setiap aktivitas.

---

## 🍍 Story (Lore)

Di “Pineapple Island”, para coder disebut **Stackers**. Mereka berkumpul di sebuah tempat suci bernama **Knowledge Stack**, tempat mereka melempar pertanyaan, berbagi solusi, memberi apresiasi, dan menyimpan posting favorit.  
Setiap aksi meninggalkan jejak di **History Log**, dijaga oleh para **Keeper**.

---

# ⚔️ **TASK REQUIREMENTS**

## **1. Minimal 5 Tables**

Wajib dibuat:

1. **Members**
2. **Profiles** (1-to-1 dengan Members)
3. **Threads**
4. **Comments**
5. **Likes**
6. **Stars**
7. **Logs/Notifications**

> Total 7 tabel (boleh lebih).

---

## **2. Relasi**

- **1 : 1** → Member ↔ Profile
- **1 : Many** → Member ↔ Threads, Member ↔ Comments
- **Many : Many** → Member ↔ Threads (via Likes & Stars)

---

## **3. Validasi, Hooks, Query Params & Slug**

### **Validasi**

- Email unique
- Password min 6
- Thread title wajib
- Comment wajib
- Semua ForeignKey harus valid

### **Hooks Sequelize**

- beforeCreate (Members) → hash password
- beforeCreate (Threads) → generate slug
- beforeUpdate (Threads) → update slug bila title berubah

### **Query Params (WAJIB ADA)**

- `?search=...`
- `?sort=latest|popular`
- `?filter=category_name`

### **Slug**

Semua thread bisa diakses lewat:  
`GET /threads/:slug`

---

## **4. Member Abilities**

Member dapat:

- Membuat Thread
- Mengedit Thread miliknya
- Menghapus Thread miliknya
- Membuat Comment (1 level, no nested)
- Like / Unlike
- Star / Unstar
- Melihat notifikasi personal

---

## **5. Notification System**

Setiap aksi akan masuk ke tabel **Logs**:

- Thread created
- Thread updated
- Comment created
- Like given
- Star given

Structure Logs:

- id
- memberId
- action
- entityType (“thread”, “comment”, “like”, “star”)
- entityId
- createdAt

---

## **6. Starred Thread**

Member bisa membuat daftar thread favoritnya.  
Many-to-many table: **Stars**

---

# 📡 **MINIMAL ENDPOINTS**

## AUTH

- POST `/auth/register`
- POST `/auth/login`

## THREADS

- POST `/threads`
- GET `/threads` (search + filter + sort)
- GET `/threads/:slug`
- PUT `/threads/:id`
- DELETE `/threads/:id`

## COMMENTS

- POST `/comments/:threadId`
- DELETE `/comments/:id`

## LIKES

- POST `/likes/:threadId`
- DELETE `/likes/:threadId`

## STARS

- POST `/stars/:threadId`
- GET `/stars/me`

## LOGS

- GET `/logs/me`

---

# 🚀 Deployment

- Server → Render
- Database → PostgreSQL
