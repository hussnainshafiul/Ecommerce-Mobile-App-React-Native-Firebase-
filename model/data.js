const PRODUCTS = [
  {
    id: 42419,
    Category: "Apparel",
    Gender: "girl",
    Title: "Gini and Jony Girls Knit White Top",
    image: require("../assets/image1.png"),
    price: "250",
    description:
      "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  },
  {
    id: 34009,
    Category: "Apparel",
    Gender: "girl",

    Title: "Gini and Jony Girls Black Top",
    image: require("../assets/image2.png"),
    price: "200",
    description:
      "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  },
  {
    id: 40143,
    Category: "Apparel",
    Title: "Gini and Jony Girls Pretty Blossom Blue Top",
    Gender: "girl",

    image: require("../assets/image3.png"),
    price: "400",
    description:
      "Stylish and comfortable girl's apparel designed to showcase individuality and express personal fashion preferences, offering a blend of trendy patterns, vibrant colors, and quality materials",
  },
  {
    id: 3324,
    Category: "Apparel",
    Gender: "Boys",

    Title: "KKR Boys Fangear Tee",
    image: require("../assets/boy.png"),
    price: "400",
    description:
      "Elevate your young gentleman's wardrobe with our meticulously crafted boys' apparel. Explore a curated selection of stylish and versatile pieces, from tailored blazers that exude dapper charm.",
  },
  {
    id: 4729,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Disney Kids Boy's Crew Sea Life Sialing Green Teen Kidswear",
    image: require("../assets/Boys1.png"),
    price: "3190",
    description:
      "Elevate your young gentleman's wardrobe with our meticulously crafted boys' apparel. Explore a curated selection of stylish and versatile pieces, from tailored blazers that exude dapper charm.",
  },
  {
    id: 8322,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Doodle Boy's Route 66 Biker Blue Teen Kidswear",
    image: require("../assets/Boys2.png"),
    price: "4710",
    description:
      "Elevate your young gentleman's wardrobe with our meticulously crafted boys' apparel. Explore a curated selection of stylish and versatile pieces, from tailored blazers that exude dapper charm.",
  },
  {
    id: 34036,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Palm Tree Boys Check Blue Shirt",
    image: require("../assets/Boys3.png"),
    price: "3920",
    description:
      "Elevate your young gentleman's wardrobe with our meticulously crafted boys' apparel. Explore a curated selection of stylish and versatile pieces, from tailored blazers that exude dapper charm.",
  },
  {
    id: 8325,
    Category: "Apparel",
    Gender: "Boys",
    Title: "Doodle Boy's Athletic 77 Dept Yellow Teen Kidswear",
    image: require("../assets/Boys4.png"),
    price: "5820",
    description:
      "Elevate your young gentleman's wardrobe with our meticulously crafted boys' apparel. Explore a curated selection of stylish and versatile pieces, from tailored blazers that exude dapper charm.",
  },
  {
    id: 9204,
    Category: "Footwear",
    Gender: "Men",
    Title: "Puma Men Future Cat Remix SF Black Casual Shoes",
    image: require("../assets/9204.jpg"),
    price: 4090,
    description:
      "Elevate your stride with our exclusive collection of men's footwear. Unveil exceptional comfort fused with modern designs.Step into a world where style meets substance,and footwear redefined.",
  },
  {
    id: 18653,
    Category: "Footwear",
    Gender: "Men",
    Title: "Fila Men Cush Flex Black Slippers",
    image: require("../assets/18653.jpg"),
    price: 3800,
    description:
      "Elevate your stride with our exclusive collection of men's footwear. Unveil exceptional comfort fused with modern designs.Step into a world where style meets substance,and footwear redefined.",
  },
  {
    id: 12967,
    Category: "Footwear",
    Gender: "Men",
    Title: "ADIDAS Men Spry M Black Sandals",
    image: require("../assets/12967.jpg"),
    price: 3250,
    description:
      "Elevate your stride with our exclusive collection of men's footwear. Unveil exceptional comfort fused with modern designs.Step into a world where style meets substance,and footwear redefined.",
  },
  {
    id: 9036,
    Category: "Footwear",
    Gender: "Men",
    Title: "Buckaroo Men Flores Black Formal Shoes",
    image: require("../assets/9036.jpg"),
    price: 5450,
    description:
      "Elevate your stride with our exclusive collection of men's footwear. Unveil exceptional comfort fused with modern designs.Step into a world where style meets substance,and footwear redefined.",
  },
  {
    id: 39988,
    Category: "Footwear",
    Gender: "Men",
    Title: "Gas Men Europa White Shoes",
    image: require("../assets/39988.jpg"),
    price: 2630,
    description:
      "Elevate your stride with our exclusive collection of men's footwear. Unveil exceptional comfort fused with modern designs.Step into a world where style meets substance,and footwear redefined.",
  },
  {
    id: 59051,
    Category: "Footwear",
    Gender: "Women",
    Title: "Carlton London Women Black & Gold Toned Flats",
    image: require("../assets/59051.jpg"),
    price: 4560,
    description:
"Step into sophistication with our exquisite collection of women's footwear. Crafted with meticulous attention to detail, our shoes seamlessly combine trend-setting designs with premium materials, ensuring a luxurious experience for your feet."  },
  {
    id: 2886,
    Category: "Footwear",
    Gender: "Women",
    Title: "Catwalk Women Leather Brown Flats",
    image: require("../assets/2886.jpg"),
    price: 5790,
    description:
"Step into sophistication with our exquisite collection of women's footwear. Crafted with meticulous attention to detail, our shoes seamlessly combine trend-setting designs with premium materials, ensuring a luxurious experience for your feet."
  },
  {
    id: 54118,
    Category: "Footwear",
    Gender: "Women",
    Title: "Rocia Women Black Flats",
    image: require("../assets/54118.jpg"),
    price: 2550,
     description:
"Step into sophistication with our exquisite collection of women's footwear. Crafted with meticulous attention to detail, our shoes seamlessly combine trend-setting designs with premium materials, ensuring a luxurious experience for your feet."
  },
  {
    id: 2872,
    Category: "Footwear",
    Gender: "Women",
    Title: "Catwalk Women Leather Flats",
    image: require("../assets/2872.jpg"),
    price: 5860,
    description:
"Step into sophistication with our exquisite collection of women's footwear. Crafted with meticulous attention to detail, our shoes seamlessly combine trend-setting designs with premium materials, ensuring a luxurious experience for your feet."
  },
  {
    id: 8574,
    Category: "Footwear",
    Gender: "Women",
    Title: "Crocs Dora Boots Pink Sandals",
    image: require("../assets/8574.jpg"),
    price: 3550,
     description:
"Step into sophistication with our exquisite collection of women's footwear. Crafted with meticulous attention to detail, our shoes seamlessly combine trend-setting designs with premium materials, ensuring a luxurious experience for your feet."
  },
];
export function getProducts() {
  return PRODUCTS;
}
export function getProduct(id) {
  return PRODUCTS.find((product) => product.id == id);
}
