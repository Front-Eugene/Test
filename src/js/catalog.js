const products = [
    { name: "iPhone 16", price: 59, image: "src/img/product-1.png" },
    { name: "iPhone 16 Pro", price: 67, image: "src/img/product-2.png" },
    { name: "iPhone 16 Pro Max", price: 84, image: "src/img/product-3.png" },
];

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Цена: ${product.price} BYN/мес</p>
    `;
    return card;
}

function renderProducts() {
    const container = document.querySelector('.catalog-wrap');
    container.innerHTML = '';
    
    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

renderProducts();