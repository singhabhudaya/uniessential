const products = [
    {
        name: 'Data Cable Set Kit',
        description: 'A versatile data cable set kit that includes multiple connectors for all your devices. Perfect for travel and everyday use.',
        imageUrl: 'https://i.imgur.com/2iF8uYU.jpeg',
    },
    {
        name: 'Universal Adapter with built-in Powerbank',
        description: 'Charge your devices with walk outlet or on the move.',
        imageUrl: 'https://i.imgur.com/wSz3TDE.jpeg',
    },
    {
        name: 'Wireless Gamepad X3',
        description: 'Game on!, with X3 gamepad with phone holder.',
        imageUrl: 'https://i.imgur.com/XQvwSz9.png',
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
