# POSBites
POSBites adalah **prototype** aplikasi _Point-Of-Sales_ berbasis website yang dirancang khusus untuk membantu sebuah bisnis F&B (_Food & Beverage_) dalam mengelola transaksi penjualan. Aplikasi ini menawarkan kemudahan dalam melakukan pencatatan pesanan dan penghitungan total pembayaran, sehingga dapat meminimalisir kesalahan dalam proses pencatatan manual. Dengan tampilan antarmuka yang sederhana, intuitif, dan responsif, POSBites dirancang agar dapat digunakan dengan mudah oleh siapa saja.

# Teknologi Yang Digunakan
### 1. Vite
Vite adalah sebuah build tool modern yang digunakan untuk mempercepat proses pengembangan aplikasi front-end. Vite dipilih karena kemampuannya mempercepat pengembangan, menyederhanakan konfigurasi, dan integrasi yang mudah dengan React.js dan TailwindCSS

### 2. Tailwind CSS
Tailwind CSS adalah utility-first CSS framework yang memungkinkan pengembang membangun desain secara langsung dari class-class utility yang telah disediakan tanpa perlu membuat CSS secara manual. Tailwind CSS mempercepat proses styling dan membuat tampilan antarmuka konsisten serta lebih mudah dipelihara. 

### 3. React.js
React.js adalah library JavaScript open-source yang digunakan untuk membangun user interface secara deklaratif dan berbasis komponen. React dipilih karena arsitekturnya yang modern, skalabilitas tinggi, dan mempercepat pengembangan UI interaktif.

### 4. React Router
React Router adalah library routing untuk aplikasi React yang memungkinkan pengembang membuat navigasi antar halaman secara client-side. React Router memungkinkan pengembangan aplikasi SPA (Single Page Application) yang responsif dan dinamis, tanpa perlu refresh halaman.

### 5. React Hot Toast
React Hot Toast adalah library untuk menampilkan notifikasi toast di aplikasi React. Toast digunakan untuk memberi feedback kepada pengguna seperti informasi berhasil, error, atau loading. React Hot Toast memberikan cara cepat dan elegan untuk menampilkan notifikasi pada aplikasi, meningkatkan user experience secara signifikan.

### 6. Local Storage
Local Storage adalah bagian dari Web Storage API yang disediakan oleh browser untuk menyimpan data secara lokal di sisi client dalam bentuk key-value pair. Data yang disimpan tidak memiliki waktu kedaluwarsa, sehingga tetap tersedia meskipun halaman di-refresh atau browser ditutup dan dibuka kembali. Local Storage disini digunakan sebagai solusi sementara untuk menyimpan data secara lokal, dikarenakan aplikasi ini masih berada didalam tahap prototype.

# Fitur Aplikasi
### 1. Menampilkan Daftar Produk
Semua data produk memiliki informasi yang jelas (gambar, nama produk, kategori, deskripsi dan harga). Data produk masih bersifat dummy data, dikarenakan aplikasi masih didalam tahap prototype. Semua informasi produk disimpan didalam sebuah object, yang kemudian object tersebut disimpan didalam array. Kemudian, object-object tersebut akan di render dengan perulangan, kemudian semua informasi produk akan di ekstrak dan ditampilkan didalam component UI.

### 2. Filter Produk Berdasarkan Kategori
Setiap produk memiliki kategorinya sendiri. Dari informasi tersebut, produk bisa ditampilkan secara kondisional berdasarkan kategori yang terpilih. Kategori yang dipilih akan disimpan didalam sebuah state bernama `selectedTab` dan jika ingin merubah merubah kategori state tersebut, user bisa mengclick salah satu button didalam component Tabs. Data produk akan disimpan didalam sebuah variable `filteredProducts` (berperan sebagai derived state) dan akan melakukan filtering setiap kali state `selectedTab` mengalami perubahan.

### 3. Shopping Cart
Aplikasi memiliki sebuah fitur shopping cart yang bisa digunakan untuk megelola data pesanan. Data pesanan didalam shopping cart akan disimpan didalam local storage bawaan web browser. Setiap perubahan yang terjadi (contoh : menambah, menghapus atau mengubah jumlah produk) akan otomatis disimpan didalam local storage. 

Dan didalam aplikasi, data shopping cart akan disimpan didalam sebuah state bernama `cart`. Dan state ini, akan disalurkan secara global menggunakan React Context API melalui pembuatan Context Provider bernama `CartProvider`. `Cart Provider` menyimpan state `cart` sekaligus menyediakan beberapa method yang dapat digunakan untuk memanipulasi data didalam state : 
* `addProduct` : Menambah produk baru ke dalam state `cart`
* `deleteProduct` : Menghapus produk dari state `cart`
* `increaseProductQuantity` : Menambah jumlah produk sebanyak 1
* `decreaseProductQuantity` : Mengurangi jumlah produk sebanyak 1
* `clearCart` : Menghapus semua data produk didalam state `cart`

