export interface Perfume {
  id: number;
  slug: string;
  name: string;
  audience: "Men" | "Women" | "Unisex";
  description: string;
  price: number;
  mrp: number;
  category: string;
  image: string;
}

export const perfumes: Perfume[] = [
  {
    id: 1,
    slug: "ad-duha-i",
    name: "AD-DUHA I",
    audience: "Men",
    description: `Step into sophistication with AD-DUHA I, a fragrance that embodies confidence, charm, and timeless masculinity.
It opens with the crisp sparkle of bergamot and the spicy whisper of cardamom, instantly awakening the senses. As the scent deepens, the smooth warmth of tonka bean and vanilla begins to unfold, wrapping you in a subtle sweetness that feels both refined and magnetic. The base of sandalwood and black pepper lingers long after the first impression, leaving a trail that is both powerful and effortlessly elegant.

AD-DUHA I is a scent for the modern man — clean, warm, and undeniably alluring. Wear it to exude quiet strength and polished sophistication.`,
    price: 1000,
    mrp: 1300,
    category: "Premium",
    image: "/lovable-uploads/1.jpg"
  },
  {
    id: 2,
    slug: "ad-duha-ii",
    name: "AD-DUHA II",
    audience: "Unisex",
    description: `AD-DUHA II is like the golden hour in a bottle — glowing, sensual, and comforting all at once.
It begins with the sweetness of vanilla intertwined with the spiced richness of cinnamon and the depth of oak. As it settles, tonka bean infuses the blend with a creamy warmth that feels like a soft, familiar embrace. The fragrance moves effortlessly between sweet and smoky, balancing richness with elegance.

This is a scent that transcends gender — warm, deliciously inviting, and addictive. Perfect for cozy evenings, intimate dinners, or anytime you want to leave a comforting trace of sophistication behind.`,
    price: 1000,
    mrp: 1300,
    category: "Premium",
    image: "/lovable-uploads/2.jpg"
  },
  {
    id: 3,
    slug: "ad-duha-iii",
    name: "AD-DUHA III",
    audience: "Unisex",
    description: `A mysterious and captivating scent that tells a story of luxury and depth. AD-DUHA IIIopens with a delicate burst of bergamot and rose, creating a luminous beginning before descending into a heart of amber and oud — rich, resinous, and irresistibly smooth.

The result is a fragrance that feels ancient yet modern, smoky yet sweet. It evokes the glow of candlelight on silk, the warmth of exotic woods, and the quiet confidence of someone who knows their power. AD-DUHA IIIis not worn — it's experienced.`,
    price: 1000,
    mrp: 1400,
    category: "Niche",
    image: "/lovable-uploads/3.jpg"
  },
  {
    id: 4,
    slug: "ad-duha-iv",
    name: "AD-DUHA IV",
    audience: "Women",
    description: `A tribute to timeless elegance, AD-DUHA IV captures the beauty of a woman who moves with grace and quiet confidence.
At its heart bloom jasmine and rose, their petals soft and radiant, carried on the gentle warmth of sandalwood. The fragrance is light yet lasting, delicate yet deeply feminine — a reminder that sophistication lies in simplicity.

Wear AD-DUHA IV as your signature scent — one that speaks softly, yet leaves an unforgettable impression wherever you go.`,
    price: 1000,
    mrp: 1400,
    category: "Premium",
    image: "/lovable-uploads/4.jpg"
  },
  {
    id: 5,
    slug: "ad-duha-v",
    name: "AD-DUHA V",
    audience: "Men",
    description: `AD-DUHA V embodies freshness redefined — crisp, vibrant, and perfectly balanced.
The opening bursts with the bright zest of grapefruit and the spicy clarity of ginger, energizing the senses. As the scent unfolds, musk and vetiver ground the fragrance in a smooth, earthy warmth that lingers beautifully on the skin.

This fragrance captures the spirit of the confident man who thrives on simplicity — fresh, clean, and effortlessly magnetic. Ideal for daily wear, yet refined enough for any occasion.`,
    price: 1000,
    mrp: 1600,
    category: "Signature",
    image: "/lovable-uploads/5.jpg"
  },
  {
    id: 6,
    slug: "ad-duha-vi",
    name: "AD-DUHA VI",
    audience: "Women",
    description: `Playful yet graceful, AD-DUHA VI is a dance of light and color.
Juicy blackcurrant gives a burst of brightness, while jasmine adds an elegant floral touch. Vanilla and pink pepper weave warmth and a touch of spice, creating a scent that feels joyful, feminine, and full of life.

This perfume celebrates the modern woman — vibrant, confident, and luminous. AD-DUHA VI is your everyday sparkle, your secret charm.`,
    price: 1000,
    mrp: 1600,
    category: "Signature",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 7,
    slug: "ad-duha-vii",
    name: "AD-DUHA VII",
    audience: "Men",
    description: `Nature meets sophistication in AD-DUHA VII, a fragrance that feels like a breath of fresh air.
The calming essence of lavender blends seamlessly with creamy sandalwood, while a hint of leather adds depth and masculinity. The result is a fragrance that's clean, cool, and quietly powerful — the scent of self-assurance and balance.

Perfect for men who value authenticity, simplicity, and enduring elegance.`,
    price: 1000,
    mrp: 1600,
    category: "Signature",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 8,
    slug: "ad-duha-viii",
    name: "AD-DUHA VIII",
    audience: "Women",
    description: `Soft, sensual, and irresistibly elegant — AD-DUHA VIII is a symphony of warmth and sweetness.
The fragrance opens with creamy vanilla, enriched by radiant jasmine, and grounded with smooth tonka bean. It's a scent that wraps you in comfort while exuding sophistication — like silk on skin, timeless and alluring.

AD-DUHA VIII is made for the woman who carries both strength and sweetness with effortless grace.`,
    price: 1000,
    mrp: 1400,
    category: "Premium",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 9,
    slug: "ad-duha-ix",
    name: "AD-DUHA IX",
    audience: "Men",
    description: `AD-DUHA IX captures the magnetic pull of contrast — sweet meets strong, warmth meets freshness.
Opening with aromatic lavender, it unfolds into layers of tonka bean and cinnamon, creating a blend that's bold yet refined. The fragrance lingers with a sensual sweetness that commands attention without ever overwhelming.

A scent for men who move with quiet confidence and unshakable charm.`,
    price: 1000,
    mrp: 1500,
    category: "Premium",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 10,
    slug: "ad-duha-x",
    name: "AD-DUHA X",
    audience: "Women",
    description: `Indulgent, playful, and deeply seductive — AD-DUHA X is a gourmand fantasy come to life.
Notes of blackcurrant and jasmine sparkle at the top, leading to a heart of creamy vanilla and smooth cocoa. Together they create a perfume that's both radiant and comforting, sensual and strong.

This is the scent of confidence and charm — made for women who love to be noticed and remembered.`,
    price: 1000,
    mrp: 1600,
    category: "Niche",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 11,
    slug: "ad-duha-xi",
    name: "AD-DUHA XI",
    audience: "Unisex",
    description: `AD-DUHA XI is a journey through contrasts — where freshness meets fire, and softness meets strength.
It opens with bright bergamot and pink pepper, leading into a heart of oud and leather that feels luxurious and raw at once. Musk anchors the scent with a sensual finish, making it unforgettable.

A perfect balance of masculine and feminine energy — elegant, smoky, and confidently bold.`,
    price: 1000,
    mrp: 1800,
    category: "Signature",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 12,
    slug: "ad-duha-xii",
    name: "AD-DUHA XII",
    audience: "Unisex",
    description: `Wrap yourself in the soothing warmth of AD-DUHA XII — a scent that feels like home.
The creamy sweetness of vanilla and tonka bean blends effortlessly with glowing amber, creating a fragrance that is both comforting and indulgent. It's rich without being heavy, soft yet powerful, perfect for cool evenings and intimate moments.

A scent to unwind, to connect, and to feel completely yourself.`,
    price: 1000,
    mrp: 1600,
    category: "Niche",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 13,
    slug: "ad-duha-xiii",
    name: "AD-DUHA XIII",
    audience: "Unisex",
    description: `Strong, bold, and irresistibly charismatic — AD-DUHA XIII is a tribute to classic luxury.
The richness of leather and tobacco leaf weaves through a base of smooth sandalwood, creating a deep, smoky warmth that feels timeless. It's the scent of vintage elegance, reimagined for modern sophistication.

Perfect for those who carry presence, confidence, and quiet authority.`,
    price: 1000,
    mrp: 1500,
    category: "Niche",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 14,
    slug: "ad-duha-xiv",
    name: "AD-DUHA XIV",
    audience: "Unisex",
    description: `AD-DUHA XIV burns with quiet intensity — a floral masterpiece laced with spice and warmth.
Velvety rose meets golden saffron, enriched by amber and patchouli, and softened with a whisper of vanilla. The result is both sensual and spiritual — a fragrance that feels like a memory you can't let go.

Ideal for those who crave depth, passion, and elegance in every drop.`,
    price: 1000,
    mrp: 1500,
    category: "Signature",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 15,
    slug: "ad-duha-xv",
    name: "AD-DUHA XV",
    audience: "Men",
    description: `Grounded yet refined, AD-DUHA XV is the fragrance of strength in simplicity.
Fresh vetiver and earthy patchouli blend with Sichuan pepper and basil, creating a crisp, green aroma that's both sophisticated and natural. It's the scent of open skies, quiet confidence, and timeless style.

For the man who finds elegance in the earth itself.`,
    price: 1000,
    mrp: 1800,
    category: "Luxury",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 16,
    slug: "ad-duha-xvi",
    name: "AD-DUHA XVI",
    audience: "Unisex",
    description: `Vibrant, juicy, and full of sunshine — AD-DUHA XVI captures the joy of endless summer.
Lush peach, passion fruit, and raspberry swirl together over creamy vanilla and soft musk. The result is a sweet, tropical indulgence that feels both playful and luxurious.

Perfect for dreamers, travelers, and lovers of warmth and color.`,
    price: 1000,
    mrp: 1500,
    category: "Luxury",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 17,
    slug: "ad-duha-xvii",
    name: "AD-DUHA XVII",
    audience: "Unisex",
    description: `AD-DUHA XVII is a fragrance of duality — delicate yet powerful, sweet yet strong.
The scent opens with lush raspberry and rosewood, deepening into oud and sandalwood that linger with a warm, woody embrace. Romantic and sophisticated, it's a scent that tells its story slowly and beautifully.

A fragrance for those who carry passion with quiet confidence.`,
    price: 1000,
    mrp: 1800,
    category: "Luxury",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 18,
    slug: "ad-duha-xviii",
    name: "AD-DUHA XVIII",
    audience: "Unisex",
    description: `Dark, delicious, and indulgent — AD-DUHA XVIII is pure decadence.
The richness of tobacco and plum melts into golden honey and bittersweet chocolate, creating a scent that is at once comforting and provocative. Sweet smoke and smooth warmth blend perfectly, leaving a lasting, sensual trail.

This is a perfume that speaks of mystery, passion, and midnight charm.`,
    price: 1000,
    mrp: 1800,
    category: "Luxury",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 19,
    slug: "ad-duha-xix",
    name: "AD-DUHA XIX",
    audience: "Men",
    description: `Dynamic, daring, and full of energy — AD-DUHA XIX is made for the modern man on the move.
Opening with sharp bursts of pepper, it flows into a rich heart of amber and sandalwood. The result is a warm, invigorating fragrance that projects power without losing refinement.

For the man who commands attention effortlessly — bold, confident, and unstoppable.`,
    price: 1000,
    mrp: 1800,
    category: "Luxury",
    image: "/lovable-uploads/logo.png"
  },
  {
    id: 20,
    slug: "ad-duha-xx",
    name: "AD-DUHA XX",
    audience: "Women",
    description: `A scent of contrasts — fresh yet deep, radiant yet mysterious. AD-DUHA XX opens with the sparkle of orange and the spice of pink pepper, before unfolding into oud, saffron, and warm amber.

It's a fragrance that embodies adventure and allure — elegant yet daring, bright yet soulful. The perfect companion for the woman who is not afraid to shine differently.`,
    price: 1000,
    mrp: 1500,
    category: "Niche",
    image: "/lovable-uploads/logo.png"
  }
];
