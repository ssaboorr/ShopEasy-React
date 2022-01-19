const products = [
{
  fashion : [
    {
      _id: 1,
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
      _id: 2,
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
      _id: 3,
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
      _id: 4,
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
      _id: 5,
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
      _id: 6,
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
      _id: 7,
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
      _id: 8,
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
  ]
},
{
  footwear : [
    {
      _id: 1,
      name: "Women Floral Print Lounge T-Shirt",
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
      _id: 2,
      name: "Pack of 2 Round Neck T-Shirts",
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
      _id: 3,
      name: "Native Youth",
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
      _id: 4,
      name: "Print Crop Lounge Top",
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
      _id: 5,
      name: "Crochet Detail Lightweight Top",
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
      _id: 6,
      name: "Juventus Henley Neck Jersey",
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
      _id: 7,
      name: "Mavericks Drake Tank Top",
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
      _id: 8,
      name: "Printed Polo Collar T-shirt",
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
  ]
},
{
  phone : [
    {
      _id: 1,
      name: "Apple iPhone 13 Pro (128GB) - Sierra Blue",
      image:
        "https://m.media-amazon.com/images/I/31TCJmM4+mL._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "IPHONE",
      price: 120000,
      countInStock: 22,
      rating: 4.8,
      numReviews: 44,
    },
    {
      _id: 2,
      name: "OnePlus 9 5G (Winter Mist, 12GB RAM, 256GB Storage)",
      image:
        "https://m.media-amazon.com/images/I/417uExCG6KL._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "ONEPLUS",
      price: 50000,
      countInStock: 10,
      rating: 4.5,
      numReviews: 10,
    },
    {
      _id: 3,
      name: "Samsung Galaxy S21 Ultra 5G (Phantom Black, 12GB RAM, 256GB Storage)",
      image: "https://m.media-amazon.com/images/I/41Vsckg2YEL._SS40_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "SAMSUNG",
      price: 110000,
      countInStock: 15,
      rating: 4.6,
      numReviews: 15,
    },
    {
      _id: 4,
      name: "Redmi Note 10T 5G (Graphite Black, 4GB RAM, 64GB Storage) ",
      image:
        "https://m.media-amazon.com/images/I/41JMIe2FHuL._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "REDMI",
      price: 14000,
      countInStock: 45,
      rating: 4.0,
      numReviews: 12,
    },
    {
      _id: 5,
      name: "iQOO 7 Legend 5G (Legendary Track Design, 8GB RAM, 128GB Storage) ",
      image:
        "https://m.media-amazon.com/images/I/31AO0iePmCL._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "IQ00",
      price: 36000,
      countInStock: 15,
      rating: 3.6,
      numReviews: 5,
    },
    {
      _id: 6,
      name: "Vivo X60 Pro (Shimmer Blue, 12GB RAM, 256GB Storage) ",
      image:
        "https://m.media-amazon.com/images/I/41YG7YMOfHL._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "VIVO",
      price: 48000,
      countInStock: 15,
      rating: 4.1,
      numReviews: 35,
    },
    {
      _id: 7,
      name: "Apple iPhone 12 (64GB) - White",
      image:
        "https://m.media-amazon.com/images/I/317JiGToz-L._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "IPHONE",
      price: 56000,
      countInStock: 35,
      rating: 4.6,
      numReviews: 39,
    },
    {
      _id: 8,
      name: "OnePlus Nord 2 5G (Green Woods, 12GB RAM, 256GB Storage)",
      image:
        "https://m.media-amazon.com/images/I/41nnas3rFqL._SX38_SY50_CR,0,0,38,50_.jpg",
      description:
        "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
      brand: "ONEPLUS",
      price: 27000,
      countInStock: 36,
      rating: 4.3,
      numReviews: 27,
    },
  ]
}

];



export default products;
// module.exports = products
