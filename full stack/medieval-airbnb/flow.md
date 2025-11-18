# 🔄 CART → INVOICE FLOW

## 1️⃣ Add to Cart

- Traveler memilih listing + tanggal
- Backend melakukan **soft check availability**
- Item masuk ke `CartItems` (snapshot harga tersimpan)

## 2️⃣ Checkout

Backend menjalankan **transaction**:

- Hard availability check
- Membuat **Invoice**
- Membuat **InvoiceItems**
- Mengosongkan cart
- Reservasi availability (opsional)

## 3️⃣ History System (Auto)

Data tersimpan otomatis:

- add_to_cart
- invoice_created
- invoice_paid (future)
- listing_created (host)

## 4️⃣ Notifications

- Traveler: “Invoice berhasil dibuat”
- Host: “Traveler memesan listing kamu”
- Admin (opsional): approval notification

Flow selesai ketika invoice & notifikasi berhasil dibuat.
