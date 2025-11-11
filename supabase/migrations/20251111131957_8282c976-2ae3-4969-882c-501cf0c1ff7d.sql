-- Insert categories
INSERT INTO categories (name, slug, description) VALUES
  ('Premium', 'premium', 'High-quality fragrances crafted with precision'),
  ('Niche', 'niche', 'Unique and exclusive scent profiles'),
  ('Signature', 'signature', 'Timeless classics that define elegance'),
  ('Luxury', 'luxury', 'Exquisite fragrances crafted with the rarest ingredients');

-- Insert products
INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active) 
SELECT 
  'AD-DUHA I',
  'ad-duha-i',
  'Step into sophistication with AD-DUHA I, a fragrance that embodies confidence, charm, and timeless masculinity. It opens with the crisp sparkle of bergamot and the spicy whisper of cardamom, instantly awakening the senses. As the scent deepens, the smooth warmth of tonka bean and vanilla begins to unfold, wrapping you in a subtle sweetness that feels both refined and magnetic. The base of sandalwood and black pepper lingers long after the first impression, leaving a trail that is both powerful and effortlessly elegant.

AD-DUHA I is a scent for the modern man — clean, warm, and undeniably alluring. Wear it to exude quiet strength and polished sophistication.',
  1000,
  1300,
  'men',
  c.id,
  '/lovable-uploads/1.jpg',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'premium';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA II',
  'ad-duha-ii',
  'AD-DUHA II is like the golden hour in a bottle — glowing, sensual, and comforting all at once. It begins with the sweetness of vanilla intertwined with the spiced richness of cinnamon and the depth of oak. As it settles, tonka bean infuses the blend with a creamy warmth that feels like a soft, familiar embrace. The fragrance moves effortlessly between sweet and smoky, balancing richness with elegance.

This is a scent that transcends gender — warm, deliciously inviting, and addictive. Perfect for cozy evenings, intimate dinners, or anytime you want to leave a comforting trace of sophistication behind.',
  1000,
  1300,
  'unisex',
  c.id,
  '/lovable-uploads/2.jpg',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'premium';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA III',
  'ad-duha-iii',
  'A mysterious and captivating scent that tells a story of luxury and depth. AD-DUHA III opens with a delicate burst of bergamot and rose, creating a luminous beginning before descending into a heart of amber and oud — rich, resinous, and irresistibly smooth.

The result is a fragrance that feels ancient yet modern, smoky yet sweet. It evokes the glow of candlelight on silk, the warmth of exotic woods, and the quiet confidence of someone who knows their power. AD-DUHA III is not worn — it''s experienced.',
  1000,
  1400,
  'unisex',
  c.id,
  '/lovable-uploads/3.jpg',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'niche';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA IV',
  'ad-duha-iv',
  'A tribute to timeless elegance, AD-DUHA IV captures the beauty of a woman who moves with grace and quiet confidence. At its heart bloom jasmine and rose, their petals soft and radiant, carried on the gentle warmth of sandalwood. The fragrance is light yet lasting, delicate yet deeply feminine — a reminder that sophistication lies in simplicity.

Wear AD-DUHA IV as your signature scent — one that speaks softly, yet leaves an unforgettable impression wherever you go.',
  1000,
  1400,
  'women',
  c.id,
  '/lovable-uploads/4.jpg',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'premium';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA V',
  'ad-duha-v',
  'AD-DUHA V embodies freshness redefined — crisp, vibrant, and perfectly balanced. The opening bursts with the bright zest of grapefruit and the spicy clarity of ginger, energizing the senses. As the scent unfolds, musk and vetiver ground the fragrance in a smooth, earthy warmth that lingers beautifully on the skin.

This fragrance captures the spirit of the confident man who thrives on simplicity — fresh, clean, and effortlessly magnetic. Ideal for daily wear, yet refined enough for any occasion.',
  1000,
  1600,
  'men',
  c.id,
  '/lovable-uploads/5.jpg',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'signature';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA VI',
  'ad-duha-vi',
  'Playful yet graceful, AD-DUHA VI is a dance of light and color. Juicy blackcurrant gives a burst of brightness, while jasmine adds an elegant floral touch. Vanilla and pink pepper weave warmth and a touch of spice, creating a scent that feels joyful, feminine, and full of life.

This perfume celebrates the modern woman — vibrant, confident, and luminous. AD-DUHA VI is your everyday sparkle, your secret charm.',
  1000,
  1600,
  'women',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'signature';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA VII',
  'ad-duha-vii',
  'Nature meets sophistication in AD-DUHA VII, a fragrance that feels like a breath of fresh air. The calming essence of lavender blends seamlessly with creamy sandalwood, while a hint of leather adds depth and masculinity. The result is a fragrance that''s clean, cool, and quietly powerful — the scent of self-assurance and balance.

Perfect for men who value authenticity, simplicity, and enduring elegance.',
  1000,
  1600,
  'men',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'signature';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA VIII',
  'ad-duha-viii',
  'Soft, sensual, and irresistibly elegant — AD-DUHA VIII is a symphony of warmth and sweetness. The fragrance opens with creamy vanilla, enriched by radiant jasmine, and grounded with smooth tonka bean. It''s a scent that wraps you in comfort while exuding sophistication — like silk on skin, timeless and alluring.

