// ============================================================
// INDUSTRIES DATA
// Product categories we source. Each has a featured flag,
// image path reference (from assets.js), and product list.
// ============================================================
import { ASSETS } from '../config/assets';

export const INDUSTRIES = [
  {
    id: "textiles",
    slug: "textiles-apparel",
    name: "Textiles & Apparel",
    featured: true,
    priority: 1,
    image: ASSETS.industries.textiles,
    icon: "Shirt",
    shortDescription:
      "Fabrics, sportswear materials, knitted and woven textiles, garments, innerwear and home textiles — available for global sourcing and direct export supply from India.",
    description:
      "India is one of the world's major producers of textiles and apparel. International buyers can engage Btechkers as an on-ground sourcing representative or inquire about direct export supply and OEM/private-label manufacturing from India's key textile corridors, with additional sourcing reach across Indonesia.",
    products: [
      "Woven and knitted fabrics",
      "Sportswear and activewear fabrics",
      "Custom fabric development",
      "Garments and apparel",
      "Innerwear and intimate apparel materials",
      "Home textiles",
      "Technical and functional fabrics",
      "Sustainable and recycled textiles",
    ],
    sourcingMarkets: ["India", "Indonesia"],
  },
  {
    id: "agriculture",
    slug: "agriculture-agro-products",
    name: "Agriculture & Agro Products",
    featured: true,
    priority: 2,
    image: ASSETS.industries.agriculture,
    icon: "Wheat",
    shortDescription:
      "Spices, grains, seeds, agricultural commodities and processed agro goods — available for international sourcing and direct export supply from India.",
    description:
      "We source and facilitate export supply across a wide range of agricultural commodities and processed goods through verified producers and exporters in India, Indonesia and Africa. International buyers can inquire about direct export supply from India across qualified agricultural categories, subject to product availability and destination market compliance.",
    products: [
      "Spices and condiments",
      "Grains and pulses",
      "Seeds and oilseeds",
      "Agricultural commodities",
      "Processed and packaged agro products",
      "Dried fruits and nuts",
      "Sugar and sweeteners",
      "Coffee, tea and related products",
    ],
    sourcingMarkets: ["India", "Indonesia", "Africa"],
  },
  {
    id: "jewellery",
    slug: "jewellery-precious-materials",
    name: "Jewellery & Precious Materials",
    featured: true,
    priority: 3,
    image: ASSETS.industries.jewellery,
    icon: "Gem",
    shortDescription:
      "Gold, silver and platinum jewellery, natural and lab-grown diamonds, and custom OEM manufacturing — direct export supply and sourcing coordination from Surat, India.",
    description:
      "Our base in Surat, India places us at the heart of one of the world's most significant diamond processing and jewellery manufacturing ecosystems. International buyers can inquire about direct export supply or sourcing representation across natural diamonds, certified lab-grown diamonds, hallmarked gold/silver jewellery and custom manufacturing.",
    products: [
      "Gold jewellery",
      "Silver jewellery",
      "Platinum jewellery",
      "Natural diamonds",
      "Lab-grown diamonds",
      "Diamond jewellery",
      "Custom jewellery manufacturing",
      "Gemstone jewellery",
    ],
    sourcingMarkets: ["India"],
    note:
      "Product availability, grading and certifications must be confirmed per supplier and individual order. Do not assume universal certification coverage.",
  },
  {
    id: "food-beverages",
    slug: "food-beverages",
    name: "Food & Beverages",
    featured: false,
    priority: 4,
    image: ASSETS.industries.food,
    icon: "UtensilsCrossed",
    shortDescription:
      "Packaged food products, beverages, specialty food items and food-processing goods from our international sourcing network.",
    description:
      "We assist buyers in identifying suitable manufacturers and suppliers for food and beverage products. All food sourcing is subject to relevant food safety standards, import regulations and applicable certifications in the destination market.",
    products: [
      "Packaged and processed foods",
      "Beverages and drinks",
      "Specialty and ethnic foods",
      "Condiments and sauces",
      "Dairy and dairy-alternative products",
      "Snacks and confectionery",
    ],
    sourcingMarkets: ["India", "Indonesia", "Africa"],
  },
  {
    id: "health-wellness",
    slug: "health-wellness-supplements",
    name: "Health, Wellness & Supplements",
    featured: false,
    priority: 5,
    image: ASSETS.industries.health,
    icon: "Heart",
    shortDescription:
      "Health supplements, wellness products, herbal formulations and personal-care health products.",
    description:
      "We support sourcing inquiries for health and wellness products including supplements, herbal products and related personal-care goods. Buyers must confirm compliance with applicable health product regulations in their destination market.",
    products: [
      "Nutritional supplements",
      "Herbal and Ayurvedic products",
      "Vitamins and minerals",
      "Sports nutrition products",
      "Wellness and functional products",
    ],
    sourcingMarkets: ["India"],
  },
  {
    id: "cosmetics",
    slug: "cosmetics-personal-care",
    name: "Cosmetics & Personal Care",
    featured: false,
    priority: 6,
    image: ASSETS.industries.cosmetics,
    icon: "Sparkles",
    shortDescription:
      "Cosmetics, skincare, haircare, personal-care products and beauty-industry packaging sourcing.",
    description:
      "We assist buyers with sourcing cosmetics, skincare, haircare and personal-care products from relevant manufacturers. Buyers are responsible for confirming applicable safety standards, labelling requirements and import regulations in their destination market.",
    products: [
      "Skincare and beauty products",
      "Hair care products",
      "Colour cosmetics",
      "Personal hygiene products",
      "Fragrance and perfume",
      "Cosmetic packaging",
    ],
    sourcingMarkets: ["India", "Indonesia"],
  },
  {
    id: "wood-furniture",
    slug: "wood-furniture-products",
    name: "Wood & Furniture Products",
    featured: false,
    priority: 7,
    image: ASSETS.industries.wood,
    icon: "Armchair",
    shortDescription:
      "Solid wood furniture, flat-pack furniture, decorative wooden products and wood-based manufacturing.",
    description:
      "Indonesia has a well-established furniture and wood products manufacturing industry. We assist buyers in connecting with suitable furniture manufacturers, wood product exporters and related supply partners.",
    products: [
      "Solid wood furniture",
      "Home furnishing and décor",
      "Wooden handicrafts",
      "Flat-pack and modular furniture",
      "Office furniture",
      "Outdoor and garden furniture",
    ],
    sourcingMarkets: ["India", "Indonesia"],
  },
  {
    id: "metals-fabricated",
    slug: "metal-fabricated-products",
    name: "Metal & Fabricated Products",
    featured: false,
    priority: 8,
    image: ASSETS.industries.metals,
    icon: "Factory",
    shortDescription:
      "Steel, aluminium and fabricated metal products, castings, forgings and engineered metal components.",
    description:
      "India has a diverse engineering and metal fabrication industry. We assist buyers in identifying suitable manufacturers for metal products, fabricated components, castings, forgings and related engineering goods.",
    products: [
      "Steel and iron products",
      "Aluminium products",
      "Metal fabrications and components",
      "Castings and forgings",
      "Hardware and fasteners",
      "Engineering components",
    ],
    sourcingMarkets: ["India"],
  },
  {
    id: "plastics-packaging",
    slug: "plastic-packaging-products",
    name: "Plastic & Packaging Products",
    featured: false,
    priority: 9,
    image: ASSETS.industries.plastics,
    icon: "Box",
    shortDescription:
      "Plastic products, industrial packaging, consumer packaging and packaging solutions for export.",
    description:
      "We source plastic and packaging products from manufacturers across our network. This includes consumer packaging, industrial packaging and custom plastic component manufacturing for export.",
    products: [
      "Consumer packaging",
      "Industrial plastic products",
      "Custom plastic components",
      "Packaging materials",
      "Containers and bottles",
    ],
    sourcingMarkets: ["India", "Indonesia"],
  },
  {
    id: "industrial-goods",
    slug: "industrial-goods-components",
    name: "Industrial Goods & Components",
    featured: false,
    priority: 10,
    image: ASSETS.industries.industrial,
    icon: "Settings",
    shortDescription:
      "Industrial equipment components, mechanical parts, electrical goods and engineered industrial products.",
    description:
      "We assist buyers sourcing industrial goods and components, including mechanical engineering products, electrical components and industrial equipment parts, primarily from India's extensive manufacturing base.",
    products: [
      "Mechanical components and parts",
      "Electrical and electronic components",
      "Industrial equipment",
      "Tools and equipment",
      "Safety and protective equipment",
    ],
    sourcingMarkets: ["India"],
  },
  {
    id: "consumer-household",
    slug: "consumer-household-products",
    name: "Consumer & Household Products",
    featured: false,
    priority: 11,
    image: ASSETS.industries.consumer,
    icon: "Home",
    shortDescription:
      "Household goods, kitchenware, home accessories, cleaning products and general consumer merchandise.",
    description:
      "We source a variety of consumer and household products from our manufacturer and supplier network. This category covers a broad range of everyday products for retail, wholesale and private-label distribution.",
    products: [
      "Kitchenware and cookware",
      "Home accessories and décor",
      "Cleaning and household products",
      "Storage and organization products",
      "Garden and outdoor products",
      "Pet products",
    ],
    sourcingMarkets: ["India", "Indonesia"],
  },
  {
    id: "custom-manufacturing",
    slug: "custom-manufacturing",
    name: "Custom Manufacturing & Other Industries",
    featured: false,
    priority: 12,
    image: ASSETS.industries.custom,
    icon: "Wrench",
    shortDescription:
      "Custom product development, OEM/ODM manufacturing, private labelling, and direct export supply coordination for requirements across India and global partner markets.",
    description:
      "If your product category is not listed here, please tell us what you are looking for. International buyers can inquire about direct export supply from India or global sourcing representation across a broad range of legally tradable goods. All transactions are subject to product availability, commercial feasibility, and compliance with applicable laws in exporting and importing countries.",
    products: [
      "Custom-manufactured products",
      "OEM and ODM manufacturing",
      "Private-label product development",
      "Specialty and niche products",
      "Products not listed in standard categories",
    ],
    sourcingMarkets: ["India", "Indonesia", "Africa", "UK", "Europe", "China"],
    isCustom: true,
  },
];

export const FEATURED_INDUSTRIES = INDUSTRIES.filter((i) => i.featured);
