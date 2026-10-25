USE amazon_store;

INSERT INTO categories (name, slug) VALUES
  ('Electronics', 'electronics'),
  ('Home & Kitchen', 'home-kitchen'),
  ('Fashion', 'fashion'),
  ('Accessories', 'accessories');

INSERT INTO products (
  category_id,
  name,
  description,
  short_description,
  price,
  compare_price,
  stock,
  image_url,
  badge,
  rating,
  review_count,
  is_featured,
  is_popular
) VALUES
  (1, 'Sony WH-1000XM5 Wireless Headphones', 'Industry-leading noise cancellation with premium sound quality and all-day comfort.', 'Wireless audio with premium noise cancellation', 329.00, 429.00, 45, 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80', 'Top rated', 4.8, 8432, TRUE, TRUE),
  (1, 'Apple iPad 10.9" Wi‑Fi 64GB', 'Perfect for work, study, entertainment, and creativity with a bright Liquid Retina display.', 'Lightweight tablet for work and entertainment', 389.00, 499.00, 30, 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80', 'Best seller', 4.7, 6125, TRUE, TRUE),
  (2, 'Philips Smart Air Fryer 4.1L', 'Crispy, healthy meals with smart presets and rapid heating technology.', 'Healthy cooking with reduced oil', 149.00, 199.00, 58, 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=900&q=80', 'Limited deal', 4.5, 2817, TRUE, FALSE),
  (2, 'IFB 30L Convection Microwave', 'Compact, efficient, and stylish microwave with even heating and multiple auto-cook modes.', 'Reliable kitchen appliance for everyday use', 219.00, 299.00, 40, 'https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?auto=format&fit=crop&w=900&q=80', 'Hot pick', 4.6, 4201, TRUE, FALSE),
  (3, 'Smart LED Lamp with App Control', 'A premium desk lamp with scene modes, dimming, and app compatibility for modern spaces.', 'Modern lighting for your setup', 68.00, 95.00, 120, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', 'Smart home', 4.4, 2081, FALSE, TRUE),
  (3, 'Noise Smartwatch Pro 5', 'Track your health, workouts, and notifications with a vivid AMOLED display.', 'Fitness companion with smart connectivity', 112.00, 159.00, 90, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80', 'Trending', 4.5, 5394, FALSE, TRUE),
  (4, 'Premium Kitchen Blender Set', 'A versatile blender system for smoothies, shakes, chopping, and purees.', 'Strong performance for healthy recipes', 99.00, 139.00, 75, 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=900&q=80', 'New', 4.3, 1460, FALSE, TRUE),
  (4, 'Office Chair with Lumbar Support', 'Designed for posture support, comfort, and long working hours in your home office.', 'Ergonomic office comfort', 185.00, 249.00, 66, 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', 'Staff pick', 4.7, 3112, FALSE, TRUE);

INSERT INTO users (full_name, email, password_hash, phone) VALUES
  ('Demo User', 'demo@example.com', '$2b$10$Qw/5xk4Wz8v4B9mWjG.0OeR8nq6F1aE2o8a4dM2AqLQv6K4yA0V2', '9876543210');
