const staticProducts = [
  {
    id: 1,
    name: 'Sony WH-1000XM5 Wireless Headphones',
    price: 329,
    compare_price: 429,
    rating: 4.8,
    review_count: 8432,
    badge: 'Top rated',
    image_url:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    is_featured: true,
    is_popular: true
  },
  {
    id: 2,
    name: 'Apple iPad 10.9" Wi‑Fi 64GB',
    price: 389,
    compare_price: 499,
    rating: 4.7,
    review_count: 6125,
    badge: 'Best seller',
    image_url:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
    is_featured: true,
    is_popular: true
  },
  {
    id: 3,
    name: 'Philips Smart Air Fryer 4.1L',
    price: 149,
    compare_price: 199,
    rating: 4.5,
    review_count: 2817,
    badge: 'Limited deal',
    image_url:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80',
    is_featured: true,
    is_popular: false
  },
  {
    id: 4,
    name: 'IFB 30L Convection Microwave',
    price: 219,
    compare_price: 299,
    rating: 4.6,
    review_count: 4201,
    badge: 'Hot pick',
    image_url:
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=900&q=80',
    is_featured: true,
    is_popular: false
  },
  {
    id: 5,
    name: 'Smart LED Lamp with App Control',
    price: 68,
    compare_price: 95,
    rating: 4.4,
    review_count: 2081,
    badge: 'Smart home',
    image_url:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    is_featured: false,
    is_popular: true
  },
  {
    id: 6,
    name: 'Noise Smartwatch Pro 5',
    price: 112,
    compare_price: 159,
    rating: 4.5,
    review_count: 5394,
    badge: 'Trending',
    image_url:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    is_featured: false,
    is_popular: true
  },
  {
    id: 7,
    name: 'Premium Kitchen Blender Set',
    price: 99,
    compare_price: 139,
    rating: 4.3,
    review_count: 1460,
    badge: 'New',
    image_url:
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=80',
    is_featured: false,
    is_popular: true
  },
  {
    id: 8,
    name: 'Office Chair with Lumbar Support',
    price: 185,
    compare_price: 249,
    rating: 4.7,
    review_count: 3112,
    badge: 'Staff pick',
    image_url:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    is_featured: false,
    is_popular: true
  }
];

const formatMoney = (value) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);

function buildCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image_url}" alt="${product.name}" />
      <span class="product-badge">${product.badge}</span>
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
        <span>${Number(product.rating).toFixed(1)}</span>
        <span>(${product.review_count})</span>
      </div>
      <button type="button" class="card-button">Add to cart</button>
    </div>
  `;

  const button = card.querySelector('.card-button');
  button.addEventListener('click', () => {
    const cartCountEl = document.querySelector('.cart-count');
    const current = Number(cartCountEl.textContent || 0);
    cartCountEl.textContent = String(current + 1);
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.82';
  });

  return card;
}

function renderProducts(products, containerId, predicate) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = products.filter(predicate);
  container.innerHTML = '';

  filtered.forEach((product) => {
    container.appendChild(buildCard(product));
  });
}

async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    const result = await response.json();

    if (result?.success && Array.isArray(result.data)) {
      renderProducts(result.data, 'featuredProducts', (item) => item.is_featured);
      renderProducts(result.data, 'popularProducts', (item) => item.is_popular);
      return;
    }
  } catch (error) {
    console.warn('API failed, rendering fallback products.', error);
  }

  renderProducts(staticProducts, 'featuredProducts', (item) => item.is_featured);
  renderProducts(staticProducts, 'popularProducts', (item) => item.is_popular);
}

function handleSearch() {
  const query = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';

  const filteredFeatured = staticProducts.filter(
    (item) => item.is_featured && item.name.toLowerCase().includes(query)
  );
  const filteredPopular = staticProducts.filter(
    (item) => item.is_popular && item.name.toLowerCase().includes(query)
  );

  renderProducts(filteredFeatured, 'featuredProducts', () => true);
  renderProducts(filteredPopular, 'popularProducts', () => true);
}

document.addEventListener('DOMContentLoaded', () => {
  loadProducts();

  const input = document.getElementById('searchInput');
  input?.addEventListener('input', handleSearch);

  document.querySelector('.back-to-top')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
