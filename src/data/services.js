// ============================================================
// SERVICES DATA
// 20 services grouped into 4 logical categories.
// Edit descriptions, icons and links here.
// ============================================================

export const SERVICES = [
  // ── Group: India Export Solutions & Direct Supply ──────────
  {
    id: 'india-export-solutions',
    group: 'export',
    icon: 'Ship',
    title: 'India Export Solutions & Direct Supply',
    shortDescription:
      'Direct product supply and export from India: Btechkers sources from Indian manufacturers, coordinates procurement, and supplies directly to international buyers.',
    description:
      'For international businesses looking to purchase and import products from India through a streamlined, single-window partner, Btechkers acts as your Indian export and trading partner. We coordinate manufacturer sourcing, commercial quotations, sample development, quality inspection, export documentation and shipping coordination through licensed logistics partners. Product availability, MOQ, commercial terms and export feasibility depend on the specific requirement.',
    slug: '/services#india-export-solutions',
  },
  {
    id: 'bulk-consolidation-export',
    group: 'export',
    icon: 'Boxes',
    title: 'Bulk Purchasing & Order Consolidation',
    shortDescription:
      'Consolidating orders across multiple Indian manufacturers or product categories into unified export shipments where feasible.',
    description:
      'Where feasible and practical, we assist international buyers in coordinating bulk purchasing and consolidating orders across multiple suppliers or product lines from India. This helps optimize container freight, simplifies supplier communication, and streamlines documentation under a unified export arrangement.',
    slug: '/services#bulk-consolidation-export',
  },

  // ── Group 1: Supplier Discovery & Verification ──────────
  {
    id: 'supplier-identification',
    group: 'discovery',
    icon: 'Search',
    title: 'Manufacturer & Supplier Identification',
    shortDescription:
      'Research and identify suitable manufacturers, producers, exporters and wholesalers matching your specific product and commercial requirements.',
    description:
      'We search our established network and relevant markets to identify manufacturers, producers, exporters and wholesalers that match your product specifications, quality expectations and commercial requirements. Rather than sending a generic directory list, we tailor our search to each buyer\'s specific requirements.',
    slug: '/services#supplier-identification',
  },
  {
    id: 'supplier-verification',
    group: 'discovery',
    icon: 'ShieldCheck',
    title: 'Physical Supplier Verification',
    shortDescription:
      'Background checks, document review and suitability assessments before any supplier is recommended to a buyer.',
    description:
      'Before presenting any supplier to a buyer, we conduct background checks and review available business information, manufacturing credentials and relevant documentation. Physical verification is available in India and Indonesia. In other markets, verification is coordinated through our regional partner network according to local capabilities.',
    slug: '/services#supplier-verification',
  },
  {
    id: 'factory-visits',
    group: 'discovery',
    icon: 'Building2',
    title: 'Factory Visits & On-Site Audits',
    shortDescription:
      'Physical factory visits in India and Indonesia through our on-ground team. Other markets coordinated through regional partners.',
    description:
      'We can physically visit manufacturing facilities in India and Indonesia to verify operations, assess production capabilities and provide direct feedback. In Africa, Europe and other supported regions, site visits are coordinated through our local partner network subject to individual project requirements and feasibility.',
    slug: '/services#factory-visits',
  },
  {
    id: 'document-verification',
    group: 'discovery',
    icon: 'FileText',
    title: 'Supplier Background & Document Verification',
    shortDescription:
      'Collecting, reviewing and validating business registration documents, quality credentials and relevant export certifications.',
    description:
      'We assist buyers in requesting and reviewing relevant business registration documents, product certificates, quality documentation and export paperwork from suppliers. Documentation requirements vary by product, market and buyer specifications.',
    slug: '/services#document-verification',
  },

  // ── Group 2: Procurement & Commercial ──────────────────
  {
    id: 'product-sourcing',
    group: 'procurement',
    icon: 'Package',
    title: 'Product Sourcing & Procurement',
    shortDescription:
      'End-to-end sourcing support from requirement definition through supplier selection, sampling and commercial coordination.',
    description:
      'We manage the sourcing process from initial requirement review through supplier identification, verification, sampling and commercial discussions. Our involvement can be tailored to include individual sourcing stages or a more comprehensive procurement support arrangement depending on the buyer\'s requirements.',
    slug: '/services#product-sourcing',
  },
  {
    id: 'negotiation',
    group: 'procurement',
    icon: 'Handshake',
    title: 'Price & MOQ Negotiation',
    shortDescription:
      'Collect and compare quotations from suitable suppliers, negotiate commercial terms and evaluate alternatives.',
    description:
      'We contact relevant suppliers, collect product catalogues and quotations, and compare pricing, MOQ, lead times and other key commercial terms. We assist buyers in evaluating options and support discussions with preferred suppliers to arrive at practical commercial arrangements.',
    slug: '/services#negotiation',
  },
  {
    id: 'sampling',
    group: 'procurement',
    icon: 'FlaskConical',
    title: 'Sample Sourcing & Coordination',
    shortDescription:
      'Coordinating sample requests and communication between buyers and manufacturers throughout the sampling stage.',
    description:
      'We coordinate sample requests between buyers and manufacturers, facilitate product development discussions where custom, modified or OEM/ODM manufacturing is required. This includes specification alignment, sample communication and follow-up during the development stage.',
    slug: '/services#sampling',
  },
  {
    id: 'oem-odm',
    group: 'procurement',
    icon: 'Layers',
    title: 'Product Development / OEM / ODM',
    shortDescription:
      'Facilitating custom product specifications, OEM/ODM manufacturing discussions and sample development coordination.',
    description:
      'For buyers requiring products manufactured to custom specifications, we facilitate OEM and ODM development discussions with suitable manufacturers. We support specification alignment, sample communication and follow-up during the development stage.',
    slug: '/services#oem-odm',
  },
  {
    id: 'private-label',
    group: 'procurement',
    icon: 'Tag',
    title: 'Private-Label Manufacturing',
    shortDescription:
      'Identifying manufacturers with relevant private-label production experience for brands and businesses.',
    description:
      'For brands and businesses pursuing private-label product strategies, we assist in identifying manufacturers with relevant private-label manufacturing experience and capabilities. We support specification discussions, sample coordination and initial commercial assessments.',
    slug: '/services#private-label',
  },

  // ── Group 3: Quality, Compliance & Logistics ───────────
  {
    id: 'production-monitoring',
    group: 'quality',
    icon: 'BarChart3',
    title: 'Production Monitoring',
    shortDescription:
      'Project-based production follow-up, manufacturer communication and progress coordination where included in scope.',
    description:
      'Where included in the agreed project scope, we assist with production monitoring, manufacturer communication and progress follow-up. This service is project-specific and tailored according to the complexity of the manufacturing arrangement and the buyer\'s requirements.',
    slug: '/services#production-monitoring',
  },
  {
    id: 'quality-control',
    group: 'quality',
    icon: 'ClipboardCheck',
    title: 'Quality Control & Pre-Shipment Inspections',
    shortDescription:
      'Coordinating appropriate quality control and pre-shipment inspection arrangements with suitable partners.',
    description:
      'We assist buyers in arranging relevant quality-control and pre-shipment inspection services appropriate to their product and sourcing market. Where required, we coordinate with suitable inspection partners. The extent of quality-control support depends on the agreed project scope.',
    slug: '/services#quality-control',
  },
  {
    id: 'export-documentation',
    group: 'quality',
    icon: 'FileCheck',
    title: 'Export Documentation Assistance',
    shortDescription:
      'Supporting the collection and review of export paperwork, certificates and required supplier documentation.',
    description:
      'We assist buyers in requesting, reviewing and organizing relevant export documents from suppliers — including packing lists, commercial invoices, certificates of origin and product-specific certifications. Documentation requirements vary by product, destination market and buyer specifications.',
    slug: '/services#export-documentation',
  },
  {
    id: 'compliance',
    group: 'quality',
    icon: 'Scale',
    title: 'Import/Export Compliance Coordination',
    shortDescription:
      'Connecting clients with appropriate compliance and regulatory professionals. Btechkers is not a licensed customs broker.',
    description:
      'We support buyers with trade documentation coordination and, where specialist regulatory, customs or compliance expertise is required, connect them with suitable professionals. Btechkers is not itself a licensed customs broker or regulatory consultant. All trade operations must comply with applicable international sanctions and destination market laws.',
    slug: '/services#compliance',
  },
  {
    id: 'logistics',
    group: 'quality',
    icon: 'Ship',
    title: 'Freight & Logistics Coordination',
    shortDescription:
      'Connecting buyers with suitable freight forwarders and supporting logistics documentation coordination.',
    description:
      'We assist with coordinating freight and logistics arrangements where this is included in the agreed project scope. This typically involves connecting buyers with suitable freight forwarders or logistics providers and supporting the documentation process.',
    slug: '/services#logistics',
  },
  {
    id: 'customs',
    group: 'quality',
    icon: 'Anchor',
    title: 'Customs Assistance Through Relevant Partners',
    shortDescription:
      'Facilitating introductions to experienced customs agents and clearance professionals where needed.',
    description:
      'Where customs clearance support is required, we facilitate introductions to experienced customs agents and licensed brokers appropriate to the buyer\'s destination market. Btechkers coordinates these referrals as part of the broader procurement support arrangement.',
    slug: '/services#customs',
  },

  // ── Group 4: Strategic & Long-Term ─────────────────────
  {
    id: 'bulk-procurement',
    group: 'strategic',
    icon: 'Boxes',
    title: 'Bulk Procurement & Consolidation',
    shortDescription:
      'Supporting multi-product or multi-supplier procurement coordination where practical and within agreed scope.',
    description:
      'For buyers requiring sourcing across multiple product categories or from more than one supplier, we can coordinate consolidated procurement approaches where this is practical and within the agreed scope of services.',
    slug: '/services#bulk-procurement',
  },
  {
    id: 'long-term-support',
    group: 'strategic',
    icon: 'RefreshCw',
    title: 'Long-Term Procurement Outsourcing',
    shortDescription:
      'Serving as an ongoing external sourcing partner for repeat procurement and supplier relationship management.',
    description:
      'For businesses with ongoing or recurring sourcing requirements, we can serve as an external procurement partner — managing supplier relationships, coordinating repeat orders and providing consistent procurement support across sourcing markets.',
    slug: '/services#long-term-support',
  },
  {
    id: 'buyer-representation',
    group: 'strategic',
    icon: 'UserCheck',
    title: 'Buyer Representation',
    shortDescription:
      'Representing buyers in supplier communication, local coordination and agreed sourcing activities.',
    description:
      'Where buyers require local or regional representation in sourcing markets, we assist with supplier communication, coordination and agreed sourcing activities as a professional representative of the buyer\'s interests.',
    slug: '/services#buyer-representation',
  },
  {
    id: 'business-matchmaking',
    group: 'strategic',
    icon: 'Network',
    title: 'Business Matchmaking & Distributor Identification',
    shortDescription:
      'Identifying relevant distributors, commercial partners and sourcing opportunities within our international network.',
    description:
      'Beyond product sourcing, we assist businesses in identifying relevant distributors, commercial partners and sourcing opportunities through our international network. This may include introductions to manufacturers, exporters or distribution partners suitable for specific market entry or expansion objectives.',
    slug: '/services#business-matchmaking',
  },
  {
    id: 'market-research',
    group: 'strategic',
    icon: 'Globe',
    title: 'Market Research & Supplier Comparisons',
    shortDescription:
      'Targeted market research, supplier landscape analysis and sourcing feasibility assessments.',
    description:
      'We conduct targeted market research to help buyers understand sourcing options, supplier landscapes and product feasibility before committing to procurement. This includes supplier comparisons, pricing benchmarks and market-specific sourcing assessments relevant to the buyer\'s product and destination requirements.',
    slug: '/services#market-research',
  },
];

