const featuredProducts = [
  {
    title: 'Sony WH-1000XM5 Wireless Headphones',
    price: 329,
    oldPrice: 429,
    rating: 4.8,
    reviews: 8432,
    badge: 'Top rated',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Apple iPad 10.9" Wi‑Fi 64GB',
    price: 389,
    oldPrice: 499,
    rating: 4.7,
    reviews: 6125,
    badge: 'Best seller',
    image:
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Philips Smart Air Fryer 4.1L',
    price: 149,
    oldPrice: 199,
    rating: 4.5,
    reviews: 2817,
    badge: 'Limited deal',
    image:
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'IFB 30L Convection Microwave',
    price: 219,
    oldPrice: 299,
    rating: 4.6,
    reviews: 4201,
    badge: 'Hot pick',
    image:
      'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=900&q=80'
  }
];

const popularProducts = [
  {
    title: 'Smart LED Lamp with App Control',
    price: 68,
    oldPrice: 95,
    rating: 4.4,
    reviews: 2081,
    badge: 'Smart home',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Noise Smartwatch Pro 5',
    price: 112,
    oldPrice: 159,
    rating: 4.5,
    reviews: 5394,
    badge: 'Trending',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Premium Kitchen Blender Set',
    price: 99,
    oldPrice: 139,
    rating: 4.3,
    reviews: 1460,
    badge: 'New',
    image:
      'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Office Chair with Lumbar Support',
    price: 185,
    oldPrice: 249,
    rating: 4.7,
    reviews: 3112,
    badge: 'Staff pick',
    image:
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  }
];

function formatPrice(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(value);
}

function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const stars = '★★★★★';

  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.title}" />
      <span class="product-badge">${product.badge}</span>
    </div>
    <div class="product-body">
      <h3 class="product-title">${product.title}</h3>
      <div class="price-row">
        <span class="currency">₹</span>
        <span class="price">${Math.round(product.price)}</span>
        <span class="old-price">${formatPrice(product.oldPrice)}</span>
      </div>
      <div class="rating-row">
        <span class="stars">${stars}</span>
        <span>${product.rating}</span>
        <span>(${product.reviews})</span>
      </div>
      <button type="button" class="card-button">Add to cart</button>
    </div>
  `;

  const button = card.querySelector('.card-button');
  button.addEventListener('click', () => {
    const cartCount = document.querySelector('.cart-count');
    const currentCount = Number(cartCount.textContent);
    cartCount.textContent = String(currentCount + 1);
    button.textContent = 'Added';
    button.disabled = true;
    button.style.opacity = '0.8';
  });

  return card;
}

function renderProducts(targetId, products) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const fragment = document.createDocumentFragment();
  products.forEach((product) => {
    fragment.appendChild(createProductCard(product));
  });

  target.innerHTML = '';
  target.appendChild(fragment);
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('featured-products', featuredProducts);
  renderProducts('popular-products', popularProducts);

  const backToTop = document.querySelector('.back-to-top');
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

