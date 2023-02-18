# Employee Workload

## Summary

### Storylines

Seorang pekerja akan menngerjakan tugas-tugas sesuai orderan atau ticket yang mereka dapat kan dalam board kerjaan mereka. `Ticket` memiliki 2 jjenis `Featture` dan `Bug`.

Terdapat 2 jenis `User` dimana mereka adalah `Supervisor` dan `Staff`. Mereka memiliki akses sebagai berikut:

a. `Supervisor` dapat membuat, menghapus dan mengedit `Ticket` baik `Feature` maupun `Bug`

b. `Staff` tidak dapat membuat, menghapus dan mengedit `Ticket`. Tetapi mereka dapat mengambil dan mengerjakan `Ticket`.

### Flow

Tujuan dari aplikasi ini adalah `Staff` dapat mengerjakan `Ticket` yang diberikan oleh `Supervisor`. Terdapat 2 jenis flow:

1. `Supervisor`

  - Dapat Create, Read, Update, Delete `Ticket` baik `Feature` maupun `Bug`.
  - Dapat Read `Staff` yang ada, tidak bisa Create, Update, Delete.
  - Dapat Read _skills_ dari `Staff`.
  - Dapat Read details diri nya sendiri
  - Dapat Read Create _skills_ untuk diri nya sendiri

2. `Staff`

  - Dapat Read dan Update `Ticket` menjadi done, tidak bisa Create dan Delete
  - Dapat Read dan Create _skills_ untuk diri nya sendiri

### Command

A. Skenario: _User belum login_

  ```bash
  node index.js help
  node index.js login <username> <pwd>
  node index.js register <username> <access>
  ```

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
```json
[
{
  "id":1,
  "username": "jack123",
  "password": "123",
  "access":"supervisor",
  "online":false,
  "skills": ["js"]
},
{
  "id":2,
  "username": "employee1",
  "password": "123",
  "access":"staff",
  "online":false,
  "skills":[]
}
]
```
