function searchProducts(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterProducts() {
    const priceFilters = document.querySelectorAll('input[name="preco"]:checked');
    const typeFilters = document.querySelectorAll('input[name="produto"]:checked');

    const priceRanges = Array.from(priceFilters).map(input => input.value.split('-').map(Number));
    const types = Array.from(typeFilters).map(input => input.value);

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        const type = product.getAttribute('data-type');

        const matchesPrice = priceRanges.length === 0 || priceRanges.some(([min, max]) => price >= min && price <= max);
        const matchesType = types.length === 0 || types.includes(type);

        if (matchesPrice && matchesType) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.querySelectorAll('input[name="preco"], input[name="produto"]').forEach(input => {
    input.addEventListener('change', filterProducts);
});

function prevSlide(button) {
    let carousel = button.closest('.carousel');
    let activeSlide = carousel.querySelector('.carousel-item.active');
    let prevSlide = activeSlide.previousElementSibling;

    if (prevSlide && prevSlide.classList.contains('carousel-item')) {
        activeSlide.classList.remove('active');
        prevSlide.classList.add('active');
    } else {
        activeSlide.classList.remove('active');
        carousel.querySelector('.carousel-item:last-child').classList.add('active');
    }
}

function nextSlide(button) {
    let carousel = button.closest('.carousel');
    let activeSlide = carousel.querySelector('.carousel-item.active');
    let nextSlide = activeSlide.nextElementSibling;


    if (nextSlide && nextSlide.classList.contains('carousel-item')) {
        activeSlide.classList.remove('active');
        nextSlide.classList.add('active');
    } else {
        activeSlide.classList.remove('active');
        carousel.querySelector('.carousel-item:first-child').classList.add('active');
    }
}

document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'block';
});

document.querySelectorAll('.close').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('cartModal').style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = 'none';
    }
}


function addToCart(productName, productPrice) {
    let cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsContainer.innerHTML += `<div>
            <p>${item.name} (x${item.quantity})</p>
            <p>R$${itemTotal.toFixed(2)}</p>
        </div>`;
    });
    document.getElementById('cartTotal').innerText = total.toFixed(2);
    document.querySelector('.cart-button').innerText = `Carrinho (${cart.length})`;
}

function checkout() {
    alert('Compra finalizada!');
    cart = [];
    updateCart();
}

document.querySelector('.cart-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('cartModal').style.display = 'block';
});

// Script for Carousel
let currentSlide = 0;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-item');
    currentSlide = (slideIndex + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentSlide * 100}%)`;
    });
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Automatic slide
setInterval(nextSlide, 5000);

// Script for Product Search
function searchProducts(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const name = product.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Script for Filtering Products
function filterProducts() {
    const priceFilters = document.querySelectorAll('input[name="preco"]:checked');
    const typeFilters = document.querySelectorAll('input[name="produto"]:checked');

    const priceRanges = Array.from(priceFilters).map(input => input.value.split('-').map(Number));
    const types = Array.from(typeFilters).map(input => input.value);

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const price = parseFloat(product.getAttribute('data-price'));
        const type = product.getAttribute('data-type');

        const matchesPrice = priceRanges.length === 0 || priceRanges.some(([min, max]) => price >= min && price <= max);
        const matchesType = types.length === 0 || types.includes(type);

        if (matchesPrice && matchesType) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

document.querySelectorAll('input[name="preco"], input[name="produto"]').forEach(input => {
    input.addEventListener('change', filterProducts);
});

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function closeCartModal() {
    document.getElementById('cartModal').style.display = 'none';
}

function addToCart(productName, productPrice) {
    let cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    let cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let itemTotal = item.price * item.quantity;
        total += itemTotal;
        cartItemsContainer.innerHTML += `<div>
            <p>${item.name} (x${item.quantity})</p>
            <p>R$${itemTotal.toFixed(2)}</p>
        </div>`;
    });
    document.getElementById('cartTotal').innerText = total.toFixed(2);
    document.querySelector('.cart-button').innerText = `Carrinho (${cart.length})`;
}

function checkout() {
    alert('Compra finalizada!');
    cart = [];
    updateCart();
}

document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'block';
});

document.querySelectorAll('.close').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('loginModal').style.display = 'none';
        document.getElementById('cartModal').style.display = 'none';
    });
});

window.onclick = function(event) {
    if (event.target == document.getElementById('loginModal')) {
        document.getElementById('loginModal').style.display = 'none';
    }
    if (event.target == document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = 'none';
    }
}

let cart = [];

items[activeIndex].classList.remove('active');
activeIndex = (activeIndex - 1 + items.length) % items.length;
items[activeIndex].classList.add('active');
inner.style.transform = `translateX(-${activeIndex * 100}%)`;