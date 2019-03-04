const priceListUnordered = [
  {
    slug: 'suit',
    description: 'Suit',
    price: 2050,
  },
  {
    slug: 'pants',
    description: 'Pants/Slacks',
    price: 950,
  },
  {
    slug: 'blazer',
    description: 'Sports Coat/Blazer',
    price: 1250,
  },
  {
    slug: 'shirtdress',
    description: 'Dress Shirt',
    price: 900,
  },
  {
    slug: 'shirtsport',
    description: 'Sports Shirt',
    price: 900,
  },
  {
    slug: 'shirtwestern',
    description: 'Western Shirt',
    price: 1400,
  },
  {
    slug: 'blouse',
    description: 'Blouse',
    price: 1050,
  },
  {
    slug: 'vest',
    description: 'Vest',
    price: 850,
  },
  {
    slug: 'tie',
    description: 'Tie',
    price: 650,
  },
  {
    slug: 'dress',
    description: 'Dress (Plain)',
    price: 1650,
  },
  {
    slug: 'dressformal',
    description: 'Dress (Formal)',
    price: 2200,
  },
  {
    slug: 'skirt',
    description: 'Skirt (Plain)',
    price: 1250,
  },
  {
    slug: 'skirtlong',
    description: 'Skirt (Long)',
    price: 1500,
  },
  {
    slug: 'sweater',
    description: 'Sweater',
    price: 1200,
  },
  {
    slug: 'tuxedo',
    description: 'Tuxedo - 2 piece',
    price: 2500,
  },
  {
    slug: 'shirtformal',
    description: 'Formal Shirt',
    price: 1100,
  },
  {
    slug: 'shorts',
    description: 'Shorts',
    price: 800,
  },
  {
    slug: 'coat',
    description: 'Coat/Raincoat',
    price: 2200,
  },
];

// Add an ID to each for calculations
const priceList = priceListUnordered.map((x, i) => {
  x.id = i + 1;
  return x;
});

export default priceList;
