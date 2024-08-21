const products = [
    {
        name: 'Data Cable Set Kit',
        description: 'A versatile data cable set kit that includes multiple connectors for all your devices. Perfect for travel and everyday use.',
        imageUrl: 'https://imgur.com/a/wdYj9xT',
    },
    {
        name: 'Eco-friendly Water Bottle',
        description: 'Stay hydrated with our eco-friendly, reusable water bottle.',
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Portable Phone Charger',
        description: 'Keep your devices charged on the go with our compact charger.',
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Noise-Cancelling Headphones',
        description: 'Enjoy your music in peace with our noise-cancelling headphones.',
        imageUrl: 'https://via.placeholder.com/300x200',
    },
    {
        name: 'Minimalist Wallet',
        description: 'Slim down your pocket with our minimalist leather wallet.',
        imageUrl: 'https://via.placeholder.com/300x200',
    },
];

const productList = document.getElementById('productList');

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <button class="buy-now">Buy Now</button>
    `;

    productList.appendChild(productItem);
});
