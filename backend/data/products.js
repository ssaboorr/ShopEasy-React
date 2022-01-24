const products = [
  {
    name: "Women Floral Print Lounge T-Shirt",
    image: "/images/female_img_3.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Burberry",
    category: "Women Fashion",
    price: 12000,
    countInStock: 22,
    rating: 4.6,
    numReviews: 4,
  },
  {
    name: "Pack of 2 Round Neck T-Shirts",
    image: "/images/male_img_4.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Urban Outfitters",
    category: "Men Fashion",
    price: 8500,
    countInStock: 42,
    rating: 4.4,
    numReviews: 2,
  },
  {
    name: "Native Youth",
    image: "/images/male_img_2.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Ralph Lauren",
    category: "Men Fashion",
    price: 6000,
    countInStock: 18,
    rating: 4.5,
    numReviews: 2,
  },
  {
    name: "Print Crop Lounge Top",
    image: "/images/female_img_1.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Gucci",
    category: "Women Fashion",
    price: 21000,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    name: "Crochet Detail Lightweight Top",
    image: "/images/female_img_2.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Chanel",
    category: "Women Fashion",
    price: 43000,
    countInStock: 6,
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "Juventus Henley Neck Jersey",
    image: "/images/male_img_1.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Tom Ford",
    category: "Men Fashion",
    price: 16000,
    countInStock: 21,
    rating: 4.1,
    numReviews: 3,
  },
  {
    name: "Mavericks Drake Tank Top",
    image: "/images/male_img_3.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men Fashion",
    price: 7500,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Printed Polo Collar T-shirt",
    image: "/images/female_img_4.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Chanel",
    category: "Women Fashion",
    price: 9500,
    countInStock: 0,
    rating: 4.2,
    numReviews: 5,
  },
  {
    name: "Adidas Running Shoes",
    image: "/images/3mc-vulc-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Burberry",
    category: "Women Fashion",
    price: 12000,
    countInStock: 22,
    rating: 4.6,
    numReviews: 4,
  },
  {
    name: "Manchester United Boost",
    image: "/images/manchester-united-zx-2k-boost-2.0-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Urban Outfitters",
    category: "Men Fashion",
    price: 8500,
    countInStock: 42,
    rating: 4.4,
    numReviews: 2,
  },
  {
    name: "Adidas Multix Shoes",
    image: "/images/multix-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Ralph Lauren",
    category: "Men Fashion",
    price: 6000,
    countInStock: 18,
    rating: 4.5,
    numReviews: 2,
  },
  {
    name: "Ny 90 Stripes Shoes",
    image: "/images/ny-90-stripes-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Gucci",
    category: "Women Fashion",
    price: 21000,
    countInStock: 8,
    rating: 4.8,
    numReviews: 12,
  },
  {
    name: "Adidas SuperStar",
    image: "/images/superstar-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Chanel",
    category: "Women Fashion",
    price: 43000,
    countInStock: 6,
    rating: 4.9,
    numReviews: 8,
  },
  {
    name: "ZX 1k Boost",
    image: "/images/zx-1k-boost-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Tom Ford",
    category: "Men Fashion",
    price: 16000,
    countInStock: 21,
    rating: 4.1,
    numReviews: 3,
  },
  {
    name: "AX 2k Boost",
    image: "/images/zx-2k-boost-2.0-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Calvin Klein",
    category: "Men Fashion",
    price: 7500,
    countInStock: 25,
    rating: 3.4,
    numReviews: 3,
  },
  {
    name: "Adidas Ultra Boost",
    image: "/images/zx-2k-boost-2.0-shoes.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Chanel",
    category: "Women Fashion",
    price: 9500,
    countInStock: 0,
    rating: 4.2,
    numReviews: 5,
  },
  {
    name: "Apple iPhone 13 Pro (128GB) - Sierra Blue",
    image: "/images/61jLiCovxVL._SL1500_.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "IPHONE",
    category: "Women Fashion",

    price: 120000,
    countInStock: 22,
    rating: 4.8,
    numReviews: 44,
  },
  {
    name: "OnePlus 9 5G (Winter Mist, 12GB RAM, 256GB Storage)",
    image: "/images/6196GP6VIaL._SL1500_.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "ONEPLUS",
    category: "Women Fashion",

    price: 50000,
    countInStock: 10,
    rating: 4.5,
    numReviews: 10,
  },
  {
    name: "Samsung Galaxy S21 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)",
    image: "/images/91f+vkhKfnL._AC_UY218_.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "SAMSUNG",
    category: "Women Fashion",

    price: 110000,
    countInStock: 15,
    rating: 4.6,
    numReviews: 15,
  },
  {
    name: "Redmi Note 10T 5G (Graphite Black, 4GB RAM, 64GB Storage) ",
    image: "/images/41Nv13Yy21S._SL1200_.jpg",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "REDMI",
    category: "Women Fashion",

    price: 14000,
    countInStock: 45,
    rating: 4.0,
    numReviews: 12,
  },
  {
    name: "iQOO 7 Legend 5G (Legendary Track Design, 8GB RAM, 128GB Storage) ",
    image: "/images/91f+vkhKfnL._AC_UY218_.jpg",

    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "IQ00",
    category: "Women Fashion",

    price: 36000,
    countInStock: 15,
    rating: 3.6,
    numReviews: 5,
  },
  {
    name: "Vivo X60 Pro (Shimmer Blue, 12GB RAM, 256GB Storage) ",
    image: "/images/212eusUY0tL.jpg",

    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "VIVO",
    category: "Women Fashion",

    price: 48000,
    countInStock: 15,
    rating: 4.1,
    numReviews: 35,
  },
  {
    name: "Apple iPhone 12 (64GB) - White",
    image: "/images/71ZOtNdaZCL._SL1500_.jpg",

    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "IPHONE",
    category: "Women Fashion",

    price: 56000,
    countInStock: 35,
    rating: 4.6,
    numReviews: 39,
  },
  {
    name: "OnePlus Nord 2 5G (Green Woods, 12GB RAM, 256GB Storage)",
    image: "/images/6196GP6VIaL._SL1500_.jpg",

    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "ONEPLUS",
    category: "Women Fashion",

    price: 27000,
    countInStock: 36,
    rating: 4.3,
    numReviews: 27,
  },
];

export default products;
