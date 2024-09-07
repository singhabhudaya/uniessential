const products = [
    {
        name: 'Data Cable Set Kit',
        description: 'A versatile data cable set kit that includes multiple connectors for all your devices. Perfect for travel and everyday use.',
        imageUrl: 'https://i.imgur.com/2iF8uYU.jpeg',
        price: '₹ 249',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20data%20cable%20set%20kit!'
    },
    {
        name: 'Universal Adapter with built-in Powerbank',
        description: 'Charge your devices with any outlet or on the move.',
        imageUrl: 'https://i.imgur.com/wSz3TDE.jpeg',
        price: '₹ 1249',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20universal%20adapter%20with%20powerbank!'
    },
    {
        name: 'Wireless Gamepad X3',
        description: 'Game on with the X3 gamepad with phone holder.',
        imageUrl: 'https://i.imgur.com/XQvwSz9.png',
        price: '₹ 649',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20wireless%20gamepad%20with%20phone%20holder!'
    },
    {
        name: 'Portable Projector powerbank powered',
        description: 'Binge watch your favourite shows anywhere.',
        imageUrl: 'https://i.imgur.com/edLTZB0.jpeg',
        price: '₹ 1499',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20portable%20projector!'
    },
    {
        name: 'Wireless Magsafe See Through Powerbank',
        description: 'Magsafe powerbank with inbuilt all-type cables.',
        imageUrl: 'https://i.imgur.com/0NiuS3q.jpeg',
        price: '₹ 1249',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20see%20through%20magsafe%20powerbank!'
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
