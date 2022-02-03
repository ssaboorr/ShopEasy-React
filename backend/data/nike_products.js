const products = [
  {
    name: "Air Force 1",
    image1: "/images/nike_data/men/casuals/air-force-1-07_1.jpeg",
    image2: "/images/nike_data/men/casuals/air-force-1-07_2.png",
    image3: "/images/nike_data/men/casuals/air-force-1-07_3.png",
    image4: "/images/nike_data/men/casuals/air-force-1-07_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 12000,
    countInStock: 22,
    rating: 4.6,
    numReviews: 4,
    type: "casuals",
  },
  {
    name: "Air Force Tempo",
    image1:
      "/images/nike_data/men/casuals/air-more-uptempo-96-shoes-KwM99n_1.jpeg",
    image2:
      "/images/nike_data/men/casuals/air-more-uptempo-96-shoes-KwM99n_2.png",
    image3:
      "/images/nike_data/men/casuals/air-more-uptempo-96-shoes-KwM99n_3.png",
    image4:
      "/images/nike_data/men/casuals/air-more-uptempo-96-shoes-KwM99n_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 8000,
    countInStock: 12,
    rating: 4.2,
    numReviews: 9,
    type: "casuals",
  },
  {
    name: "Air Force LV",
    image1:
      "/images/nike_data/men/casuals/air-force-1-07-lv8-shoe-dGlKF3_1.jpeg",
    image2:
      "/images/nike_data/men/casuals/air-force-1-07-lv8-shoe-dGlKF3_2.png",
    image3:
      "/images/nike_data/men/casuals/air-force-1-07-lv8-shoe-dGlKF3_3.png",
    image4:
      "/images/nike_data/men/casuals/air-force-1-07-lv8-shoe-dGlKF3_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 9000,
    countInStock: 12,
    rating: 3.5,
    numReviews: 35,
    type: "casuals",
  },
  {
    name: "Zoom Vapor",
    image1: "/images/nike_data/men/casuals/nikecourt-zoom-vapor-cage-4_1.jpeg",
    image2: "/images/nike_data/men/casuals/nikecourt-zoom-vapor-cage-4_2.png",
    image3: "/images/nike_data/men/casuals/nikecourt-zoom-vapor-cage-4_3.png",
    image4: "/images/nike_data/men/casuals/nikecourt-zoom-vapor-cage-4_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 10000,
    countInStock: 32,
    rating: 4.0,
    numReviews: 17,
    type: "casuals",
  },
  {
    name: "Air Force Lux",
    image1:
      "/images/nike_data/men/casuals/air-force-1-luxe-shoes-651TPJ_1.jpeg",
    image3: "/images/nike_data/men/casuals/air-force-1-luxe-shoes-651TPJ_2.png",
    image4: "/images/nike_data/men/casuals/air-force-1-luxe-shoes-651TPJ_3.png",
    image2: "/images/nike_data/men/casuals/air-force-1-luxe-shoes-651TPJ_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 18000,
    countInStock: 6,
    rating: 4.8,
    numReviews: 33,
    type: "casuals",
  },
  {
    name: "Ishod Wair",
    image1:
      "/images/nike_data/men/casuals/sb-ishod-wair-skate-shoes-BFw5xR_1.jpeg",
    image2:
      "/images/nike_data/men/casuals/sb-ishod-wair-skate-shoes-BFw5xR_2.png",
    image3:
      "/images/nike_data/men/casuals/sb-ishod-wair-skate-shoes-BFw5xR_3.png",
    image4:
      "/images/nike_data/men/casuals/sb-ishod-wair-skate-shoes-BFw5xR_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 4500,
    countInStock: 8,
    rating: 2.5,
    numReviews: 11,
    type: "casuals",
  },
  {
    name: "Air Max 97",
    image1: "/images/nike_data/men/casuals/air-max-97-se-shoes-Qt2gjv_1.jpeg",
    image2: "/images/nike_data/men/casuals/air-max-97-se-shoes-Qt2gjv_2.png",
    image3: "/images/nike_data/men/casuals/air-max-97-se-shoes-Qt2gjv_3.png",
    image4: "/images/nike_data/men/casuals/air-max-97-se-shoes-Qt2gjv_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 14000,
    countInStock: 42,
    rating: 3.6,
    numReviews: 8,
    type: "casuals",
  },
  {
    name: "Nyjah",
    image1:
      "/images/nike_data/men/casuals/sb-nyjah-free-2-skate-shoe-7tHZJZ_1.jpeg",
    image2:
      "/images/nike_data/men/casuals/sb-nyjah-free-2-skate-shoe-7tHZJZ_2.png",
    image3:
      "/images/nike_data/men/casuals/sb-nyjah-free-2-skate-shoe-7tHZJZ_3.png",
    image4:
      "/images/nike_data/men/casuals/sb-nyjah-free-2-skate-shoe-7tHZJZ_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men casuals",
    price: 5000,
    countInStock: 32,
    rating: 4.1,
    numReviews: 30,
    type: "casuals",
  },
  {
    name: "Mercurial Vapor 14",
    image1:
      "/images/nike_data/men/football/custom-nike-mercurial-vapor-14-elite-by-you_1.jpeg",
    image2:
      "/images/nike_data/men/football/custom-nike-mercurial-vapor-14-elite-by-you_2.png",
    image3:
      "/images/nike_data/men/football/custom-nike-mercurial-vapor-14-elite-by-you_3.png",
    image4:
      "/images/nike_data/men/football/custom-nike-mercurial-vapor-14-elite-by-you_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 18000,
    countInStock: 33,
    rating: 4.3,
    numReviews: 20,
    type: "football",
  },
  {
    name: "Elite FG",
    image1:
      "/images/nike_data/men/football/elite-fg-football-boot-wRNH0g_1.jpeg",
    image2:
      "/images/nike_data/men/football/elite-fg-football-boot-wRNH0g_2.png",
    image3:
      "/images/nike_data/men/football/elite-fg-football-boot-wRNH0g_3.png",
    image4:
      "/images/nike_data/men/football/elite-fg-football-boot-wRNH0g_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 24000,
    countInStock: 55,
    rating: 4.9,
    numReviews: 55,
    type: "football",
  },
  {
    name: "Mercurial Superfly 8 Pro",
    image1:
      "/images/nike_data/men/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_1.jpeg",
    image2:
      "/images/nike_data/men/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_2.png",
    image3:
      "/images/nike_data/men/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_3.png",
    image4:
      "/images/nike_data/men/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 24000,
    countInStock: 12,
    rating: 4.8,
    numReviews: 66,
    type: "football",
  },
  {
    name: "Phantom Gt2 Elite",
    image1:
      "/images/nike_data/men/football/phantom-gt2-elite-fg-football-boot-rbb5D9_1.jpeg",
    image2:
      "/images/nike_data/men/football/phantom-gt2-elite-fg-football-boot-rbb5D9_2.png",
    image3:
      "/images/nike_data/men/football/phantom-gt2-elite-fg-football-boot-rbb5D9_3.png",
    image4:
      "/images/nike_data/men/football/phantom-gt2-elite-fg-football-boot-rbb5D9_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 16000,
    countInStock: 16,
    rating: 3.9,
    numReviews: 28,
    type: "football",
  },
  {
    name: "Premier 3 FG",
    image1:
      "/images/nike_data/men/football/premier-3-fg-football-boots-5CPFpf_1.jpeg",
    image2:
      "/images/nike_data/men/football/premier-3-fg-football-boots-5CPFpf_2.png",
    image3:
      "/images/nike_data/men/football/premier-3-fg-football-boots-5CPFpf_3.png",
    image4:
      "/images/nike_data/men/football/premier-3-fg-football-boots-5CPFpf_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 5300,
    countInStock: 14,
    rating: 3.3,
    numReviews: 5,
    type: "football",
  },
  {
    name: "SuperFly 8 Elite",
    image1: "/images/nike_data/men/football/superfly-8-elite-by-you_1.jpeg",
    image2: "/images/nike_data/men/football/superfly-8-elite-by-you_2.png",
    image3: "/images/nike_data/men/football/superfly-8-elite-by-you_3.png",
    image4: "/images/nike_data/men/football/superfly-8-elite-by-you_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 13500,
    countInStock: 29,
    rating: 4.5,
    numReviews: 11,
    type: "football",
  },
  {
    name: "Tiempo Legend 9",
    image1: "/images/nike_data/men/football/tiempo-legend-9-club_1.jpeg",
    image2: "/images/nike_data/men/football/tiempo-legend-9-club_2.png",
    image3: "/images/nike_data/men/football/tiempo-legend-9-club_3.png",
    image4: "/images/nike_data/men/football/tiempo-legend-9-club_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 8500,
    countInStock: 0,
    rating: 4.3,
    numReviews: 44,
    type: "football",
  },
  {
    name: "Vapor",
    image1: "/images/nike_data/men/football/vapor_1.jpeg",
    image2: "/images/nike_data/men/football/vapor_2.png",
    image3: "/images/nike_data/men/football/vapor_3.png",
    image4: "/images/nike_data/men/football/vapor_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "men",
    category: "Men football",
    price: 3500,
    countInStock: 22,
    rating: 2.3,
    numReviews: 18,
    type: "football",
  },
  {
    name: "Air Force 1",
    image1:
      "/images/nike_data/women/casuals/air-force-1-fontanka-shoes-sJrqz3_1.jpeg",
    image2:
      "/images/nike_data/women/casuals/air-force-1-fontanka-shoes-sJrqz3_2.png",
    image3:
      "/images/nike_data/women/casuals/air-force-1-fontanka-shoes-sJrqz3_3.png",
    image4:
      "/images/nike_data/women/casuals/air-force-1-fontanka-shoes-sJrqz3_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 83000,
    countInStock: 12,
    rating: 4.8,
    numReviews: 14,
    type: "casuals",
  },
  {
    name: "Air Jordan 1",
    image1:
      "/images/nike_data/women/casuals/air-jordan-1-low-se-shoes-GKDhB0_1.jpeg",
    image2:
      "/images/nike_data/women/casuals/air-jordan-1-low-se-shoes-GKDhB0_2.png",
    image3:
      "/images/nike_data/women/casuals/air-jordan-1-low-se-shoes-GKDhB0_3.png",
    image4:
      "/images/nike_data/women/casuals/air-jordan-1-low-se-shoes-GKDhB0_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 6300,
    countInStock: 22,
    rating: 3.7,
    numReviews: 9,
    type: "casuals",
  },
  {
    name: "Air Max 97",
    image1: "/images/nike_data/women/casuals/air-max-97-shoes-B2TV3Z_1.jpeg",
    image2: "/images/nike_data/women/casuals/air-max-97-shoes-B2TV3Z_2.png",
    image3: "/images/nike_data/women/casuals/air-max-97-shoes-B2TV3Z_3.png",
    image4: "/images/nike_data/women/casuals/air-max-97-shoes-B2TV3Z_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 12000,
    countInStock: 42,
    rating: 4.2,
    numReviews: 42,
    type: "casuals",
  },
  {
    name: "Blazer Mid 77",
    image1:
      "/images/nike_data/women/casuals/blazer-mid-77-essential-shoes-nVTzf8_1.jpeg",
    image2:
      "/images/nike_data/women/casuals/blazer-mid-77-essential-shoes-nVTzf8_2.png",
    image3:
      "/images/nike_data/women/casuals/blazer-mid-77-essential-shoes-nVTzf8_3.png",
    image4:
      "/images/nike_data/women/casuals/blazer-mid-77-essential-shoes-nVTzf8_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 4500,
    countInStock: 12,
    rating: 2.8,
    numReviews: 17,
    type: "casuals",
  },
  {
    name: "Dunk High",
    image1: "/images/nike_data/women/casuals/dunk-high-lx-shoes-4gJ041_1.jpeg",
    image2: "/images/nike_data/women/casuals/dunk-high-lx-shoes-4gJ041_2.png",
    image3: "/images/nike_data/women/casuals/dunk-high-lx-shoes-4gJ041_3.png",
    image4: "/images/nike_data/women/casuals/dunk-high-lx-shoes-4gJ041_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 7900,
    countInStock: 30,
    rating: 4.7,
    numReviews: 33,
    type: "casuals",
  },
  {
    name: "Dunk Low",
    image1: "/images/nike_data/women/casuals/dunk-low-se-shoes-zmKqzw_1.jpeg",
    image2: "/images/nike_data/women/casuals/dunk-low-se-shoes-zmKqzw_2.png",
    image3: "/images/nike_data/women/casuals/dunk-low-se-shoes-zmKqzw_3.png",
    image4: "/images/nike_data/women/casuals/dunk-low-se-shoes-zmKqzw_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 6000,
    countInStock: 12,
    rating: 4.3,
    numReviews: 47,
    type: "casuals",
  },
  {
    name: "Metcon 7",
    image1:
      "/images/nike_data/women/casuals/metcon-7-training-shoes-knCh3v_1.jpeg",
    image2:
      "/images/nike_data/women/casuals/metcon-7-training-shoes-knCh3v_2.png",
    image3:
      "/images/nike_data/women/casuals/metcon-7-training-shoes-knCh3v_3.png",
    image4:
      "/images/nike_data/women/casuals/metcon-7-training-shoes-knCh3v_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 9300,
    countInStock: 13,
    rating: 2.8,
    numReviews: 29,
    type: "casuals",
  },
  {
    name: "Serena Williams",
    image1:
      "/images/nike_data/women/casuals/ryz-365-2-serena-williams-design-crew-shoe-3wBZKF_1.jpeg",
    image2:
      "/images/nike_data/women/casuals/ryz-365-2-serena-williams-design-crew-shoe-3wBZKF_2.png",
    image3:
      "/images/nike_data/women/casuals/ryz-365-2-serena-williams-design-crew-shoe-3wBZKF_3.png",
    image4:
      "/images/nike_data/women/casuals/ryz-365-2-serena-williams-design-crew-shoe-3wBZKF_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women casuals",
    price: 14000,
    countInStock: 16,
    rating: 4.1,
    numReviews: 97,
    type: "casuals",
  },
  {
    name: "Mercurial Vapor 14",
    image1:
      "/images/nike_data/women/football/custom-nike-mercurial-vapor-14-elite-by-you_1.jpeg",
    image2:
      "/images/nike_data/women/football/custom-nike-mercurial-vapor-14-elite-by-you_2.png",
    image3:
      "/images/nike_data/women/football/custom-nike-mercurial-vapor-14-elite-by-you_3.png",
    image4:
      "/images/nike_data/women/football/custom-nike-mercurial-vapor-14-elite-by-you_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 16000,
    countInStock: 28,
    rating: 4.4,
    numReviews: 43,
    type: "football",
  },
  {
    name: "Elite FG",
    image1:
      "/images/nike_data/women/football/elite-fg-football-boot-wRNH0g_1.jpeg",
    image2:
      "/images/nike_data/women/football/elite-fg-football-boot-wRNH0g_2.png",
    image3:
      "/images/nike_data/women/football/elite-fg-football-boot-wRNH0g_3.png",
    image4:
      "/images/nike_data/women/football/elite-fg-football-boot-wRNH0g_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 12000,
    countInStock: 22,
    rating: 4.6,
    numReviews: 4,
    type: "football",
  },
  {
    name: "Mercurial Superfly 8 Pro",
    image1:
      "/images/nike_data/women/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_1.jpeg",
    image2:
      "/images/nike_data/women/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_2.png",
    image3:
      "/images/nike_data/women/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_3.png",
    image4:
      "/images/nike_data/women/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 24000,
    countInStock: 23,
    rating: 4.9,
    numReviews: 41,
    type: "football",
  },
  {
    name: "Vapor 14 Elite",
    image1:
      "/images/nike_data/women/football/mercurial-vapor-14-elite-fg-football-boots-GzzgK8_1.jpeg",
    image2:
      "/images/nike_data/women/football/mercurial-vapor-14-elite-fg-football-boots-GzzgK8_2.png",
    image3:
      "/images/nike_data/women/football/mercurial-vapor-14-elite-fg-football-boots-GzzgK8_3.png",
    image4:
      "/images/nike_data/women/football/mercurial-vapor-14-elite-fg-football-boots-GzzgK8_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 13500,
    countInStock: 0,
    rating: 4.6,
    numReviews: 23,
    type: "football",
  },
  {
    name: "Phantom Gt2 Elite",
    image1:
      "/images/nike_data/women/football/phantom-gt2-elite-fg-football-boot-rbb5D9_1.jpeg",
    image2:
      "/images/nike_data/women/football/phantom-gt2-elite-fg-football-boot-rbb5D9_2.png",
    image3:
      "/images/nike_data/women/football/phantom-gt2-elite-fg-football-boot-rbb5D9_3.png",
    image4:
      "/images/nike_data/women/football/phantom-gt2-elite-fg-football-boot-rbb5D9_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 22000,
    countInStock: 66,
    rating: 4.2,
    numReviews: 25,
    type: "football",
  },
  {
    name: "Premier 3 FG",
    image1:
      "/images/nike_data/women/football/premier-3-fg-football-boots-5CPFpf_1.jpeg",
    image2:
      "/images/nike_data/women/football/premier-3-fg-football-boots-5CPFpf_2.png",
    image3:
      "/images/nike_data/women/football/premier-3-fg-football-boots-5CPFpf_3.png",
    image4:
      "/images/nike_data/women/football/premier-3-fg-football-boots-5CPFpf_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 9000,
    countInStock: 2,
    rating: 3.8,
    numReviews: 34,
    type: "football",
  },
  {
    name: "SuperFly 8 Elite",
    image1: "/images/nike_data/women/football/superfly-8-elite-by-you_1.jpeg",
    image2: "/images/nike_data/women/football/superfly-8-elite-by-you_2.png",
    image3: "/images/nike_data/women/football/superfly-8-elite-by-you_3.png",
    image4: "/images/nike_data/women/football/superfly-8-elite-by-you_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 15000,
    countInStock: 22,
    rating: 4.7,
    numReviews: 44,
    type: "football",
  },
  {
    name: "Tiempo Legend 9",
    image1: "/images/nike_data/women/football/tiempo-legend-9-club_1.jpeg",
    image2: "/images/nike_data/women/football/tiempo-legend-9-club_2.png",
    image3: "/images/nike_data/women/football/tiempo-legend-9-club_3.png",
    image4: "/images/nike_data/women/football/tiempo-legend-9-club_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "women",
    category: "Women football",
    price: 8000,
    countInStock: 6,
    rating: 4.2,
    numReviews: 34,
    type: "football",
  },

  {
    name: "Air More UpTempo",
    image1:
      "/images/nike_data/kids/casuals/air-more-uptempo-younger-shoes-XB4Nvb_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/air-more-uptempo-younger-shoes-XB4Nvb_2.png",
    image3:
      "/images/nike_data/kids/casuals/air-more-uptempo-younger-shoes-XB4Nvb_3.png",
    image4:
      "/images/nike_data/kids/casuals/air-more-uptempo-younger-shoes-XB4Nvb_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 3500,
    countInStock: 12,
    rating: 2.5,
    numReviews: 3,
    type: "casuals",
  },
  {
    name: "Dynamo Go",
    image1:
      "/images/nike_data/kids/casuals/dynamo-go-younger-easy-on-off-shoes-dCf2Zv_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/dynamo-go-younger-easy-on-off-shoes-dCf2Zv_2.png",
    image3:
      "/images/nike_data/kids/casuals/dynamo-go-younger-easy-on-off-shoes-dCf2Zv_3.png",
    image4:
      "/images/nike_data/kids/casuals/dynamo-go-younger-easy-on-off-shoes-dCf2Zv_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 3300,
    countInStock: 14,
    rating: 4.6,
    numReviews: 2,
    type: "casuals",
  },
  {
    name: "Force 1 LE",
    image1:
      "/images/nike_data/kids/casuals/force-1-le-younger-shoe-rg3gD7_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/force-1-le-younger-shoe-rg3gD7_2.png",
    image3:
      "/images/nike_data/kids/casuals/force-1-le-younger-shoe-rg3gD7_3.png",
    image4:
      "/images/nike_data/kids/casuals/force-1-le-younger-shoe-rg3gD7_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 4000,
    countInStock: 9,
    rating: 4.2,
    numReviews: 5,
    type: "casuals",
  },
  {
    name: "Force 1 LV8",
    image1:
      "/images/nike_data/kids/casuals/force-1-lv8-younger-shoes-kHqhbD_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/force-1-lv8-younger-shoes-kHqhbD_2.png",
    image3:
      "/images/nike_data/kids/casuals/force-1-lv8-younger-shoes-kHqhbD_3.png",
    image4:
      "/images/nike_data/kids/casuals/force-1-lv8-younger-shoes-kHqhbD_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 2000,
    countInStock: 22,
    rating: 3.4,
    numReviews: 4,
    type: "casuals",
  },
  {
    name: "Kyrie Infinity SE",
    image1:
      "/images/nike_data/kids/casuals/kyrie-infinity-se-younger-shoes-GCt5C2_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/kyrie-infinity-se-younger-shoes-GCt5C2_2.png",
    image3:
      "/images/nike_data/kids/casuals/kyrie-infinity-se-younger-shoes-GCt5C2_3.png",
    image4:
      "/images/nike_data/kids/casuals/kyrie-infinity-se-younger-shoes-GCt5C2_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 1700,
    countInStock: 8,
    rating: 3.4,
    numReviews: 4,
    type: "casuals",
  },
  {
    name: "Kyrie Infinity",
    image1:
      "/images/nike_data/kids/casuals/kyrie-infinity-younger-shoes-1TqJGG_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/kyrie-infinity-younger-shoes-1TqJGG_2.png",
    image3:
      "/images/nike_data/kids/casuals/kyrie-infinity-younger-shoes-1TqJGG_3.png",
    image4:
      "/images/nike_data/kids/casuals/kyrie-infinity-younger-shoes-1TqJGG_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 2400,
    countInStock: 2,
    rating: 3,
    numReviews: 4,
    type: "casuals",
  },
  {
    name: "Lebron 19",
    image1:
      "/images/nike_data/kids/casuals/lebron-19-younger-shoes-tjWwzM_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/lebron-19-younger-shoes-tjWwzM_2.png",
    image3:
      "/images/nike_data/kids/casuals/lebron-19-younger-shoes-tjWwzM_3.png",
    image4:
      "/images/nike_data/kids/casuals/lebron-19-younger-shoes-tjWwzM_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 3600,
    countInStock: 7,
    rating: 4,
    numReviews: 9,
    type: "casuals",
  },
  {
    name: "Sky Jorden",
    image1:
      "/images/nike_data/kids/casuals/sky-jordan-1-younger-shoe-sWmN77_1.jpeg",
    image2:
      "/images/nike_data/kids/casuals/sky-jordan-1-younger-shoe-sWmN77_2.png",
    image3:
      "/images/nike_data/kids/casuals/sky-jordan-1-younger-shoe-sWmN77_3.png",
    image4:
      "/images/nike_data/kids/casuals/sky-jordan-1-younger-shoe-sWmN77_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids casuals",
    price: 2000,
    countInStock: 6,
    rating: 3.1,
    numReviews: 12,
    type: "casuals",
  },
  {
    name: "Mercurial Vapor 14",
    image1:
      "/images/nike_data/kids/football/custom-nike-mercurial-vapor-14-elite-by-you_1.jpeg",
    image2:
      "/images/nike_data/kids/football/custom-nike-mercurial-vapor-14-elite-by-you_2.png",
    image3:
      "/images/nike_data/kids/football/custom-nike-mercurial-vapor-14-elite-by-you_3.png",
    image4:
      "/images/nike_data/kids/football/custom-nike-mercurial-vapor-14-elite-by-you_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 5000,
    countInStock: 1,
    rating: 2.8,
    numReviews: 14,
    type: "football",
  },
  {
    name: "Elite FG",
    image1:
      "/images/nike_data/kids/football/elite-fg-football-boot-wRNH0g_1.jpeg",
    image2:
      "/images/nike_data/kids/football/elite-fg-football-boot-wRNH0g_2.png",
    image3:
      "/images/nike_data/kids/football/elite-fg-football-boot-wRNH0g_3.png",
    image4:
      "/images/nike_data/kids/football/elite-fg-football-boot-wRNH0g_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 3900,
    countInStock: 8,
    rating: 2,
    numReviews: 5,
    type: "football",
  },
  {
    name: "Mercurial Superfly 8 Pro",
    image1:
      "/images/nike_data/kids/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_1.jpeg",
    image2:
      "/images/nike_data/kids/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_2.png",
    image3:
      "/images/nike_data/kids/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_3.png",
    image4:
      "/images/nike_data/kids/football/mercurial-superfly-8-pro-km-fg-football-boot-88vSvB_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 6000,
    countInStock: 12,
    rating: 4.6,
    numReviews: 4,
    type: "football",
  },
  {
    name: "Phantom Gt2 Elite",
    image1:
      "/images/nike_data/kids/football/phantom-gt2-elite-fg-football-boot-rbb5D9_1.jpeg",
    image2:
      "/images/nike_data/kids/football/phantom-gt2-elite-fg-football-boot-rbb5D9_2.png",
    image3:
      "/images/nike_data/kids/football/phantom-gt2-elite-fg-football-boot-rbb5D9_3.png",
    image4:
      "/images/nike_data/kids/football/phantom-gt2-elite-fg-football-boot-rbb5D9_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 5000,
    countInStock: 10,
    rating: 4,
    numReviews: 14,
    type: "football",
  },
  {
    name: "Premier 3 FG",
    image1:
      "/images/nike_data/kids/football/premier-3-fg-football-boots-5CPFpf_1.jpeg",
    image2:
      "/images/nike_data/kids/football/premier-3-fg-football-boots-5CPFpf_2.png",
    image3:
      "/images/nike_data/kids/football/premier-3-fg-football-boots-5CPFpf_3.png",
    image4:
      "/images/nike_data/kids/football/premier-3-fg-football-boots-5CPFpf_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 3000,
    countInStock: 2,
    rating: 3,
    numReviews: 4,
    type: "football",
  },
  {
    name: "Superfly 8 elite",
    image1: "/images/nike_data/kids/football/superfly-8-elite-by-you_1.jpeg",
    image2: "/images/nike_data/kids/football/superfly-8-elite-by-you_2.png",
    image3: "/images/nike_data/kids/football/superfly-8-elite-by-you_3.png",
    image4: "/images/nike_data/kids/football/superfly-8-elite-by-you_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 12000,
    countInStock: 22,
    rating: 4,
    numReviews: 3,
    type: "football",
  },
  {
    name: "Tiempo Legend 9",
    image1: "/images/nike_data/kids/football/tiempo-legend-9-club_1.jpeg",
    image2: "/images/nike_data/kids/football/tiempo-legend-9-club_2.png",
    image3: "/images/nike_data/kids/football/tiempo-legend-9-club_3.png",
    image4: "/images/nike_data/kids/football/tiempo-legend-9-club_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 2600,
    countInStock: 12,
    rating: 2.7,
    numReviews: 41,
    type: "football",
  },
  {
    name: "Vapor",
    image1: "/images/nike_data/kids/football/vapor_1.jpeg",
    image2: "/images/nike_data/kids/football/vapor_2.png",
    image3: "/images/nike_data/kids/football/vapor_3.png",
    image4: "/images/nike_data/kids/football/vapor_4.png",
    description:
      "Etiam cursus condimentum vulputate. Nulla nisi orci, vulputate at dolor et, malesuada ultrices nisi. Ut varius ex ut purus porttitor, a facilisis orci condimentum. Nullam in elit et sapien ornare pellentesque at ac lorem.",
    brand: "Nike",
    gender: "kids",
    category: "Kids football",
    price: 1000,
    countInStock: 4,
    rating: 1,
    numReviews: 12,
    type: "football",
  },
];
export default products;
