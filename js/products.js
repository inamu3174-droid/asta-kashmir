// ASTA Product Database
// Prices are intentionally NOT shown on the website.
// Customers inquire via WhatsApp and receive pricing there.
const ASTA_PRODUCTS = [
  {
    id: 'honey-white',
    name: 'ASTA Pure Kashmiri White Honey',
    category: 'honey',
    categoryLabel: 'Kashmiri Honey',
    tagline: 'Raw, naturally rich Kashmiri honey harvested from the pristine valleys of Kashmir.',
    description: 'Harvested in the pristine valleys of Kashmir, our honey is collected in small batches and left just as nature intended. Raw, unprocessed, and naturally rich, every jar reflects the purity, tradition, and beauty of the Himalayas.',
    image: 'images/honey.jpg',
    images: ['images/honey.jpg'],
    variants: [
      { weight: '300g', sku: 'AST-H-001' },
      { weight: '500g', sku: 'AST-H-002' },
      { weight: '1kg', sku: 'AST-H-003' }
    ],
    defaultVariant: 0,
    highlights: ['Raw & Unprocessed', 'Single-Origin', 'No Added Sugar', 'No Preservatives'],
    ingredients: '100% Pure Kashmiri Honey',
    storage: 'Store in a cool, dry place. Keep away from direct sunlight and moisture. Natural crystallisation is the sign of pure honey.',
    bestBefore: '24 Months from PKD',
    rating: 4.9,
    reviews: 128,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'saffron-kashmiri',
    name: 'ASTA Kashmiri Saffron',
    category: 'saffron',
    categoryLabel: 'Kashmiri Saffron',
    tagline: 'Precious threads from the valleys of Kashmir.',
    description: 'Hand-picked Kashmiri saffron (Crocus sativus) known for its deep aroma, vibrant colour and exceptional quality. Carefully graded and packed to preserve its pure essence.',
    image: 'images/saffron.jpg',
    images: ['images/saffron.jpg'],
    variants: [
      { weight: '1g', sku: 'AST-S-001' },
      { weight: '2g', sku: 'AST-S-002' },
      { weight: '3g', sku: 'AST-S-003' },
      { weight: '4g', sku: 'AST-S-004' },
      { weight: '5g', sku: 'AST-S-005' },
      { weight: '6g', sku: 'AST-S-006' },
      { weight: '7g', sku: 'AST-S-007' },
      { weight: '8g', sku: 'AST-S-008' },
      { weight: '9g', sku: 'AST-S-009' },
      { weight: '10g', sku: 'AST-S-010' }
    ],
    defaultVariant: 0,
    highlights: ['Premium Grade', 'Hand-Picked', 'Intense Aroma', 'Vibrant Colour'],
    ingredients: '100% Pure Kashmiri Saffron',
    storage: 'Store in a cool, dry place away from light and moisture.',
    bestBefore: '24 Months from PKD',
    rating: 4.8,
    reviews: 86,
    bestseller: true,
    newArrival: false
  },
  {
    id: 'kahwa-mist',
    name: 'ASTA Kashmiri Mist Saffron Kahwa',
    category: 'kahwa',
    categoryLabel: 'Kashmiri Kahwa',
    tagline: 'A refined Kashmiri blend. A warm taste of Kashmir in every cup.',
    description: 'A refined Kashmiri blend of green tea, green cardamom, cinnamon, saffron and dried ginger. Carefully crafted to bring the authentic warmth of Kashmiri Kahwa to your cup.',
    image: 'images/kahwa.jpg',
    images: ['images/kahwa.jpg'],
    variants: [
      { weight: '200g', sku: 'AST-KH-001' },
      { weight: '500g', sku: 'AST-KH-002' },
      { weight: '1kg', sku: 'AST-KH-003' }
    ],
    defaultVariant: 0,
    highlights: ['Authentic Blend', 'Saffron Infused', 'Aromatic', 'No Artificial Flavours'],
    ingredients: 'Green Tea, Green Cardamom, Cinnamon, Saffron, Dried Ginger Powder, Sugar.',
    storage: 'Store in a cool, dry place. Keep away from direct sunlight and moisture.',
    bestBefore: '12 Months from Packing',
    howTo: [
      'Take one cup of water.',
      'Add 1 teaspoon of Kashmiri Mist Saffron Kahwa and bring to a gentle boil for 2–3 minutes.',
      'Pour into your cup, add crushed almonds as desired, and serve hot.'
    ],
    rating: 4.9,
    reviews: 94,
    bestseller: true,
    newArrival: true
  },
  {
    id: 'walnuts',
    name: 'Finest Kashmiri Walnut Kernels',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Crunchy, nutrient-rich walnut kernels from the orchards of Kashmir.',
    description: 'Premium quality Kashmiri walnut kernels carefully selected for size, freshness and taste.',
    image: 'images/walnuts.jpg',
    images: ['images/walnuts.jpg'],
    variants: [{ weight: '250g', sku: 'AST-W-001' }, { weight: '500g', sku: 'AST-W-002' }, { weight: '1kg', sku: 'AST-W-003' }],
    defaultVariant: 0,
    highlights: ['Premium Grade', 'Naturally Grown', 'Fresh Harvest'],
    ingredients: '100% Kashmiri Walnut Kernels',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.7, reviews: 62, bestseller: true, newArrival: false
  },
  {
    id: 'almonds',
    name: 'Kashmiri Almonds',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Sweet, crunchy almonds sourced from Kashmir\'s finest orchards.',
    description: 'Hand-selected Kashmiri almonds known for their superior taste and nutritional value.',
    image: 'https://images.unsplash.com/photo-1772986799909-81bc27fd99ce?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1772986799909-81bc27fd99ce?w=800&q=80'],
    variants: [{ weight: '250g', sku: 'AST-A-001' }, { weight: '500g', sku: 'AST-A-002' }, { weight: '1kg', sku: 'AST-A-003' }],
    defaultVariant: 0,
    highlights: ['Premium Grade', 'Naturally Grown', 'Fresh Harvest'],
    ingredients: '100% Kashmiri Almonds',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.8, reviews: 71, bestseller: true, newArrival: false
  },
  {
    id: 'cashews',
    name: 'Premium Cashews',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Buttery, premium cashews selected for excellence.',
    description: 'Large, whole cashews carefully graded for size and freshness.',
    image: 'https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1573555657105-47a0bb37c3ea?w=800&q=80'],
    variants: [{ weight: '250g', sku: 'AST-C-001' }, { weight: '500g', sku: 'AST-C-002' }, { weight: '1kg', sku: 'AST-C-003' }],
    defaultVariant: 0,
    highlights: ['W320 Grade', 'Premium Selection', 'Fresh'],
    ingredients: '100% Premium Cashews',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.7, reviews: 55, bestseller: false, newArrival: false
  },
  {
    id: 'pistachios',
    name: 'Pistachios',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Roasted to perfection, rich and flavourful.',
    description: 'Premium quality pistachios with a perfect balance of crunch and natural sweetness.',
    image: 'https://images.unsplash.com/photo-1551238875-13b9d38454db?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1551238875-13b9d38454db?w=800&q=80'],
    variants: [{ weight: '250g', sku: 'AST-P-001' }, { weight: '500g', sku: 'AST-P-002' }, { weight: '1kg', sku: 'AST-P-003' }],
    defaultVariant: 0,
    highlights: ['Premium Grade', 'Fresh'],
    ingredients: '100% Premium Pistachios',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.6, reviews: 48, bestseller: false, newArrival: true
  },
  {
    id: 'raisins',
    name: 'Premium Raisins',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Naturally sweet, sun-dried raisins of exceptional quality.',
    description: 'Plump, naturally sweet raisins carefully selected for flavour and texture.',
    image: 'https://images.unsplash.com/photo-1642102903918-b97c37955bbf?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1642102903918-b97c37955bbf?w=800&q=80'],
    variants: [{ weight: '250g', sku: 'AST-R-001' }, { weight: '500g', sku: 'AST-R-002' }, { weight: '1kg', sku: 'AST-R-003' }],
    defaultVariant: 0,
    highlights: ['Naturally Sweet', 'Sun-Dried', 'Premium'],
    ingredients: '100% Premium Raisins',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.5, reviews: 39, bestseller: false, newArrival: false
  },
  {
    id: 'figs',
    name: 'Dried Figs',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Soft, naturally sweet dried figs of superior quality.',
    description: 'Premium dried figs with a soft texture and rich natural sweetness.',
    image: 'https://images.unsplash.com/photo-1775344539305-67ca3a01f11a?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1775344539305-67ca3a01f11a?w=800&q=80'],
    variants: [{ weight: '250g', sku: 'AST-F-001' }, { weight: '500g', sku: 'AST-F-002' }, { weight: '1kg', sku: 'AST-F-003' }],
    defaultVariant: 0,
    highlights: ['Soft Texture', 'Naturally Sweet', 'Premium'],
    ingredients: '100% Dried Figs',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.6, reviews: 42, bestseller: false, newArrival: false
  },
  {
    id: 'apricots',
    name: 'Dried Apricots',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'Tangy-sweet dried apricots from the Himalayan region.',
    description: 'Carefully selected dried apricots with a perfect balance of tang and natural sweetness.',
    image: 'https://images.unsplash.com/photo-1784043436919-28fd8e17ff3c?w=800&q=80',
    images: ['https://images.unsplash.com/photo-1784043436919-28fd8e17ff3c?w=800&q=80'],
    variants: [{ weight: '250g', sku: 'AST-AP-001' }, { weight: '500g', sku: 'AST-AP-002' }, { weight: '1kg', sku: 'AST-AP-003' }],
    defaultVariant: 0,
    highlights: ['Naturally Dried', 'Rich Flavour', 'Premium'],
    ingredients: '100% Dried Apricots',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.5, reviews: 36, bestseller: false, newArrival: false
  },
  {
    id: 'gift-mix',
    name: 'Dry Fruit Gift Mix',
    category: 'dryfruits',
    categoryLabel: 'Premium Dry Fruits',
    tagline: 'A curated selection of premium dry fruits for gifting.',
    description: 'An elegant mix of Kashmiri walnuts, almonds, cashews, pistachios, raisins and more.',
    image: 'images/dryfruits.jpg',
    images: ['images/dryfruits.jpg'],
    variants: [{ weight: '250g', sku: 'AST-GM-001' }, { weight: '500g', sku: 'AST-GM-002' }, { weight: '1kg', sku: 'AST-GM-003' }],
    defaultVariant: 0,
    highlights: ['Curated Mix', 'Gift Ready', 'Premium Selection'],
    ingredients: 'Assorted Premium Dry Fruits',
    storage: 'Store in an airtight container in a cool, dry place.',
    rating: 4.9, reviews: 58, bestseller: true, newArrival: true
  }
];

function getProductById(id) { return ASTA_PRODUCTS.find(p => p.id === id); }
function getProductsByCategory(cat) { if (!cat || cat === 'all') return ASTA_PRODUCTS; return ASTA_PRODUCTS.filter(p => p.category === cat); }
function getBestsellers() { return ASTA_PRODUCTS.filter(p => p.bestseller); }

const WA_NUMBER = '916006548199';
function waProductLink(productName, weight) {
  const msg = weight
    ? `Hello ASTA, I'm interested in ${productName} (${weight}). Please share the price and availability.`
    : `Hello ASTA, I'm interested in ${productName}. Please share the price and availability.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}
function waGeneralLink() {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello ASTA, I'm interested in your products. I would like to know more.")}`;
}
function waCustomQtyLink(productName) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hello ASTA, I'm interested in " + productName + ". I need a custom quantity. Please share details.")}`;
}
