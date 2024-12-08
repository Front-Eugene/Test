const reviews = [
    { name: "Иван", 
      review: "Очень рад покупке и возможности оформить на неё рассрочку, так как купить одним платежом не было возможности.", 
      image: "src/img/face-1.png" },
      
    { name: "Дарья", 
      review: "Очень рада покупке и возможности оформить на неё рассрочку, так как купить одним платежом не было возможности.", 
      image: "src/img/face-2.png" },

    { name: "Мария", 
      review: "Очень рада покупке и возможности оформить на неё рассрочку, так как купить одним платежом не было возможности.", 
      image: "src/img/face-3.png" },
];

function createReviews(product) {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `
        <div class="img-wrap">
            <img src="${product.image}" alt="${product.name}">
        </div>
        <div>
            <h3>${product.name}</h3>
            <p>${product.review}</p>
        </div>
    `;
    return card;
}

function renderReviews() {
    const container = document.querySelector('.reviews-wrap');
    container.innerHTML = '';
    
    reviews.forEach(product => {
        const card = createReviews(product);
        container.appendChild(card);
    });
}

renderReviews();