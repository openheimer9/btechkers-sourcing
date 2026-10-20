// ============================================================
// GLOBAL NETWORK DATA
// Sourcing regions, capabilities and descriptions.
// ============================================================

export const REGIONS = [
  {
    id: "india",
    name: "India",
    flag: "🇮🇳",
    tagline: "Primary Sourcing Hub",
    capabilities: ["factory-visit", "direct-network"],
    capabilityLabels: ["Physical Factory Visits Available", "Direct Sourcing Network"],
    description:
      "India represents our primary sourcing focus. With a strong network spanning manufacturing clusters across multiple states, we connect buyers with Indian manufacturers, producers and exporters across a wide range of industries. Physical factory visits are available through our team on the ground.",
    highlights: [
      "Textiles, fabrics and garments",
      "Gems, diamonds and jewellery",
      "Agriculture and agro-processed products",
      "Engineering and industrial goods",
      "Chemicals and pharmaceuticals",
      "Consumer goods and household products",
    ],
    base: "Surat, Gujarat (primary base)",
    color: "#FF9933",
    coords: { x: 62, y: 42 },
  },
  {
    id: "indonesia",
    name: "Indonesia",
    flag: "🇮🇩",
    tagline: "Established Regional Network",
    capabilities: ["factory-visit", "partner-network"],
    capabilityLabels: ["Physical Factory Visits Available", "Regional Partner Network"],
    description:
      "Our established presence in Indonesia provides buyers with access to the country's diverse manufacturing base. Physical factory visits are available through our regional team, and our local network covers a range of product categories including textiles, agricultural products, furniture and more.",
    highlights: [
      "Textiles and garments",
      "Agricultural commodities",
      "Wood and furniture products",
      "Food and beverage products",
      "Consumer goods",
    ],
    color: "#CE1126",
    coords: { x: 77, y: 54 },
  },
  {
    id: "africa",
    name: "Africa",
    flag: "🌍",
    tagline: "Regional Partner Network",
    capabilities: ["partner-network"],
    capabilityLabels: ["Regional Partner-Supported Sourcing"],
    description:
      "Our Africa operations are coordinated through a regional partner based in Nairobi, Kenya, with wider sourcing reach across multiple African countries subject to project feasibility. We assist clients interested in sourcing agricultural products, raw materials and selected manufactured goods from the African continent.",
    highlights: [
      "Agricultural commodities",
      "Raw materials and natural resources",
      "Selected manufactured goods",
      "Regional trade facilitation",
    ],
    base: "Nairobi, Kenya (regional partner)",
    color: "#009A44",
    coords: { x: 52, y: 58 },
  },
  {
    id: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "Sourcing & Supply-Chain Expertise",
    capabilities: ["partner-network"],
    capabilityLabels: ["Supply-Chain & Logistics Expertise"],
    description:
      "Our UK representative brings sourcing, supply-chain and logistics expertise to the network, supporting clients operating in or sourcing for the UK market. With six years of professional experience, this regional capability strengthens our cross-border procurement coordination.",
    highlights: [
      "Supply-chain coordination",
      "Logistics and import support",
      "UK market sourcing assistance",
      "Cross-border procurement",
    ],
    color: "#012169",
    coords: { x: 44, y: 26 },
  },
  {
    id: "europe",
    name: "European Union",
    flag: "🇪🇺",
    tagline: "Collaborative Sourcing Network",
    capabilities: ["partner-network"],
    capabilityLabels: ["Partner-Supported Sourcing"],
    description:
      "Our collaborative European network covers Poland, Germany and Croatia. Our Croatian partner brings more than ten years of sourcing experience. This European presence supports clients with EU-based procurement requirements and provides cross-regional coordination capabilities.",
    highlights: [
      "Poland — manufacturing and procurement",
      "Germany — industrial and engineering goods",
      "Croatia — sourcing expertise (10+ years)",
      "EU regulatory and trade documentation support",
    ],
    color: "#003399",
    coords: { x: 50, y: 27 },
  },
  {
    id: "china",
    name: "China",
    flag: "🇨🇳",
    tagline: "Remote Sourcing Capabilities",
    capabilities: ["remote-network"],
    capabilityLabels: ["Remote Sourcing via Established Contacts"],
    description:
      "We maintain established manufacturer and business contacts in China, enabling us to assist clients with China sourcing requirements remotely. We do not operate a permanent office or local inspection team in China. Our China sourcing capabilities are coordinated through direct business relationships built over time.",
    highlights: [
      "Manufacturing contacts across product categories",
      "Remote supplier identification",
      "Quotation coordination",
      "Cross-border procurement support",
    ],
    color: "#DE2910",
    coords: { x: 75, y: 37 },
  },
];

export const CAPABILITY_TYPES = [
  {
    id: "factory-visit",
    label: "Physical Factory Visits Available",
    color: "#3A506B",
    icon: "Building2",
  },
  {
    id: "partner-network",
    label: "Regional Partner-Supported Sourcing",
    color: "#5E8BA4",
    icon: "Users",
  },
  {
    id: "remote-network",
    label: "Remote Sourcing via Established Contacts",
    color: "#94A3B8",
    icon: "Globe",
  },
  {
    id: "direct-network",
    label: "Direct Sourcing Network",
    color: "#2D7D9A",
    icon: "Network",
  },
];
