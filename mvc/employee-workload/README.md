# Employee Workload

## Summary

### Storylines

Seorang pekerja akan menngerjakan tugas-tugas sesuai orderan atau ticket yang mereka dapat kan dalam board kerjaan mereka. `Ticket` memiliki 2 jenis `Feature` dan `Bug`.

Terdapat 2 jenis `User` dimana mereka adalah `Supervisor` dan `Staff`. Mereka memiliki akses sebagai berikut:

a. `Supervisor` dapat membuat, menghapus dan mengedit `Ticket` baik `Feature` maupun `Bug`.

b. `Staff` tidak dapat membuat, menghapus dan mengedit `Ticket`. Tetapi mereka dapat mengambil dan mengerjakan `Ticket`.

### Flow

### Command

## Format

Terdapat 2 file .json : `tickets.json` dan ` users.json`

```json
{
  "features": [
    {
      "id": "2023/02/17-FTR1",
      "type": "feature",
      "score": 10,
      "description": "menambahkan feature login dan register",
      "status": true
    },
    {
      "id": "2023/02/17-FTR2",
      "type": "feature",
      "score": 5,
      "description": "menambahkan feature lagi",
      "status": false
    }
  ],
  "bugs": [
    {
      "id": "2023/02/17-BUG1",
      "type": "bug",
      "score": 1,
      "description": "bug feature login dan register",
      "status": true
    },
    {
      "id": "2023/02/17-BUG2",
      "type": "bug",
      "score": 2,
      "description": "menambahkan feature login dan register",
      "status": true
    }
  ]
}
```
