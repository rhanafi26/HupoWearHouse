const products = {
    1: {
        name: "Kaos Oversize Hupo",
        price: "Rp 120.000",
        desc: "Kaos oversize premium dengan bahan katun combed 24s yang nyaman dipakai sehari-hari. Tersedia dalam berbagai warna. Desain simple dan elegan cocok untuk berbagai kesempatan.",
        image: "WHITE-w-BG.png",
        waLink: "https://wa.me/6285755172096?text=Saya%20ingin%20memesan%20Kaos%20Oversize%20Hupo",
        shopeeLink: "https://shopee.co.id/hupowearhouse/kaos-oversize-hupo",
        tokopediaLink: "https://www.tokopedia.com/hupowearhouse/kaos-oversize-hupo"
    },
    2: {
        name: "Work Shirt",
        price: "Rp 122.000",
        desc: "Work Shirt premiun dengan bahan nagata drill yang memiliki grade A dingin dan nyaman. Cocok untuk kuliah maupun style apalagi untuk kerja.",
        image: "produk2.jpg",
        waLink: "https://wa.me/6285755172096?text=Saya%20ingin%20memesan%20Hoodie%20Hupo%20Exclusive",
        shopeeLink: "https://shopee.co.id/hupowearhouse/hoodie-hupo-exclusive",
        tokopediaLink: "https://www.tokopedia.com/hupowearhouse/hoodie-hupo-exclusive"
    },
    3: {
        name: "Celana Cargo Hupo",
        price: "Rp 180.000",
        desc: "Pakaian Dinas Harian yang sangat nyaman digunakan untuk kegiatan didalam ruangan maupun luar ruangan, desain premiun dengan harga yang sangat amat bersahabat untuk anda.",
        image: "20250420_165259(1).png",
        waLink: "https://wa.me/6285755172096?text=Saya%20ingin%20memesan%20Celana%20Cargo%20Hupo",
        shopeeLink: "https://shopee.co.id/hupowearhouse/celana-cargo-hupo",
        tokopediaLink: "https://www.tokopedia.com/hupowearhouse/celana-cargo-hupo"
    }
};

// Ketika modal ditampilkan
document.getElementById('productModal').addEventListener('show.bs.modal', function (event) {
    const button = event.relatedTarget;
    const productId = button.getAttribute('data-product');
    const product = products[productId];
    
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductPrice').textContent = product.price;
    document.getElementById('modalProductDesc').textContent = product.desc;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('waButton').href = product.waLink;
    document.getElementById('shopeeButton').href = product.shopeeLink;
    document.getElementById('tokopediaButton').href = product.tokopediaLink;
});
