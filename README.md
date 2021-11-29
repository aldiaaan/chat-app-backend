# Chat Apps Backend

## Anggota Kelompok
- Aldian Asmara (1313618032)
- Muhammad Bagas Pradana (1313618015)

## Setting up development environment
- clone repository ini
- buat file `.env` baru di  projects root directory dan copy konten .env.example dan isi variable yang dibutuhkan
- copy firebase admin credential json ke /src directory dan rename file json nya ke `firebase-admin-credential.json`.
- jalankan `npm install`, yarn `yarn install`
- jalankan `npm run start:dev`, yarn `yarn start:dev`
- app akan berjalan di `http://localhost:{{APP_PORT}}`. 

*APP_PORT didefinisikan di .env file

## Endpoints

`POST /api/v1/image/upload`

#### headers
content-type | multipart/form-data
--- | --- |
#### body
key | type
--- | ---
image | blob


`POST /api/v1/message/send`

#### body
key | type | comment
--- | --- | ---
image | string | images url
message | string | -
