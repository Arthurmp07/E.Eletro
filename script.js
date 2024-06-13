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


function searchProducts(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function filterProducts() {
    const price30 = document.getElementById('price30').checked;
    const price60 = document.getElementById('price60').checked;
    const price150 = document.getElementById('price150').checked;
    const typeGeladeira = document.getElementById('typeGeladeira').checked;
    const typeMicroondas = document.getElementById('typeMicroondas').checked;
    const typeFogao = document.getElementById('typeFogao').checked;

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productPrice = parseFloat(product.getAttribute('data-price'));
        const productType = product.getAttribute('data-type');

        let priceMatch = false;
        let typeMatch = false;

        if ((price30 && productPrice <= 30) ||
            (price60 && productPrice <= 60) ||
            (price150 && productPrice <= 150)) {
            priceMatch = true;
        }

        if ((typeGeladeira && productType === 'geladeira') ||
            (typeMicroondas && productType === 'microondas') ||
            (typeFogao && productType === 'fogao')) {
            typeMatch = true;
        }

        if (priceMatch && typeMatch) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartModal = document.getElementById('cartModal');
    const cartItemsContainer = cartModal.querySelector('#cartItems');
    cartItemsContainer.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = `${item.name} - R$${item.price}`;
        cartItemsContainer.appendChild(itemElement);
        total += item.price;
    });

    document.getElementById('cartTotal').textContent = total.toFixed(2);
    document.querySelector('.cart-button').textContent = `Carrinho (${cart.length})`;
}

function finalizePurchase() {
    alert('Compra finalizada com sucesso!');
    cart = [];
    updateCartDisplay();
    closeModal();
}

function toggleAccessibility() {
    document.body.classList.toggle('accessibility-mode');
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
}

document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.querySelectorAll('.user-actions a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModal = document.querySelector(link.getAttribute('href'));
        targetModal.style.display = 'block';
    });
});

function prevSlide(button) {
    const carousel = button.parentElement;
    const inner = carousel.querySelector('.carousel-inner');
    const items = inner.querySelectorAll('.carousel-item');
    const active = inner.querySelector('.carousel-item.active');

    let index = Array.from(items).indexOf(active);
    index = (index > 0) ? index - 1 : items.length - 1;

    active.classList.remove('active');
    items[index].classList.add('active');
}

function nextSlide(button) {
    const carousel = button.parentElement;
    const inner = carousel.querySelector('.carousel-inner');
    const items = inner.querySelectorAll('.carousel-item');
    const active = inner.querySelector('.carousel-item.active');

    let index = Array.from(items).indexOf(active);
    index = (index < items.length - 1) ? index + 1 : 0;

    active.classList.remove('active');
    items[index].classList.add('active');
}