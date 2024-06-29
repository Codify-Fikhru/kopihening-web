window.addEventListener("DOMContentLoaded", () => {
	// Semua script di yang ada dalam kurung dijalankan setelah tampilan HTML dan CSS muncul di halaman
	// Memilih elemen dengan class navbar menggunakan querySelector
	// querySelector memilih elemen dengan cara yang sama seperti CSS Selector
	// jika diawali dengan tanda ".", artinya memilih elemen dengan class
	// contoh ".navbar" berarti elemen yang menggunakan class="navbar" (Lihat file HTML untuk contoh lebih jelas)
	const navbar = document.querySelector(".navbar")
	window.addEventListener("scroll", function () {
		// Semua script di yang ada dalam kurung dijalankan saat halaman di scroll
		const value = window.scrollY // Mengambil nilai scrollY dari halaman (berapa piksel halaman di scroll dari atas)

		// Menggunakan shorthand if statement untuk memberi class tambahan pada navbar
		// Jika value lebih dari 0, tambahkan class active. Jika value kurang dari 0, hapus class active
		return value > 0 ? navbar.classList.add("active") : navbar.classList.remove("active")
	})

	const navbarListGroup = document.querySelector(".navbar-list-group")
	const navbarButton = document.querySelector("#hamburger")
	navbarButton.addEventListener("click", () => {
		// Semua script di yang ada dalam kurung dijalankan saat tombol hamburger (tiga garis) diklik
		navbarListGroup.classList.toggle("active") // memberi class active pada navbar-list-group jika class active tidak ada dalam navbar-list-group. Jika ada, maka hilangkan class active tersebut
	})

	// Menambahkan event listener untuk menangani klik pada dokumen
	document.addEventListener("click", (event) => {
		// Jika klik tidak mengenai navbarButton dan navbar, maka sembunyikan navbarListGroup
		if (!navbarButton.contains(event.target) && !navbar.contains(event.target)) {
			navbarListGroup.classList.remove("active")
		}
	})

	// Mengambil semua elemen dengan kelas "modal"
	const modals = document.querySelectorAll(".modal")
	// Mengambil semua elemen dengan kelas "btn-modal"
	const btnModal = document.querySelectorAll(".btn-modal")
	// Menambahkan event listener untuk setiap tombol modal
	btnModal.forEach((btn) => {
		btn.addEventListener("click", function () {
			// Mengambil data atribut "modal" dari tombol yang ditekan
			const id = this.dataset.modal.trim().toLowerCase()
			// Memanggil fungsi untuk menampilkan dan menyembunyikan modal
			showAndHideModal(id)
		})
	})

	// Fungsi untuk menampilkan dan menyembunyikan modal berdasarkan ID
	function showAndHideModal(id) {
		// Iterasi melalui semua elemen modal
		modals.forEach((modal) => {
			// Mengambil data atribut "id" dari modal
			const data = modal.dataset.id.trim().toLowerCase()
			// Jika ID modal sama dengan ID yang diambil dari tombol, toggle kelas "active"
			if (data === id) return modal.classList.toggle("active")
			// Jika ID tidak sama, sembunyikan modal dengan menghapus kelas "active"
			return modal.classList.remove("active")
		})
	}

	// Mengambil semua elemen dengan kelas "btn-modal-close"
	const btnModalClose = document.querySelectorAll(".btn-modal-close")
	// Menambahkan event listener untuk setiap tombol penutup modal
	btnModalClose.forEach((btnClose) => {
		btnClose.addEventListener("click", () => {
			// Menyembunyikan semua modal dengan menghapus kelas "active"
			modals.forEach((modal) => modal.classList.remove("active"))
		})
	})

	// List data produk
	const dataProduct = [
		{
			image: "waffle.jpg",
			name: "waffle",
			price: 20000,
			description: "Waffle adalah kue yang dikenal dengan tekstur ringan, renyah di luar dan lembut di dalam, serta permukaan khas yang berbentuk kotak-kotak atau grid.",
		},
		{
			image: "cookies.jpg",
			name: "Cookies",
			price: 20000,
			description:
				"Cookies adalah kue kecil yang terkenal dengan rasa manis dan tekstur yang renyah atau lembut. Mereka adalah camilan populer yang disukai oleh banyak orang di seluruh dunia karena variasinya yang tak terbatas dan kemudahan pembuatannya.",
		},
		{
			image: "kroisan.jpg",
			name: "Croissant",
			price: 40000,
			description:
				"Croissant adalah roti panggang berbentuk bulan sabit yang terkenal dengan lapisan-lapisan renyah dan lembut di dalamnya. Kue ini adalah salah satu kue khas Prancis yang paling ikonik dan telah menjadi favorit di seluruh dunia.",
		},
		{
			image: "Coffe Latte.jpg",
			name: "Coffe Latte",
			price: 30000,
			description:
				"Coffee Latte, sering disebut hanya sebagai latte, adalah minuman kopi berbasis espresso yang terkenal dengan tekstur lembut dan rasanya yang kaya namun halus.",
		},
		{
			image: "ice coffe.jpg",
			name: "Ice Coffe",
			price: 25000,
			description: "Iced Coffee biasanya disajikan dalam gelas tinggi dengan banyak es batu untuk menjaga suhu tetap dingin.",
		},
		{
			image: "Americano.jpg",
			name: "Americano",
			price: 30000,
			description:
				"Americano adalah kopi yang dibuat dengan menambahkan air panas ke shot espresso. Kopi ini dikenal karena rasanya yang halus dan lebih ringan dibandingkan espresso murni.",
		},
	]

	// Mengambil elemen dengan kelas "card-container"
	const cardContainer = document.querySelector(".card-container")

	// Fungsi untuk menampilkan semua data produk
	function showAllDataProduct() {
		// Iterasi melalui setiap data produk dalam array dataProduct
		dataProduct.forEach((data) => {
			// Memanggil fungsi renderElementProduct untuk membuat elemen HTML produk
			const result = renderElementProduct(data)
			// Menyisipkan elemen HTML produk ke dalam cardContainer
			cardContainer.insertAdjacentHTML("afterbegin", result)
		})
	}

	// Memanggil fungsi untuk menampilkan semua data produk
	showAllDataProduct()

	// Fungsi untuk membuat elemen HTML produk
	function renderElementProduct({ image, name, price, description }) {
		// Memformat harga menggunakan format mata uang Indonesia (IDR)
		const formattedHarga = new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			maximumFractionDigits: 0,
		})

		// Mengembalikan template string yang berisi elemen HTML produk
		return `
        <div class="nk__card">
            <div class="nk__card-header">
                <img class="gambar-produk" src="images/${image}" alt="${name}">
                <div class="nk__card-header-text">
                    <h4 class="nama-produk">${name}</h4>
                    <p>${description}</p>
                </div>
            </div>
            <div class="nk__card-footer">
                <span class="produk_price" style="display: none;">${price}</span>
                <h5 class="harga-produk">${formattedHarga.format(price)}</h5>
                <button type="button" class="button button-cart">Add to cart</button>
            </div>
        </div>
    `
	}

	// Data Keranjang Belanjaan
	let tasks = []

	// Mengambil elemen yang diperlukan dari DOM
	const price = document.querySelector(".price")
	const boxContainer = document.querySelector(".box-container")

	// Menambahkan event listener untuk menangani klik pada jendela
	window.addEventListener("click", (event) => {
		// Jika klik terjadi pada tombol dengan kelas "button-cart"
		if (event.target.classList.contains("button-cart")) {
			// Mendapatkan elemen card_footer dan card dari tombol yang diklik
			const card_footer = event.target.parentElement
			const card = card_footer.parentElement

			// Membuat objek item yang berisi informasi produk
			const item = {
				image: card.querySelector(".gambar-produk").src,
				name: setName(card.querySelector(".nama-produk").textContent),
				price: parseFloat(card.querySelector(".produk_price").textContent),
			}

			// Menambahkan produk ke keranjang belanja
			addProductToCart(item)
		}
	})

	// Fungsi untuk menambahkan produk ke keranjang belanja
	function addProductToCart(item) {
		// Menambahkan item ke awal array tasks
		tasks.unshift(item)

		// Menyimpan data keranjang belanja ke localStorage
		saveToLocalstorage()

		// Menampilkan produk di UI
		showUI(item)

		// Menampilkan alert bahwa produk sudah dimasukkan ke keranjang belanja
		alerts("success", "Produk sudah dimasukkan ke dalam keranjang belanja")

		// Mengupdate total biaya
		updateTotalCost()

		// Memuat data
		loadData()
	}

	// Fungsi untuk memotong nama produk jika terlalu panjang
	function setName(param) {
		return param.length > 20 ? `${param.substring(0, 20)}...` : param
	}

	// Fungsi untuk menyimpan data keranjang belanja ke localStorage
	function saveToLocalstorage() {
		localStorage.setItem("shopping-cart", JSON.stringify(tasks))
	}

	// Fungsi untuk menampilkan produk di UI
	function showUI(data, index = 0) {
		const result = renderElementCart(data, index)
		boxContainer.insertAdjacentHTML("beforeend", result)
	}

	// Fungsi untuk membuat elemen HTML produk di keranjang belanja
	function renderElementCart({ image, name, price }, index) {
		return `
        <div class="box">
            <div class="box-wrapper">
                <img src="${image}" alt="gambar produk" class="image">
                <div class="text-wrapper">
                    <h4>${name}</h4>
                    <span>${price}</span>
                </div>
            </div>
            <i class="fa-solid fa-trash-alt btn-delete" data-id="${index}"></i>
        </div>
    `
	}

	// Fungsi untuk menampilkan alert menggunakan Sweet Alert 2
	function alerts(type, text) {
		swal.fire({
			icon: type,
			title: "Alert",
			text: text,
		})
	}

	function loadData() {
		boxContainer.innerHTML = ""

		const data = localStorage.getItem("shopping-cart")
		tasks = data ? JSON.parse(data) : []

		tasks.forEach((task, index) => {
			showUI(task, index)

			updateTotalCost()
		})
	}

	// Memuat data dari localStorage atau sumber lainnya
	loadData()

	// Fungsi untuk mengupdate total biaya
	function updateTotalCost() {
		// Menghitung total harga dari semua item dalam tasks
		const result = tasks.map((task) => task.price).reduce((total, num) => (total += num), 0)
		// Menampilkan total harga pada elemen price
		price.textContent = result
	}

	// Menambahkan event listener untuk menangani klik pada jendela
	window.addEventListener("click", (event) => {
		// Jika klik terjadi pada tombol dengan kelas "btn-delete"
		if (event.target.classList.contains("btn-delete")) {
			// Mendapatkan data-id dari tombol yang diklik
			const id = event.target.dataset.id
			// Memanggil fungsi deleteData untuk menghapus item dari tasks
			deleteData(id)
		}
	})

	// Fungsi untuk menghapus data dari tasks
	function deleteData(index) {
		swal.fire({
			icon: "info",
			title: "Anda yakin?",
			text: "Anda yakin ingin menghapus data ini?",
			showCancelButton: true,
		}).then((response) => {
			// Jika pengguna mengkonfirmasi penghapusan
			if (response.isConfirmed) {
				// Menghapus item dari tasks berdasarkan index
				tasks.splice(index, 1)
				// Menyimpan perubahan ke localStorage
				saveToLocalstorage()
				// Menampilkan alert bahwa data berhasil dihapus
				alerts("success", "Data berhasil dihapus!")
				// Mengupdate total biaya
				updateTotalCost()
				// Memuat ulang data
				loadData()
			}
		})
	}

	// Mengambil elemen productContainer dan searchInput dari DOM
	const productContainer = document.querySelector(".product-container")
	const searchInput = document.querySelector(".search-input")

	// Menambahkan event listener untuk menangani pencarian
	searchInput.addEventListener("keyup", function () {
		const value = this.value.trim().toLowerCase()
		// Jika nilai pencarian kosong, bersihkan productContainer
		if (!value) return (productContainer.innerHTML = "")
		// Memanggil fungsi searchData untuk mencari produk
		searchData(value)
	})

	// Fungsi untuk mencari data produk berdasarkan nilai pencarian
	function searchData(value) {
		// Bersihkan productContainer
		productContainer.innerHTML = ""
		// Iterasi melalui dataProduct untuk menemukan produk yang cocok
		dataProduct.forEach((data) => {
			if (data.name.toLowerCase().indexOf(value) != -1 || data.price.toString().indexOf(value) != -1) {
				// Membuat elemen hasil pencarian dan menambahkannya ke productContainer
				const result = renderData(data)
				productContainer.appendChild(result)
			}
		})
	}

	// Fungsi untuk membuat elemen HTML produk hasil pencarian
	function renderData({ image, name, price }) {
		const box = create("div", "box-product")
		const images = create("img", "image")
		images.setAttribute("src", `images/${image}`)
		images.setAttribute("alt", "gambar produk")
		const wrapper = create("div", "text-wrapper")
		const h4 = create("h4", "", name, true)
		const span = create("span", "", price, true)
		wrapper.appendChild(h4)
		wrapper.appendChild(span)
		box.appendChild(images)
		box.appendChild(wrapper)
		return box
	}

	// Fungsi untuk membuat elemen HTML dengan nama, kelas, dan nilai yang diberikan
	function create(name, classname, value, show = false) {
		const element = document.createElement(name)
		element.className = !classname ? "" : classname
		if (show == true) {
			element.textContent = value
			return element
		}
		return element
	}

	// Menambahkan event listener untuk menangani klik pada jendela
	window.addEventListener("click", (event) => {
		// Jika elemen yang diklik memiliki kelas "box-product"
		if (event.target.classList.contains("box-product")) {
			// Membuat objek item yang berisi informasi produk
			const item = {
				image: event.target.querySelector(".image").src,
				name: setName(event.target.querySelector("h4").textContent),
				price: parseFloat(event.target.querySelector("span").textContent),
			}

			// Menambahkan produk ke keranjang belanja
			addProductToCart(item)
		}
	})

	// Mengambil elemen dengan kelas "button-checkout"
	const btnCheckout = document.querySelector(".button-checkout")

	// Menambahkan event listener untuk menangani klik pada tombol checkout
	btnCheckout.addEventListener("click", function () {
		// Menghitung jumlah produk di dalam boxContainer
		const product = Array.from(boxContainer.children).length

		// Jika terdapat produk di dalam keranjang
		if (product > 0) {
			// Membuat pesan konfirmasi jumlah produk dan total biaya
			const message = `Jumlah barang yang anda beli adalah sebanyak ${product} barang. Dan total biaya yang harus anda keluarkan adalah ${price.textContent}`

			// Menampilkan alert konfirmasi
			alerts("success", message)

			// Mengosongkan array tasks
			tasks = []

			// Menyimpan perubahan ke localStorage
			saveToLocalstorage()

			// Mengupdate total biaya
			updateTotalCost()

			// Memuat ulang data
			loadData()
		}
	})
})
