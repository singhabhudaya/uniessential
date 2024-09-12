const products = [
    {
        name: 'Data Cable Set Kit',
        description: 'A versatile data cable set kit that includes multiple connectors for all your devices. Perfect for travel and everyday use.',
        imageUrl: 'https://i.imgur.com/0f3KGnZ.jpeg',
        price: '₹ 299',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20data%20cable%20set%20kit!'
    },
    {
        name: 'Mini Portable Printer',
        description: 'A compact printer for sticky notes, diagrams, and stickers. Print your ideas instantly!',
        imageUrl: 'https://i.imgur.com/tP3r79p.jpeg',
        price: '₹ 1199',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20mini%20portable%20printer!'
    },
    {
        name: 'Rechargeable Type-C Mini Packet Sealer',
        description: 'Seal opened food packets with ease. Compact and portable with rechargeable Type-C port.',
        imageUrl: 'https://i.imgur.com/2AlJdot.jpeg',
        price: '₹ 499',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20rechargeable%20type-c%20mini%20packet%20sealer!'
    },
    {
        name: 'Wireless Magsafe See Through Powerbank',
        description: 'Magsafe powerbank with inbuilt all-type cables.',
        imageUrl: 'https://i.imgur.com/0NiuS3q.jpeg',
        price: '₹ 1249',
        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20see%20through%20magsafe%20powerbank!'
    },
    //{
   //     name: 'Portable Projector powerbank powered',
//        description: 'Binge watch your favourite shows anywhere.',
//        imageUrl: 'https://i.imgur.com/edLTZB0.jpeg',
//        price: '₹ 1499',
//        buyUrl: 'https://wa.me/+918400279228?text=I%20would%20like%20to%20buy%20your%20portable%20projector!'
//    }
];
// Modified products array
];

// Load cart from local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add products to cart
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Store updated cart
    alert(`${product.name} has been added to your cart!`);
}

// Dynamically render products
const productList = document.getElementById('productList');
if (productList) {
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <button class="add-to-cart">Add to Cart</button>
            <a href="${product.buyUrl}" target="_blank" aria-label="Buy ${product.name}">
                <button class="buy-now">Buy Now</button>
            </a>
        `;

        // Add event listener for the "Add to Cart" button
        productItem.querySelector('.add-to-cart').addEventListener('click', () => addToCart(product));

        fragment.appendChild(productItem);
    });

    productList.appendChild(fragment);
}

// Open and close nav
function openNav() { document.getElementById("sideMenu").style.width = "250px"; }
function closeNav() { document.getElementById("sideMenu").style.width = "0"; }


const productList = document.getElementById('productList');

if (productList) {
    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';

        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" loading="lazy">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="${product.buyUrl}" target="_blank" aria-label="Buy ${product.name}">
                <button class="buy-now">Buy Now</button>
            </a>
        `;

        fragment.appendChild(productItem);
    });

    productList.appendChild(fragment);
} else {
    console.error('Element with id "productList" not found');
}

function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}
