
# Binar Car Management API

API Management data mobil dengan tech stack Node.JS dan PostgresSQL, dengan kaidah Service Repository Pattern

## Entity Relationship Diagram (ERD)
ERD dari sistem ini bisa dilihat melalui tautan berikut : https://dbdiagram.io/d/634db81847094101957ed8ef

## Hyperlink
* Akses Swagger Open API Doc = ```http://hostname:port/api-docs```


## API Endpoint
Perlu diingat bahwa setiap transaksi yang berkaitan dengan CRUD admin memerlukan token superadmin yang didapatkan pada saat login, login Superadmin :
Username : ```superadmin@mail.com```
Password : ```getcloser```
Token Prefix : ```Supersecret generatedjwttoken```
User superadmin didapatkan dengan cara menerapkan seeder menggunakan sequelizer, setelah data berhasil di-seeds, lakukan query langsung pada tabel untuk mendapatkan token superadmin agar dapat melakukan login.

Entitas yang dapat melakukan CRUD data mobil adalah user dengan role superadmin/admins yang diuji berdasarkan prefix dari header authorization :
Prefix token Superadmin : ```Supersecret``` , Prefix token Admin : ```admins```

Entitas dengan role member dapat registrasi dan melihat semua data mobil, namun tidak dapat melakukan aktifitas yang bersifat CRUD.

Untuk mengecek kredensial user yang aktif, dapat melakukan request get pada endpoint ```/api/whoami``` dengan menyediakan header key Authorization dan value token dengan prefix masing-masing user berdasarkan role