Setiap terjadi perubahan pada state `cart`, maka data state akan akan otomatis di simpan didalam local storage. Penggunaan Context API memungkinkan state dapat digunakan secara global oleh banyak component.

### 4. Menambah Produk Ke Keranjang
Produk yang di tampilkan di halaman website dapat ditambahkan ke dalam data shopping cart dengan mengclick button (icon keranjang belanja) yang ada didalam component card. Saat user mengclick button tersebut, maka akan terjadi proses berikut :
* Memvalidasi apakah produk sudah berada didalam state `cart`
* Jika sudah ada, maka aplikasi akan memunculkan sebuah toast notification yang memberikan pesan bahwa produk sudah berada didalam shopping cart. Dan produk tidak akan ditambahkan ke dalam shopping cart
* Namun, jika produk belum ada, maka data produk akan ditambahkan ke dalam local storage melalui perantara method `addProduct` yang disediakan oleh `CartProvider`. Dan aplikasi akan memunculkan sebuah toast notification yang memberikan pesan bahwa produk berhasil ditambahkan ke dalam shopping cart

### 5. Hapus Produk Dari Keranjang
Data produk di shopping cart bisa dihapus. Caranya, user bisa menglcick tombol delete (icon tempat sampah) pada component card. Saat tombol di click, produk akan dihapus dari dalam local storage melalui perantara method `deleteProduct()` yang disediakan oleh `CartProvider`. Dan aplikasi akan memunculkan sebuah toast notification yang memberikan pesan bahwa produk berhasil dihapus dari shopping cart

### 6. Mengubah Jumlah Produk
Untuk merubah jumlah produk, user bisa mengclick tombol plus (+) untuk menambah jumlah produk atau tombol minus (-) untuk mengurangi jumlah produk.
* Jika tombol plus di click, maka method `increaseProductQuantity` yang disediakan oleh `CartProvider` akan dijalankan dan akan menambah jumlah produk sebanyak 1.
* Jika tombol minus di click, maka method `decreaseProductQuantity` yang disediakan oleh `CartProvider` akan dijalankan dan akan mengurangi jumlah produk sebanyak 1.

### 7. Checkout
Semua pesanan bisa di checkout dengan mengclick tombol checkout. Nanti, akan muncul sebuah modal yang berisikan semua data pesanan (dalam bentuk table) serta total harga dari semua pesanan. Setelahnya, terdapat dua button, yaitu button cancel dan button confirm order.
* Jika tombol cancel di click, maka modal akan ditutup dan proses checkout dibatalkan
* Jika tombol confirm order di click, maka akan muncul modal baru yang memberikan pesan bahwa proses checkout telah berhasil. Dan saat modal kedua di close, maka semua data pesanan didalam shopping cart akan di reset melalui method `clearCart` yang disediakan oleh `CartProvider`.

# Instruksi Setup Project
**NOTE :** Pastikan sistem operasi anda sudah terinstall Node.js dan NPM. Cara mengeceknya :
```bash 
node --version
```
```bash
npm --version
```

### 1. Clone Repository
```bash 
git clone https://github.com/GemahGhozali/posbites.git
```

### 2. Masuk Ke Dalam Directory Project
```bash
cd posbites
```

### 3. Install Dependency Project
```bash
npm install
```

### 4. Jalankan Aplikasi Secara Local
```bash
npm run dev
```

### 5. Build Project Untuk Production
```bash
npm run build
```

# Dukungan AI Pada Capstone Project
### 1. Membantu Proses Slicing Design UI Aplikasi
AI dimanfaatkan untuk membantu membuat komponen UI berdasarkan perintah (prompt) yang diberikan. AI akan secara otomatis menyusun struktur elemen HTML sekaligus menuliskan utility class TailwindCSS yang relevan untuk styling, sehingga mempercepat proses slicing desain ke dalam kode secara efisien.

### 2. Membantu Brainstorming Pada Proses Developement
Dengan memberikan perintah (prompt) dengan konteks yang baik dan jelas, AI dapat membantu memberikan solusi yang relevan dan akurat berdasarkan skenario permasalahan yang dihadapi. Selain itu, AI juga dapat memberikan saran dan alternatif implementasi kode yang telah disesuaikan dengan best practices dan pola desain yang umum digunakan. Hal ini dapat mempercepat proses decision making pada saat proses development

### 3. Membantu pembuatan dokumentasi
AI berperan dalam merancang dan menyusun dokumentasi capstone project. Hal ini dapat memastikan dokumentasi dapat tersusun secara rapih, terstruktur dan sistematis

### 4. Membantu proses debugging
AI mempermudah proses penanganan error yang muncul pada aplikasi. Dengan memberikan potongan kode dan pesan error yang terjadi, AI dapat membantu menemukan kemungkinan sumber kesalahan dan menyarankan cara penyelesaiannya. Selain itu, AI juga mampu menganalisis struktur logika program yang berpotensi munculnya bug yang tidak terlihat secara langsung