AD-DUHA VIII is made for the woman who carries both strength and sweetness with effortless grace.',
  1000,
  1400,
  'women',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'premium';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA IX',
  'ad-duha-ix',
  'AD-DUHA IX captures the magnetic pull of contrast — sweet meets strong, warmth meets freshness. Opening with aromatic lavender, it unfolds into layers of tonka bean and cinnamon, creating a blend that''s bold yet refined. The fragrance lingers with a sensual sweetness that commands attention without ever overwhelming.

A scent for men who move with quiet confidence and unshakable charm.',
  1000,
  1500,
  'men',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'premium';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA X',
  'ad-duha-x',
  'Indulgent, playful, and deeply seductive — AD-DUHA X is a gourmand fantasy come to life. Notes of blackcurrant and jasmine sparkle at the top, leading to a heart of creamy vanilla and smooth cocoa. Together they create a perfume that''s both radiant and comforting, sensual and strong.

This is the scent of confidence and charm — made for women who love to be noticed and remembered.',
  1000,
  1600,
  'women',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'niche';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XI',
  'ad-duha-xi',
  'AD-DUHA XI is a journey through contrasts — where freshness meets fire, and softness meets strength. It opens with bright bergamot and pink pepper, leading into a heart of oud and leather that feels luxurious and raw at once. Musk anchors the scent with a sensual finish, making it unforgettable.

A perfect balance of masculine and feminine energy — elegant, smoky, and confidently bold.',
  1000,
  1800,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'signature';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XII',
  'ad-duha-xii',
  'Wrap yourself in the soothing warmth of AD-DUHA XII — a scent that feels like home. The creamy sweetness of vanilla and tonka bean blends effortlessly with glowing amber, creating a fragrance that is both comforting and indulgent. It''s rich without being heavy, soft yet powerful, perfect for cool evenings and intimate moments.

A scent to unwind, to connect, and to feel completely yourself.',
  1000,
  1600,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'niche';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XIII',
  'ad-duha-xiii',
  'Strong, bold, and irresistibly charismatic — AD-DUHA XIII is a tribute to classic luxury. The richness of leather and tobacco leaf weaves through a base of smooth sandalwood, creating a deep, smoky warmth that feels timeless. It''s the scent of vintage elegance, reimagined for modern sophistication.

Perfect for those who carry presence, confidence, and quiet authority.',
  1000,
  1500,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'niche';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XIV',
  'ad-duha-xiv',
  'AD-DUHA XIV burns with quiet intensity — a floral masterpiece laced with spice and warmth. Velvety rose meets golden saffron, enriched by amber and patchouli, and softened with a whisper of vanilla. The result is both sensual and spiritual — a fragrance that feels like a memory you can''t let go.

Ideal for those who crave depth, passion, and elegance in every drop.',
  1000,
  1500,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'signature';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XV',
  'ad-duha-xv',
  'Grounded yet refined, AD-DUHA XV is the fragrance of strength in simplicity. Fresh vetiver and earthy patchouli blend with Sichuan pepper and basil, creating a crisp, green aroma that''s both sophisticated and natural. It''s the scent of open skies, quiet confidence, and timeless style.

For the man who finds elegance in the earth itself.',
  1000,
  1800,
  'men',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'luxury';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XVI',
  'ad-duha-xvi',
  'Vibrant, juicy, and full of sunshine — AD-DUHA XVI captures the joy of endless summer. Lush peach, passion fruit, and raspberry swirl together over creamy vanilla and soft musk. The result is a sweet, tropical indulgence that feels both playful and luxurious.

Perfect for dreamers, travelers, and lovers of warmth and color.',
  1000,
  1500,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  true,
  true
FROM categories c WHERE c.slug = 'luxury';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XVII',
  'ad-duha-xvii',
  'AD-DUHA XVII is a fragrance of duality — delicate yet powerful, sweet yet strong. The scent opens with lush raspberry and rosewood, deepening into oud and sandalwood that linger with a warm, woody embrace. Romantic and sophisticated, it''s a scent that tells its story slowly and beautifully.

A fragrance for those who carry passion with quiet confidence.',
  1000,
  1800,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'luxury';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XVIII',
  'ad-duha-xviii',
  'Dark, delicious, and indulgent — AD-DUHA XVIII is pure decadence. The richness of tobacco and plum melts into golden honey and bittersweet chocolate, creating a scent that is at once comforting and provocative. Sweet smoke and smooth warmth blend perfectly, leaving a lasting, sensual trail.

This is a perfume that speaks of mystery, passion, and midnight charm.',
  1000,
  1800,
  'unisex',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'luxury';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XIX',
  'ad-duha-xix',
  'Dynamic, daring, and full of energy — AD-DUHA XIX is made for the modern man on the move. Opening with sharp bursts of pepper, it flows into a rich heart of amber and sandalwood. The result is a warm, invigorating fragrance that projects power without losing refinement.

For the man who commands attention effortlessly — bold, confident, and unstoppable.',
  1000,
  1800,
  'men',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'luxury';

INSERT INTO products (name, slug, description, price, compare_at_price, gender, category_id, image_url, stock_quantity, is_featured, is_active)
SELECT 
  'AD-DUHA XX',
  'ad-duha-xx',
  'A scent of contrasts — fresh yet deep, radiant yet mysterious. AD-DUHA XX opens with the sparkle of orange and the spice of pink pepper, before unfolding into oud, saffron, and warm amber.

It''s a fragrance that embodies adventure and allure — elegant yet daring, bright yet soulful. The perfect companion for the woman who is not afraid to shine differently.',
  1000,
  1500,
  'women',
  c.id,
  '/lovable-uploads/logo.png',
  100,
  false,
  true
FROM categories c WHERE c.slug = 'niche';