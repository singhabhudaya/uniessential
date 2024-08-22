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
        name: 'Portable Projector powerbank powered ',
        description: 'Binge watch your favourite shows anywhere',
        imageUrl: 'https://i.imgur.com/edLTZB0.jpeg',
    },
    {
        name: 'Wireless Magsafe see through Powerbank',
        description: 'Magsafe powerbank with inbuilt all type cables',
        imageUrl: 'https://i.imgur.com/0NiuS3q.jpeg',
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
