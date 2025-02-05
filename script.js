const products = [
    {
        id: 1,
        brand: "Roadster",
        name: "Men's Black T-Shirt",
        price: "Rs 699",
        image: "https://rukminim2.flixcart.com/image/850/1000/kflftzk0-0/shirt/x/s/i/38-9951971-roadster-original-imafwyf2gxdgfp65.jpeg?q=90&crop=false"
    },
    {
        id: 2,
        brand: "Nike",
        name: "Nike Air Max Shoes",
        price: "Rs 7999",
        image: "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f6ab642d-c6d0-4a99-b2d8-b582cc99576f/NIKE+AIR+MAX+1+%2786+OG.png"
    },
    {
        id: 3,
        brand: "Adidas",
        name: "Adidas Ultraboost Sneakers",
        price: "Rs 9999",
        image: "https://extrabutterny.in/cdn/shop/files/IE7192-1.jpg?v=1694187873"
    },
    {
        id: 4,
        brand: "Puma",
        name: "Puma Women's Running Shoes",
        price: "Rs 3499",
        image: "https://images.puma.net/images/379581/02/sv01/fnd/IND/w/800/h/800/"
    },
    {
        id: 5,
        brand: "Levi's",
        name: "Men's Classic Blue Jeans",
        price: "Rs 2599",
        image: "https://m.media-amazon.com/images/I/71+yca0lwaL._AC_UY1100_.jpg"
    },
    {
        id: 6,  
        brand: "H&M",
        name: "H&M Men's Casual Shirt",
        price: "Rs 1499",
        image: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2Ffb%2F86fb126ce62798ced3cfb3f06f8485eff4c58e3e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]"
    },
    {
        id: 7,
        brand: "Apple",
        name: "Apple Watch Series 8",
        price: "Rs 45900",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HQWT2?wid=4000&hei=4000&fmt=jpeg&qlt=95&.v=1681150922686"
    },
    {
        id: 8,
        brand: "Samsung",
        name: "Samsung Galaxy s24 Ultra",
        price: "Rs 129999",
        image: "https://media.takealot.com/covers_images/fd2236e6527b4ed09da3e0165ee305d5/s-pdpxl.file"
    },
    {
        id: 9,
        brand: "JBL",
        name: "JBL Noise Cancelling Headphones",
        price: "Rs 5999",
        image: "https://files.vplak.com/500-images/jbl/CLUB-950NC/black/image-1.jpg"
    },
    {
        id: 10,
        brand: "Dell",
        name: "Dell G 16 Gaming Laptop",
        price: "Rs 99999",
        image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/white/notebook-g16-7630-nt-white-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000"
    },
    {
        id: 11,
        brand: "Canon",
        name: "Canon EOS R5 Camera",
        price: "Rs 289990",
        image: "https://cdn.cinemacenter.in/image/cache/catalog/images2/0061659_canon-eos-r5-mark-ii-mirrorless-camera-with-24-105mm-f4-lens_500-500x500.png.webp"
    },
    {
        id: 12,
        brand: "Samsung",
        name: "Samsung Galaxy Watch",
        price: "Rs 34999",
        image: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch-ultra-l705-sm-l705fdaains-542169127?$650_519_PNG$"
    }
];

function renderProducts(productsList) {
    const container = document.getElementById('productsContainer');
    
    productsList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        container.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

document.querySelector('.search input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) || 
        product.brand.toLowerCase().includes(searchTerm)
    );
    
    document.getElementById('productsContainer').innerHTML = '';
    renderProducts(filteredProducts);
});
