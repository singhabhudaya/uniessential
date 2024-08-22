const products = [
    {
        name: 'Data Cable Set Kit',
        description: 'A versatile data cable set kit that includes multiple connectors for all your devices. Perfect for travel and everyday use.',
        imageUrl: 'https://i.imgur.com/2iF8uYU.jpeg',
        price: '₹ 249'
    },
    {
        name: 'Universal Adapter with built-in Powerbank',
        description: 'Charge your devices with walk outlet or on the move.',
        imageUrl: 'https://i.imgur.com/wSz3TDE.jpeg',
        price: '₹ 1249'
    },
    {
        name: 'Wireless Gamepad X3',
        description: 'Game on!, with X3 gamepad with phone holder.',
        imageUrl: 'https://i.imgur.com/XQvwSz9.png',
        price: '₹ 649'
    },
    {
        name: 'Portable Projector powerbank powered',
        description: 'Binge watch your favourite shows anywhere.',
        imageUrl: 'https://i.imgur.com/edLTZB0.jpeg',
        price: '₹ 1499'
    },
    {
        name: 'Wireless Magsafe See Through Powerbank',
        description: 'Magsafe powerbank with inbuilt all type cables.',
        imageUrl: 'https://i.imgur.com/0NiuS3q.jpeg',
        price: '₹ 1249'
    }
];

const productList = document.getElementById('productList');

products.forEach(product => {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    productItem.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
        <button class="buy-now">Buy Now</button>
    `;

    productList.appendChild(productItem);
});
