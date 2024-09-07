const products = [
    {
        name: 'Data Cable Set Kit',
        description: 'A versatile data cable set kit that includes multiple connectors for all your devices. Perfect for travel and everyday use.',
        imageUrl: 'https://i.imgur.com/2iF8uYU.jpeg',
        price: '₹ 249',
        buyUrl: 'https://yourstore.com/product/data-cable-set-kit'
    },
    {
        name: 'Universal Adapter with built-in Powerbank',
        description: 'Charge your devices with any outlet or on the move.',
        imageUrl: 'https://i.imgur.com/wSz3TDE.jpeg',
        price: '₹ 1249',
        buyUrl: 'https://yourstore.com/product/universal-adapter-powerbank'
    },
    {
        name: 'Wireless Gamepad X3',
        description: 'Game on with the X3 gamepad with phone holder.',
        imageUrl: 'https://i.imgur.com/XQvwSz9.png',
        price: '₹ 649',
        buyUrl: 'https://yourstore.com/product/wireless-gamepad-x3'
    },
    {
        name: 'Portable Projector powerbank powered',
        description: 'Binge watch your favourite shows anywhere.',
        imageUrl: 'https://i.imgur.com/edLTZB0.jpeg',
        price: '₹ 1499',
        buyUrl: 'https://yourstore.com/product/portable-projector'
    },
    {
        name: 'Wireless Magsafe See Through Powerbank',
        description: 'Magsafe powerbank with inbuilt all-type cables.',
        imageUrl: 'https://i.imgur.com/0NiuS3q.jpeg',
        price: '₹ 1249',
        buyUrl: 'https://yourstore.com/product/wireless-magsafe-powerbank'
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
        <a href="${product.buyUrl}" target="_blank">
            <button class="buy-now">Buy Now</button>
        </a>
    `;

    productList.appendChild(productItem);
});
