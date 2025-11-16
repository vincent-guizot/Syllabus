# Employee Workload

## Summary

Seorang pekerja akan mengerjakan tugas-tugas sesuai orderan atau ticket yang mereka dapatkan dalam board kerjaan mereka. **Ticket** memiliki 2 jenis: **Feature** dan **Bug**.

Terdapat 2 jenis **User**: **Supervisor** dan **Staff**.

- **Supervisor** dapat membuat, menghapus, dan mengedit Ticket (baik Feature maupun Bug).
- **Staff** tidak dapat membuat, menghapus, atau mengedit Ticket. Tapi mereka bisa mengambil (pickup) dan mengerjakan Ticket.

---

## Storylines

1. Supervisor membuat Ticket (Feature / Bug).
2. Ticket muncul di board kerja sebagai “Unassigned” atau langsung ditugaskan ke staff.
3. Staff dapat:
   - Melihat Ticket yang belum diambil,
   - Mengambil Ticket,
   - Mengerjakan Ticket → mengubah status menjadi _In Progress_, _Testing_, _Done_.
4. Supervisor memantau progres tiap staff, bisa melakukan review, dan memberi feedback.
5. Setelah selesai, Ticket ditutup / di-archive.

---

## Flow

- **Supervisor Side**

  1. Buat Ticket baru → input judul, deskripsi, jenis, prioritas, deadline.
  2. Pilih apakah assign langsung ke staff atau biarkan staff mengambil sendiri.
  3. Pantau status pengerjaan dan waktu.
  4. Review hasil setelah staff menyelesaikan Ticket.

- **Staff Side**

  1. Login ke sistem → lihat Ticket: Assigned to Me / Available to Pick / In Progress / Done.
  2. Ambil Ticket → “Take Ticket”.
  3. Mulai pengerjaan → update progress & status.
  4. Setelah selesai → ubah status ke **Done** → menunggu review Supervisor.

- **Ticket Lifecycle**
  ```
  Unassigned → Assigned → In Progress → Testing → Done
  ```

---

## Command (CLI / node app.js)

### Supervisor Commands

| Command                                                  | Fungsi                             |
| -------------------------------------------------------- | ---------------------------------- |
| `node app.js createTicket`                               | Membuat Ticket baru (prompt input) |
| `node app.js editTicket <ticketId>`                      | Mengedit Ticket                    |
| `node app.js deleteTicket <ticketId>`                    | Menghapus Ticket                   |
| `node app.js assignTicket <ticketId> <staffId>`          | Assign Ticket ke Staff             |
| `node app.js setPriority <ticketId> <low\|medium\|high>` | Mengatur prioritas Ticket          |
| `node app.js setDeadline <ticketId> <YYYY-MM-DD>`        | Mengatur deadline Ticket           |
| `node app.js showWorkload <staffId>`                     | Menampilkan workload Staff         |
| `node app.js showTickets`                                | Menampilkan semua Ticket           |
| `node app.js showTicket <ticketId>`                      | Menampilkan detail satu Ticket     |

### Staff Commands

| Command                             | Fungsi                                               |
| ----------------------------------- | ---------------------------------------------------- |
| `node app.js takeTicket <ticketId>` | Mengambil Ticket yang tersedia                       |
| `node app.js start <ticketId>`      | Mengubah status Ticket jadi **In Progress**          |
| `node app.js testing <ticketId>`    | Mengubah status Ticket jadi **Testing**              |
| `node app.js finish <ticketId>`     | Mengubah status Ticket jadi **Done**                 |
| `node app.js myTickets`             | Menampilkan Ticket yang sedang dikerjakan oleh Staff |
| `node app.js workload`              | Menampilkan ringkasan workload Staff                 |

### Optional Commands

| Command                                       | Fungsi                                      |
| --------------------------------------------- | ------------------------------------------- |
| `node app.js searchTicket "<keyword>"`        | Cari Ticket berdasarkan judul/deskripsi     |
| `node app.js filterTicket <status\|priority>` | Filter Ticket menurut status atau prioritas |
| `node app.js activityLog <ticketId>`          | Lihat histori aktivitas Ticket              |
| `node app.js unassignTicket <ticketId>`       | Lepas assign Ticket dari Staff              |

---

## Format Data

### Ticket

```json
{
  "id": "T123",
  "type": "Feature | Bug",
  "title": "string",
  "description": "string",
  "priority": "Low | Medium | High",
  "status": "Unassigned | Assigned | In Progress | Testing | Done",
  "deadline": "YYYY-MM-DD",
  "supervisorId": "U001",
  "assignedTo": "U010",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### User

```json
{
  "id": "U001",
  "name": "string",
  "role": "Supervisor | Staff",
  "workload": {
    "assigned": 2,
    "inProgress": 1,
    "done": 5
  }
}
```

---

**Catatan gambar:** \
Gambar di bagian atas diambil dari Pexels sebagai ilustrasi kolaborasi tim kerja. :contentReference[oaicite:1]{index=1}
