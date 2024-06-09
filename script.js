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

function nextSlide(button) {
    const carousel = button.closest('.carousel');
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex + 1) % items.length;
    items[activeIndex].classList.add('active');
    inner.style.transform = `translateX(-${activeIndex * 100}%)`;
}

function prevSlide(button) {
    const carousel = button.closest('.carousel');
    const inner = carousel.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    let activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    items[activeIndex].classList.remove('active');
    activeIndex = (activeIndex - 1 + items.length) % items.length;
    items[activeIndex].classList.add('active');
    inner.style.transform = `translateX(-${activeIndex * 100}%)`;
}