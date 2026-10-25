const cart = {
  count: 0,
  items: []
};

const formatMoney = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);

const renderProductCard = (product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image_url}" alt="${product.name}" />
      <span class="product-badge">${product.badge || 'Popular'}</span>
    </div>
    <div class="product-body">
      <h3 class="product-title">${product.name}</h3>
      <div class="price-row">
        <span class="currency">₹</span>
        <span class="price">${Number(product.price).toFixed(0)}</span>
        <span class="old-price">${formatMoney(product.compare_price || product.price)}</span>
      </div>
      <div class="rating-row">
        <span class="stars">★★★★★</span>
        <span>${Number(product.rating || 0).toFixed(1)}</span>
        <span>(${product.review_count || 0})</span>
      </div>
      <button type="button" class="card-button">Add to cart</button>
    </div>
  `;

  const addButton = card.querySelector('.card-button');
  addButton.addEventListener('click', () => {
    cart.count += 1;
    cart.items.push(product);
    document.querySelector('.cart-count').textContent = cart.count;
    addButton.textContent = 'Added';
    addButton.disabled = true;
    addButton.style.opacity = '0.8';
  });

  return card;
};

const renderProducts = (products, containerId, filter = () => true) => {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = products.filter(filter);
  container.innerHTML = '';

  filtered.forEach((product) => {
    container.appendChild(renderProductCard(product));
  });
};

const loadProducts = async () => {
  try {
    const response = await fetch('/api/products');
    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Unable to load products');
    }

    const products = result.data || [];
    renderProducts(products, 'featuredProducts', (item) => item.is_featured);
    renderProducts(products, 'popularProducts', (item) => item.is_popular);
  } catch (error) {
    console.error('Failed to load products:', error);
    document.getElementById('featuredProducts').innerHTML = '<p class="fallback">Products could not be loaded.</p>';
    document.getElementById('popularProducts').innerHTML = '<p class="fallback">Products could not be loaded.</p>';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();

  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', async (event) => {
    const query = event.target.value.trim().toLowerCase();

    try {
      const response = await fetch('/api/products');
      const result = await response.json();
      const products = result.data || [];

      renderProducts(products, 'featuredProducts', (item) =>
        item.is_featured && item.name.toLowerCase().includes(query)
      );
      renderProducts(products, 'popularProducts', (item) =>
        item.is_popular && item.name.toLowerCase().includes(query)
      );
    } catch (error) {
      console.error(error);
    }
  });

  document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
