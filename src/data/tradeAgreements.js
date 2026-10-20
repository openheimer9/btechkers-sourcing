// ============================================================
// INDIA TRADE AGREEMENTS DATA
// Last reviewed: October 2024
// Sources: India Ministry of Commerce & Industry, DGFT, official
// government trade-agreement publications.
//
// STATUS DEFINITIONS:
// 'in-force'       — Agreement currently in force and operational
// 'signed'         — Signed, awaiting implementation/ratification
// 'concluded'      — Negotiations concluded, not yet signed/implemented
// 'negotiating'    — Under active negotiation
//
// NOTE: This data should be reviewed and updated as trade rules change.
// Always verify specific tariff benefits with a qualified trade expert
// as they are product-specific and depend on HS classification,
// rules of origin, documentation and other factors.
// ============================================================

export const LAST_REVIEWED = "October 2024";

export const TRADE_AGREEMENTS = [
  // ── IN FORCE ────────────────────────────────────────────────────────
  {
    id: "uae-cepa",
    country: "United Arab Emirates",
    region: null,
    flag: "🇦🇪",
    agreementName: "India–UAE Comprehensive Economic Partnership Agreement (CEPA)",
    agreementType: "CEPA",
    status: "in-force",
    inForceDate: "May 2022",
    shortDescription:
      "A comprehensive bilateral trade and investment agreement covering goods, services and investment. One of India's broadest and most significant recent trade agreements.",
    sourcingRelevance:
      "Relevant for exporters shipping Indian-origin goods to the UAE market, and for sourcing decisions where UAE-origin goods are imported into India. Covers textiles, jewellery, engineering goods and more.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-uae-cepa/",
  },
  {
    id: "australia-ecta",
    country: "Australia",
    region: null,
    flag: "🇦🇺",
    agreementName: "India–Australia Economic Cooperation and Trade Agreement (ECTA)",
    agreementType: "ECTA",
    status: "in-force",
    inForceDate: "December 2022",
    shortDescription:
      "An interim agreement covering goods and services trade between India and Australia, with commitments to negotiate a comprehensive agreement.",
    sourcingRelevance:
      "Indian exporters benefit from preferential tariffs on a range of goods including textiles, garments, leather and engineering products entering Australia.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/ind-aus-ecta/",
  },
  {
    id: "mauritius-cecpa",
    country: "Mauritius",
    region: null,
    flag: "🇲🇺",
    agreementName: "India–Mauritius Comprehensive Economic Cooperation and Partnership Agreement (CECPA)",
    agreementType: "CECPA",
    status: "in-force",
    inForceDate: "April 2021",
    shortDescription:
      "India's first trade agreement with an African country. Covers goods, services and investment.",
    sourcingRelevance:
      "Opens preferential access for Indian goods entering Mauritius and may offer relevant trade facilitation opportunities for buyers in the Mauritius market.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-mauritius-cecpa/",
  },
  {
    id: "asean-fta",
    country: "ASEAN",
    region: "Southeast Asia",
    flag: "🌏",
    agreementName: "India–ASEAN Free Trade Agreement (AITIGA)",
    agreementType: "FTA",
    status: "in-force",
    inForceDate: "January 2010",
    shortDescription:
      "Covers trade in goods between India and ASEAN member states (Brunei, Cambodia, Indonesia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Vietnam). Currently under review for upgrade.",
    sourcingRelevance:
      "Relevant for buyers sourcing Indian goods destined for ASEAN markets, and for cross-border trade between India and Indonesia specifically.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-asean-fta/",
  },
  {
    id: "japan-cepa",
    country: "Japan",
    region: null,
    flag: "🇯🇵",
    agreementName: "India–Japan Comprehensive Economic Partnership Agreement (CEPA)",
    agreementType: "CEPA",
    status: "in-force",
    inForceDate: "August 2011",
    shortDescription:
      "A comprehensive agreement covering goods, services and investment between India and Japan.",
    sourcingRelevance:
      "Provides preferential tariff treatment for a range of Indian goods entering Japan, including textiles, engineering goods, chemicals and more.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-japan-cepa/",
  },
  {
    id: "south-korea-cepa",
    country: "South Korea",
    region: null,
    flag: "🇰🇷",
    agreementName: "India–South Korea Comprehensive Economic Partnership Agreement (CEPA)",
    agreementType: "CEPA",
    status: "in-force",
    inForceDate: "January 2010",
    shortDescription:
      "A broad trade agreement covering goods, services and investment. India and Korea are significant trade partners in goods including electronics, machinery and chemicals.",
    sourcingRelevance:
      "Relevant for buyers sourcing Indian-origin goods destined for South Korea or Korean buyers sourcing from India.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-korea-cepa/",
  },
  {
    id: "sri-lanka-fta",
    country: "Sri Lanka",
    region: null,
    flag: "🇱🇰",
    agreementName: "India–Sri Lanka Free Trade Agreement (ISFTA)",
    agreementType: "FTA",
    status: "in-force",
    inForceDate: "March 2000",
    shortDescription:
      "One of India's older bilateral free trade agreements, covering trade in goods.",
    sourcingRelevance:
      "Provides preferential tariff access for qualifying Indian goods entering Sri Lanka.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-sri-lanka-fta/",
  },
  {
    id: "singapore-ceca",
    country: "Singapore",
    region: null,
    flag: "🇸🇬",
    agreementName: "India–Singapore Comprehensive Economic Cooperation Agreement (CECA)",
    agreementType: "CECA",
    status: "in-force",
    inForceDate: "August 2005",
    shortDescription:
      "A comprehensive bilateral trade agreement with Singapore, covering goods, services and investment.",
    sourcingRelevance:
      "Provides preferential tariff access for Indian goods entering Singapore and supports bilateral investment flows.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-singapore-ceca/",
  },
  {
    id: "malaysia-ceca",
    country: "Malaysia",
    region: null,
    flag: "🇲🇾",
    agreementName: "India–Malaysia Comprehensive Economic Cooperation Agreement (CECA)",
    agreementType: "CECA",
    status: "in-force",
    inForceDate: "July 2011",
    shortDescription:
      "A comprehensive bilateral trade and economic cooperation agreement between India and Malaysia.",
    sourcingRelevance:
      "Supports preferential trade in goods between India and Malaysia across multiple product categories.",
    officialSource: "https://commerce.gov.in/trade-agreements/signed-ftas/india-malaysia-ceca/",
  },

  // ── CONCLUDED / SIGNED, AWAITING IMPLEMENTATION ─────────────────────
  {
    id: "efta-tepa",
    country: "EFTA",
    region: "Europe (Non-EU)",
    flag: "🇨🇭",
    agreementName: "India–EFTA Trade and Economic Partnership Agreement (TEPA)",
    agreementType: "TEPA",
    status: "signed",
    signedDate: "March 2024",
    shortDescription:
      "A trade and economic partnership agreement with the four EFTA members: Switzerland, Norway, Iceland and Liechtenstein. Note: EFTA is not the European Union.",
    sourcingRelevance:
      "Once implemented, this agreement may provide preferential market access for Indian goods entering EFTA countries. Specific product benefits will depend on individual tariff schedules and rules of origin.",
    officialSource: "https://commerce.gov.in/trade-agreements/",
    importantNote:
      "EFTA refers to the European Free Trade Association — Switzerland, Norway, Iceland and Liechtenstein. This is a separate grouping from the European Union.",
  },

  // ── UNDER NEGOTIATION ────────────────────────────────────────────────
  {
    id: "uk-fta",
    country: "United Kingdom",
    region: null,
    flag: "🇬🇧",
    agreementName: "India–UK Free Trade Agreement",
    agreementType: "FTA",
    status: "negotiating",
    shortDescription:
      "Negotiations for a free trade agreement between India and the United Kingdom have been ongoing since January 2022. No agreement has been signed or implemented as of the review date.",
    sourcingRelevance:
      "A completed agreement, if implemented, could provide preferential tariff access for a wide range of Indian goods entering the UK market, including textiles, apparel, processed foods and engineering goods.",
    officialSource: "https://commerce.gov.in/trade-agreements/",
    importantNote:
      "This agreement is under negotiation. Do not treat it as providing any current preferential tariff access.",
  },
  {
    id: "eu-fta",
    country: "European Union",
    region: "Europe",
    flag: "🇪🇺",
    agreementName: "India–EU Free Trade Agreement",
    agreementType: "FTA",
    status: "negotiating",
    shortDescription:
      "India and the European Union resumed FTA negotiations in 2022 after an earlier pause. Negotiations are ongoing and no agreement has been concluded or implemented as of the review date.",
    sourcingRelevance:
      "A completed India–EU FTA, if implemented, would be highly significant for Indian exporters. It would potentially cover textiles, apparel, agricultural goods, engineering products and more.",
    officialSource: "https://commerce.gov.in/trade-agreements/",
    importantNote:
      "This agreement is under active negotiation. There is no current preferential tariff arrangement between India and the EU.",
  },
  {
    id: "canada-fta",
    country: "Canada",
    region: null,
    flag: "🇨🇦",
    agreementName: "India–Canada Comprehensive Economic Partnership Agreement (CEPA)",
    agreementType: "CEPA",
    status: "negotiating",
    shortDescription:
      "India and Canada have been engaged in CEPA negotiations, though progress has been subject to diplomatic considerations. Status should be verified against current official sources.",
    sourcingRelevance:
      "A completed agreement would be relevant for Indian exporters seeking improved access to the Canadian market.",
    officialSource: "https://commerce.gov.in/trade-agreements/",
    importantNote:
      "Negotiation status should be confirmed against latest official announcements.",
  },
  {
    id: "oman-fta",
    country: "Oman",
    region: null,
    flag: "🇴🇲",
    agreementName: "India–Oman Free Trade Agreement",
    agreementType: "FTA",
    status: "negotiating",
    shortDescription:
      "India and Oman have been in discussions regarding a bilateral free trade agreement. No agreement has been concluded or implemented as of the review date.",
    sourcingRelevance:
      "A completed agreement could facilitate preferential trade access for Indian goods entering Oman.",
    officialSource: "https://commerce.gov.in/trade-agreements/",
  },
];

export const AGREEMENT_STATUS_LABELS = {
  "in-force": "In Force",
  signed: "Signed — Awaiting Implementation",
  concluded: "Negotiations Concluded",
  negotiating: "Under Negotiation",
};

export const AGREEMENT_STATUS_COLORS = {
  "in-force": { bg: "#ECFDF5", text: "#065F46", border: "#A7F3D0" },
  signed: { bg: "#EFF6FF", text: "#1E40AF", border: "#BFDBFE" },
  concluded: { bg: "#FFF7ED", text: "#C2410C", border: "#FED7AA" },
  negotiating: { bg: "#F9FAFB", text: "#374151", border: "#D1D5DB" },
};