export const FEATURED_SERVICES = [
  SERVICES.find((s) => s.id === 'india-export-solutions'),
  SERVICES.find((s) => s.id === 'supplier-identification'),
  SERVICES.find((s) => s.id === 'supplier-verification'),
  SERVICES.find((s) => s.id === 'product-sourcing'),
  SERVICES.find((s) => s.id === 'factory-visits'),
  SERVICES.find((s) => s.id === 'negotiation'),
].filter(Boolean);

// Service groups for grouped display on Services page
export const SERVICE_GROUPS = [
  {
    id: 'export',
    title: 'India Export Solutions & Direct Supply',
    description: 'Direct procurement, commercial coordination and export supply of Indian products for international buyers.',
  },
  {
    id: 'discovery',
    title: 'Supplier Discovery & Verification',
    description: 'Finding, assessing and qualifying the right suppliers for your requirements.',
  },
  {
    id: 'procurement',
    title: 'Procurement & Commercial',
    description: 'Coordinating the commercial and procurement stages of your sourcing project.',
  },
  {
    id: 'quality',
    title: 'Quality, Compliance & Logistics',
    description: 'Ensuring quality standards, documentation and logistics are properly coordinated.',
  },
  {
    id: 'strategic',
    title: 'Strategic & Long-Term Partnerships',
    description: 'Building ongoing sourcing relationships and strategic procurement arrangements.',
  },
];
