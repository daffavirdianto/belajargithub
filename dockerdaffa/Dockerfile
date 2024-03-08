# Menggunakan Node.js versi 14 sebagai image dasar
FROM node:14

# Menentukan direktori kerja dalam kontainer
WORKDIR /usr/src/app

# Menyalin file package.json dan package-lock.json ke dalam direktori kerja
COPY package*.json ./

# Menginstal dependensi Node.js
RUN npm install

# Menyalin seluruh sumber kode aplikasi
COPY . .

# Menjalankan aplikasi Node.js
CMD ["node", "index.js"] 