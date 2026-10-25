:root {
  --amazon-dark: #131921;
  --amazon-dark-2: #232f3e;
  --amazon-yellow: #febd69;
  --amazon-yellow-deep: #f3a847;
  --amazon-blue: #007185;
  --amazon-orange: #ff9900;
  --page-bg: #e3e6e6;
  --card-bg: #ffffff;
  --text-main: #0f172a;
  --text-soft: #4b5563;
  --border: #dfe3e8;
  --shadow: 0 18px 35px rgba(15, 23, 42, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--page-bg);
  color: var(--text-main);
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select {
  font: inherit;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: min(1280px, calc(100% - 32px));
  margin: 0 auto;
}

.page-header {
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

.topbar {
  background: #0b1118;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.77rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
}

.topbar-inner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.25rem;
  min-height: 32px;
}

.topbar p {
  margin: 0;
}

.nav-main {
  background: var(--amazon-dark);
  color: white;
  padding: 0.75rem 0;
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.brand {
  display: inline-flex;
  align-items: flex-end;
  font-weight: 700;
  letter-spacing: -0.08em;
  font-size: clamp(1.6rem, 2vw, 2.2rem);
  color: white;
  text-transform: lowercase;
  margin-right: 0.25rem;
}

.brand-text {
  position: relative;
  top: 2px;
}

.brand-accent {
  color: var(--amazon-yellow);
}

.location-pill {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 110px;
  padding: 0.3rem 0.5rem;
  border-radius: 0.35rem;
  transition: background 0.2s ease;
}

.location-pill:hover {
  background: rgba(255, 255, 255, 0.08);
}

.location-pill .icon {
  font-size: 1.2rem;
}

.location-pill small,
.user-action small {
  display: block;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.67rem;
}

.search {
  flex: 1;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  min-height: 46px;
}

.search-category {
  border: none;
  background: #f3f3f3;
  color: var(--text-main);
  padding: 0 0.85rem;
  height: 100%;
  border-right: 1px solid var(--border);
}

.search input {
  flex: 1;
  border: none;
  min-height: 46px;
  padding: 0 1rem;
  font-size: 1rem;
  outline: none;
}

.search button {
  width: 52px;
  height: 100%;
  border: none;
  background: var(--amazon-yellow);
  font-size: 1.3rem;
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;
}

.user-action,
.cart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 46px;
  padding: 0.15rem 0.4rem;
  border-radius: 0.35rem;
  transition: background 0.2s ease;
}

.user-action:hover,
.cart:hover {
  background: rgba(255, 255, 255, 0.08);
}

.user-action.language {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.35rem;
}

.cart {
  position: relative;
  flex-direction: row;
  align-items: center;
  gap: 0.45rem;
  padding: 0.25rem 0.5rem;
}

.cart-icon {
  font-size: 1.5rem;
}

.cart-count {
  position: absolute;
  top: -2px;
  left: 18px;
  background: var(--amazon-orange);
  color: #111827;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.72rem;
  font-weight: 700;
}

.category-strip {
  background: var(--amazon-dark-2);
  color: white;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.strip-inner {
  display: flex;
  align-items: center;
  gap: 1.35rem;
  min-height: 42px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
}

.strip-inner::-webkit-scrollbar {
  display: none;
}

.strip-inner span {
  opacity: 0.92;
  font-size: 0.95rem;
}

.hero-section {
  padding: 1.25rem 0 0;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 3.3fr) minmax(260px, 1fr);
  gap: 1.25rem;
  align-items: stretch;
}

.hero-banner {
  position: relative;
  min-height: 480px;
  border-radius: 1rem;
  overflow: hidden;
  background: url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80") center/cover;
  box-shadow: var(--shadow);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2) 45%, rgba(0, 0, 0, 0.1));
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 2.25rem 2.25rem 1.5rem;
  max-width: 540px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
}

.eyebrow {
  display: inline-block;
  font-size: 0.74rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  opacity: 0.9;
  margin-bottom: 0.75rem;
}

.hero-content h1 {
  margin: 0 0 0.85rem;
  font-size: clamp(2.2rem, 4vw, 4rem);
  line-height: 1.02;
}

.hero-content p {
  margin: 0 0 1.25rem;
  max-width: 460px;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
}

.button-primary,
.button-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.button-primary {
  background: linear-gradient(135deg, #ffd88d, #f4b153);
  color: #111827;
  box-shadow: 0 10px 16px rgba(243, 168, 71, 0.35);
}

.button-secondary {
  background: #ffffff;
  color: var(--text-main);
}

.button-primary:hover,
.button-secondary:hover {
  transform: translateY(-1px);
  filter: brightness(1.02);
}

.promo-panel {
  display: grid;
  gap: 1rem;
}

.panel-box {
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--shadow);
}

.panel-box h3 {
  margin: 0 0 0.8rem;
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.panel-box ul {
  margin: 0 0 1rem;
  padding-left: 1.2rem;
  color: var(--text-soft);
  line-height: 1.75;
}

.panel-box a {
  color: var(--amazon-blue);
  font-weight: 600;
}

.accent-box {
  background: linear-gradient(135deg, #ffedd5 0%, #fef3c7 100%);
}

.product-section {
  padding: 1.75rem 0 0;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-header h2 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.section-header a {
  color: var(--amazon-blue);
  font-weight: 600;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 1rem;
}

.product-card {
  background: var(--card-bg);
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.05);
}

.product-image {
  position: relative;
  height: 240px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-badge {
  position: absolute;
  top: 0.85rem;
  left: 0.85rem;
  background: #fef2f2;
  color: #b91c1c;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
}

.product-body {
  padding: 1rem;
}

.product-title {
  color: var(--text-main);
  font-size: 1rem;
  line-height: 1.45;
  min-height: 46px;
  margin: 0 0 0.7rem;
}

.price-row {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.price {
  font-size: 1.7rem;
  font-weight: 700;
}

.currency {
  font-size: 0.9rem;
  vertical-align: top;
  position: relative;
  top: -0.5rem;
}

.old-price {
  font-size: 0.85rem;
  color: var(--text-soft);
  text-decoration: line-through;
}

.rating-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-soft);
  margin-bottom: 1rem;
}

.stars {
  color: #f59e0b;
  letter-spacing: 0.08em;
}

.card-button {
  background: var(--amazon-yellow);
  color: #111827;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  font-weight: 700;
  width: 100%;
}

.deal-banner {
  padding-top: 2rem;
}

.deal-banner-inner {
  background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
  color: white;
  border-radius: 1.5rem;
  padding: 1.5rem 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: var(--shadow);
}

.deal-banner h2 {
  margin: 0;
  font-size: clamp(1.6rem, 3vw, 2.6rem);
}

.site-footer {
  margin-top: 2.5rem;
  background: #0f172a;
  color: #e5e7eb;
}

.back-to-top {
  background: #374151;
  text-align: center;
  padding: 0.9rem 1rem;
  font-weight: 600;
  cursor: pointer;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 1.5rem;
  padding: 2.5rem 0 2rem;
}

.footer-grid h3 {
  margin: 0 0 1rem;
}

.footer-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.6rem;
  color: rgba(229, 231, 235, 0.8);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.5rem 0 2rem;
}

.footer-brand {
  font-size: 1.5rem;
}

@media (max-width: 980px) {
  .hero-layout {
    grid-template-columns: 1fr;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 720px) {
  .topbar {
    display: none;
  }

  .nav-inner {
    flex-wrap: wrap;
  }

  .search {
    order: 3;
    width: 100%;
  }

  .user-actions {
    width: 100%;
    justify-content: space-between;
    margin-left: 0;
    gap: 0.5rem;
  }

  .product-grid {
    grid-template-columns: 1fr;
  }

  .deal-banner-inner,
  .footer-bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
