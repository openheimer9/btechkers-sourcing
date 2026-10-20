import { useState, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { ASSETS } from '../config/assets';
import './InteractiveConnectionMap.css';

// ── 8 Primary Strategic Network Hubs (matched to image pins) ──
const PRIMARY_PINS = [
  {
    id: 'india',
    name: 'India',
    fullName: 'India (Headquarters & Primary Sourcing Base)',
    flag: '🇮🇳',
    location: 'Surat, Gujarat & Western India Hub',
    x: 67.2,
    y: 48.4,
    status: 'Primary Sourcing Hub',
    statusType: 'factory-visit',
    capability: 'Physical Factory Visits Available',
    description:
      'Our primary sourcing operations base. On-ground team coordinates direct factory visits, physical audits, sampling, and production oversight across Gujarat, Maharashtra, and pan-India clusters.',
    highlights: [
      'Textiles, Technical Fabrics & Yarn',
      'Natural & Lab-Grown Diamond Jewellery',
      'Agro-Commodities & Spices',
      'Industrial Engineering & Metal Goods',
    ],
    inquiryParam: 'India',
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    fullName: 'Indonesia Regional Hub',
    flag: '🇮🇩',
    location: 'Jakarta & Manufacturing Hubs',
    x: 77.8,
    y: 62.3,
    status: 'Established Regional Hub',
    statusType: 'factory-visit',
    capability: 'Physical Factory Visits Available',
    description:
      'Established presence in Indonesia providing buyers with direct access to local factories, physical auditing, furniture producers, and export-grade agricultural processors.',
    highlights: [
      'Solid Teak & Rattan Furniture',
      'Apparel & Synthetic Textiles',
      'Spices, Coffee & Agro Commodities',
      'Paper & Packaging Solutions',
    ],
    inquiryParam: 'Indonesia',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    fullName: 'United Kingdom Procurement Desk',
    flag: '🇬🇧',
    location: 'London & UK Trade Network',
    x: 44.2,
    y: 24.4,
    status: 'Supply-Chain & Logistics Desk',
    statusType: 'partner-network',
    capability: 'Regional Partner-Supported Sourcing',
    description:
      'UK-based representation delivering supply-chain, import customs, cross-border freight coordination, and sourcing advisory for British brands and wholesalers.',
    highlights: [
      'Import Compliance & Customs Advisory',
      'Cross-Border Logistics Coordination',
      'Wholesale & Retail Brand Sourcing',
      'Contract & Specifications Review',
    ],
    inquiryParam: 'United Kingdom',
  },
  {
    id: 'europe',
    name: 'European Union',
    fullName: 'European Union Sourcing Desk',
    flag: '🇪🇺',
    location: 'Croatia, Germany & Poland',
    x: 50.7,
    y: 30.5,
    status: 'Collaborative Sourcing Partner',
    statusType: 'partner-network',
    capability: 'Regional Partner-Supported Sourcing',
    description:
      'Collaborative European partner network led by our Croatian sourcing specialist (10+ years commercial experience), supporting EU buyers with certified suppliers and CE documentation.',
    highlights: [
      'EU Regulatory Compliance (REACH, CE)',
      'Custom Technical Apparel & Innerwear',
      'Industrial Components & Light Assembly',
      'Central & Eastern European Logistics',
    ],
    inquiryParam: 'Europe',
  },
  {
    id: 'africa',
    name: 'Africa (Kenya)',
    fullName: 'Africa Regional Trade Desk',
    flag: '🇰🇪',
    location: 'Nairobi, Kenya',
    x: 51.3,
    y: 65.1,
    status: 'Regional Partner Network',
    statusType: 'partner-network',
    capability: 'Regional Partner-Supported Sourcing',
    description:
      'African sourcing desk based in Nairobi, connecting international buyers with established producers of raw materials, tea, coffee, pulses, and agricultural commodities across East Africa.',
    highlights: [
      'Agricultural Commodities (Tea, Coffee, Pulses)',
      'Raw Materials & Minerals',
      'Cross-Continent Export Facilitation',
      'Supplier Verification & Sampling',
    ],
    inquiryParam: 'Africa',
  },
  {
    id: 'china',
    name: 'China',
    fullName: 'China Sourcing Desk',
    flag: '🇨🇳',
    location: 'Shenzhen, Ningbo & Guangzhou',
    x: 76.7,
    y: 38.4,
    status: 'Remote Sourcing Capabilities',
    statusType: 'remote-network',
    capability: 'Remote Sourcing via Established Contacts',
    description:
      'Established multi-tier supplier connections across key manufacturing provinces in China, facilitating remote vendor discovery, production quotes, and export oversight.',
    highlights: [
      'Consumer Electronics & Hardware',
      'Industrial Tooling & Custom Moulds',
      'Packaging & Consumer Goods',
      'Multi-Vendor Price Comparison',
    ],
    inquiryParam: 'China',
  },
  {
    id: 'north-america',
    name: 'North America',
    fullName: 'North America Buyer Corridor',
    flag: '🇺🇸',
    location: 'United States & Canada',
    x: 16.8,
    y: 21.2,
    status: 'Active Buyer Trade Corridor',
    statusType: 'partner-network',
    capability: 'Buyer Destination & Trade Desk',
    description:
      'Key international buyer destination corridor connecting North American importers, retail distributors, and brands with verified manufacturers in India and Southeast Asia.',
    highlights: [
      'Private Label OEM / ODM Manufacturing',
      'Tariff-Advantaged Indian Sourcing',
      'Direct Factory Contract Negotiation',
      'End-to-End Quality Inspection Support',
    ],
    inquiryParam: 'North America',
  },
  {
    id: 'oceania',
    name: 'Oceania (ANZ)',
    fullName: 'Oceania & Pacific Trade Corridor',
    flag: '🇦🇺',
    location: 'Australia & New Zealand',
    x: 93.8,
    y: 85.0,
    status: 'Active Trade Corridor',
    statusType: 'partner-network',
    capability: 'Buyer Destination & Trade Desk',
    description:
      'Direct sourcing trade corridor for Australian and New Zealand enterprises seeking cost-efficient, duty-advantaged manufacturing lines from India under the ECTA trade pact.',
    highlights: [
      'India-Australia ECTA Duty Benefits',
      'Commercial Textiles & Hospitality Linen',
      'Agricultural Food Commodities',
      'Sustainable Packaging & Household Goods',
    ],
    inquiryParam: 'Australia',
  },
];

// ── Interactive Country Zones across the World Map ────────────
const COUNTRY_ZONES = [
  {
    id: 'zone-usa',
    name: 'United States',
    flag: '🇺🇸',
    role: 'Major Buyer Destination & Retail Brand Corridor',
    status: 'Active Trade Corridor',
    hubId: 'north-america',
    x: 20,
    y: 32,
    box: { x1: 10, x2: 30, y1: 24, y2: 38 },
  },
  {
    id: 'zone-canada',
    name: 'Canada',
    flag: '🇨🇦',
    role: 'North American Trade & Import Desk',
    status: 'Active Trade Corridor',
    hubId: 'north-america',
    x: 20,
    y: 17,
    box: { x1: 8, x2: 32, y1: 9, y2: 24 },
  },
  {
    id: 'zone-mexico',
    name: 'Mexico',
    flag: '🇲🇽',
    role: 'Nearshore Manufacturing & Central America Corridor',
    status: 'Trade Corridor',
    hubId: 'north-america',
    x: 19,
    y: 43,
    box: { x1: 15, x2: 24, y1: 38, y2: 48 },
  },
  {
    id: 'zone-brazil',
    name: 'Brazil & South America',
    flag: '🇧🇷',
    role: 'Agricultural Commodities & Natural Resource Desk',
    status: 'Trade Corridor',
    hubId: null,
    x: 30,
    y: 67,
    box: { x1: 23, x2: 38, y1: 48, y2: 88 },
  },
  {
    id: 'zone-uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    role: 'Sourcing & Supply Chain Operations',
    status: 'Regional Partner Desk',
    hubId: 'uk',
    x: 44.2,
    y: 24.4,
    box: { x1: 42, x2: 46.5, y1: 21, y2: 27 },
  },
  {
    id: 'zone-germany',
    name: 'Germany',
    flag: '🇩🇪',
    role: 'Industrial Machinery & Precision Engineering Corridor',
    status: 'European Sourcing Network',
    hubId: 'europe',
    x: 51,
    y: 26,
    box: { x1: 48, x2: 53.5, y1: 22, y2: 28.5 },
  },
  {
    id: 'zone-france',
    name: 'France',
    flag: '🇫🇷',
    role: 'Consumer Goods, Apparel & Luxury Retail Corridor',
    status: 'European Sourcing Network',
    hubId: 'europe',
    x: 47.5,
    y: 29.5,
    box: { x1: 45.5, x2: 49.5, y1: 26.5, y2: 32.5 },
  },
  {
    id: 'zone-croatia',
    name: 'Croatia & Adriatic',
    flag: '🇭🇷',
    role: 'Regional Partner Network (10+ Yrs Sourcing Expertise)',
    status: 'Verified Partner Base',
    hubId: 'europe',
    x: 52,
    y: 31,
    box: { x1: 50, x2: 54, y1: 29, y2: 34 },
  },
  {
    id: 'zone-poland',
    name: 'Poland & Eastern Europe',
    flag: '🇵🇱',
    role: 'Manufacturing & Light Industrial Assembly',
    status: 'European Sourcing Network',
    hubId: 'europe',
    x: 53.5,
    y: 24.5,
    box: { x1: 51, x2: 56, y1: 21, y2: 27 },
  },
  {
    id: 'zone-italy',
    name: 'Italy & Southern Europe',
    flag: '🇮🇹',
    role: 'Textiles, Leathercraft & High-End Design Sourcing',
    status: 'European Trade Corridor',
    hubId: 'europe',
    x: 50.5,
    y: 33,
    box: { x1: 48.5, x2: 52.5, y1: 30, y2: 36 },
  },
  {
    id: 'zone-spain',
    name: 'Spain & Portugal',
    flag: '🇪🇸',
    role: 'Iberian Trade Desk — Fast Fashion & Food Products',
    status: 'European Trade Corridor',
    hubId: 'europe',
    x: 43.5,
    y: 34,
    box: { x1: 41, x2: 46, y1: 30, y2: 37 },
  },
  {
    id: 'zone-turkey',
    name: 'Turkey',
    flag: '🇹🇷',
    role: 'Eurasian Textile & Industrial Gateway',
    status: 'Trade Corridor',
    hubId: null,
    x: 56.5,
    y: 33,
    box: { x1: 54, x2: 60, y1: 30, y2: 36 },
  },
  {
    id: 'zone-uae',
    name: 'UAE & Middle East',
    flag: '🇦🇪',
    role: 'Global Trade Hub — Gemstones, Jewellery & Re-Export',
    status: 'Trade Gateway',
    hubId: null,
    x: 61,
    y: 41.5,
    box: { x1: 57, x2: 64, y1: 36, y2: 46 },
  },
  {
    id: 'zone-kenya',
    name: 'Kenya (Nairobi)',
    flag: '🇰🇪',
    role: 'East Africa Regional Partner — Agro-Commodities',
    status: 'Regional Partner Hub',
    hubId: 'africa',
    x: 51.3,
    y: 65.1,
    box: { x1: 50, x2: 58, y1: 58, y2: 70 },
  },
  {
    id: 'zone-safrica',
    name: 'South Africa',
    flag: '🇿🇦',
    role: 'Southern African Industrial & Commercial Trade',
    status: 'Trade Corridor',
    hubId: 'africa',
    x: 53.5,
    y: 78,
    box: { x1: 50, x2: 57, y1: 72, y2: 85 },
  },
  {
    id: 'zone-nigeria',
    name: 'Nigeria & West Africa',
    flag: '🇳🇬',
    role: 'West African Resource & Commodity Desk',
    status: 'Trade Corridor',
    hubId: 'africa',
    x: 48.5,
    y: 52,
    box: { x1: 45, x2: 52, y1: 46, y2: 58 },
  },
  {
    id: 'zone-egypt',
    name: 'Egypt & North Africa',
    flag: '🇪🇬',
    role: 'North African Trade Corridor — Cotton & Agro-Export',
    status: 'Trade Corridor',
    hubId: null,
    x: 53.5,
    y: 38.5,
    box: { x1: 50, x2: 57, y1: 34, y2: 44 },
  },
  {
    id: 'zone-india',
    name: 'India (Primary Sourcing Hub)',
    flag: '🇮🇳',
    role: 'Primary Sourcing Operations Base — Physical Factory Audits',
    status: 'Primary Operations Base',
    hubId: 'india',
    x: 67.2,
    y: 48.4,
    box: { x1: 63, x2: 71, y1: 42, y2: 55 },
  },
  {
    id: 'zone-china',
    name: 'China',
    flag: '🇨🇳',
    role: 'Remote Sourcing Network — Multi-Tier Supplier Contacts',
    status: 'Remote Sourcing Network',
    hubId: 'china',
    x: 76.7,
    y: 38.4,
    box: { x1: 73, x2: 85, y1: 26, y2: 44 },
  },
  {
    id: 'zone-japan',
    name: 'Japan',
    flag: '🇯🇵',
    role: 'High-Precision Technology & High-End Buyer Corridor',
    status: 'Active Trade Corridor',
    hubId: null,
    x: 87,
    y: 33.5,
    box: { x1: 85, x2: 89, y1: 29, y2: 38 },
  },
  {
    id: 'zone-korea',
    name: 'South Korea',
    flag: '🇰🇷',
    role: 'Advanced Synthetic Textiles & Electronic Components',
    status: 'Active Trade Corridor',
    hubId: null,
    x: 83.5,
    y: 34,
    box: { x1: 81.5, x2: 85, y1: 31, y2: 37 },
  },
  {
    id: 'zone-vietnam',
    name: 'Vietnam',
    flag: '🇻🇳',
    role: 'Apparel, Footwear & Light Industrial Assembly',
    status: 'Southeast Asia Corridor',
    hubId: null,
    x: 78,
    y: 48,
    box: { x1: 76, x2: 80, y1: 44, y2: 52 },
  },
  {
    id: 'zone-thailand',
    name: 'Thailand',
    flag: '🇹🇭',
    role: 'Agro-Processing, Plastics & Consumer Hardware',
    status: 'Southeast Asia Corridor',
    hubId: null,
    x: 75,
    y: 49,
    box: { x1: 73, x2: 77, y1: 45, y2: 53 },
  },
  {
    id: 'zone-indonesia',
    name: 'Indonesia (Jakarta)',
    flag: '🇮🇩',
    role: 'Regional Operations Base — Physical Factory Audits',
    status: 'Regional Operations Base',
    hubId: 'indonesia',
    x: 77.8,
    y: 62.3,
    box: { x1: 74, x2: 84, y1: 57, y2: 66 },
  },
  {
    id: 'zone-malaysia',
    name: 'Malaysia & Singapore',
    flag: '🇲🇾',
    role: 'ASEAN High-Tech Assembly & Logistics Hub',
    status: 'ASEAN Trade Corridor',
    hubId: null,
    x: 76,
    y: 55.5,
    box: { x1: 74, x2: 78, y1: 53, y2: 58 },
  },
  {
    id: 'zone-australia',
    name: 'Australia',
    flag: '🇦🇺',
    role: 'Pacific Trade Desk — India-Australia ECTA Duty Benefits',
    status: 'Active Trade Corridor',
    hubId: 'oceania',
    x: 85,
    y: 75,
    box: { x1: 79, x2: 91, y1: 66, y2: 84 },
  },
  {
    id: 'zone-nz',
    name: 'New Zealand',
    flag: '🇳🇿',
    role: 'Pacific Sourcing Corridor — Specialty Agro & Food Products',
    status: 'Active Trade Corridor',
    hubId: 'oceania',
    x: 93.8,
    y: 85.0,
    box: { x1: 91, x2: 96, y1: 80, y2: 90 },
  },
];

export default function InteractiveConnectionMap() {
  const containerRef = useRef(null);
  const [activePin, setActivePin] = useState(PRIMARY_PINS[0]); // default: India
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, relX: 0, relY: 0 });
  const [isHoveringMap, setIsHoveringMap] = useState(false);

  // Mouse move over map to detect country and position floating tooltip
  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relX = ((e.clientX - rect.left) / rect.width) * 100;
    const relY = ((e.clientY - rect.top) / rect.height) * 100;

    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      relX,
      relY,
    });

    // Check if within any country zone
    const matchedZone = COUNTRY_ZONES.find((z) => {
      const { x1, x2, y1, y2 } = z.box;
      return relX >= x1 && relX <= x2 && relY >= y1 && relY <= y2;
    });

    // Check if very close to any primary pin (< 4% radius)
    const matchedPin = PRIMARY_PINS.find((p) => {
      const dx = p.x - relX;
      const dy = p.y - relY;
      return Math.sqrt(dx * dx + dy * dy) < 3.5;
    });

    if (matchedPin) {
      setHoveredCountry({
        id: matchedPin.id,
        name: matchedPin.name,
        flag: matchedPin.flag,
        role: matchedPin.status,
        status: matchedPin.capability,
        isPin: true,
        data: matchedPin,
      });
    } else if (matchedZone) {
      setHoveredCountry({
        id: matchedZone.id,
        name: matchedZone.name,
        flag: matchedZone.flag,
        role: matchedZone.role,
        status: matchedZone.status,
        isPin: false,
        hubId: matchedZone.hubId,
      });
    } else {
      setHoveredCountry(null);
    }
  }, []);

  const handleMouseEnter = () => setIsHoveringMap(true);
  const handleMouseLeave = () => {
    setIsHoveringMap(false);
    setHoveredCountry(null);
  };

  const handleSelectCountry = (country) => {
    if (country.isPin && country.data) {
      setActivePin(country.data);
    } else if (country.hubId) {
      const hub = PRIMARY_PINS.find((p) => p.id === country.hubId);
      if (hub) setActivePin(hub);
    }
  };

  return (
    <div className="interactive-map-root">
      {/* ── Top Control Bar ──────────────────────────────────── */}
      <div className="map-top-bar">
        <div className="map-live-indicator">
          <span className="live-pulsing-dot" aria-hidden="true" />
          <span className="live-text">Live Sourcing Corridors</span>
          <span className="live-divider" aria-hidden="true">•</span>
          <span className="live-subtitle">Hover or select a hub to inspect capabilities</span>
        </div>

        <div className="map-quick-chips" role="tablist" aria-label="Select Sourcing Hub">
          {PRIMARY_PINS.map((pin) => (
            <button
              key={pin.id}
              type="button"
              role="tab"
              aria-selected={activePin.id === pin.id}
              className={`map-chip-btn ${activePin.id === pin.id ? 'active' : ''}`}
              onClick={() => setActivePin(pin)}
            >
              <span className="chip-flag">{pin.flag}</span>
              <span>{pin.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Interactive Map Frame ────────────────────────────── */}
      <div
        ref={containerRef}
        className="map-viewport-frame"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="Interactive Global Network Map"
      >
        {/* Real Network Map Image */}
        <img
          src={ASSETS.map?.connection || '/images/global-network-connection-map.jpg'}
          alt="Btechkers Global Sourcing Network Map"
          className="map-base-img"
          loading="eager"
        />

        {/* Subtle grid and vignette effect for depth */}
        <div className="map-vignette-overlay" aria-hidden="true" />

        {/* ── SVG Hotspot & Coordinate Hit-Test Overlay ────────── */}
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="map-svg-hit-overlay"
          aria-hidden="true"
        >
          {/* Country Hit-Test Regions */}
          {COUNTRY_ZONES.map((zone) => {
            const isHovered = hoveredCountry?.id === zone.id;
            const isHubActive = activePin?.id === zone.hubId;
            return (
              <rect
                key={zone.id}
                x={zone.box.x1}
                y={zone.box.y1}
                width={zone.box.x2 - zone.box.x1}
                height={zone.box.y2 - zone.box.y1}
                rx="1.5"
                className={`country-hit-rect ${isHovered ? 'hovered' : ''} ${isHubActive ? 'hub-active' : ''}`}
                onClick={() => handleSelectCountry(zone)}
              />
            );
          })}
        </svg>

        {/* ── Primary Hub Pin Hotspots (Pulsing over image pins) ── */}
        {PRIMARY_PINS.map((pin) => {
          const isActive = activePin.id === pin.id;
          const isHovered = hoveredCountry?.id === pin.id;

          return (
            <div
              key={pin.id}
              className={`pin-hotspot-marker ${isActive ? 'is-active' : ''} ${isHovered ? 'is-hovered' : ''}`}
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              onClick={() => setActivePin(pin)}
              role="button"
              tabIndex={0}
              aria-label={`${pin.name} Sourcing Hub`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setActivePin(pin);
                }
              }}
            >
              {/* Animated concentric pulse wave */}
              <div className="pin-radar-wave pin-radar-wave--1" />
              <div className="pin-radar-wave pin-radar-wave--2" />

              {/* Pin Center Core */}
              <div className="pin-center-dot">
                <span className="pin-dot-glow" />
              </div>

              {/* Floating Permanent / Hover Badge */}
              <div className="pin-floating-tag">
                <span className="pin-tag-flag">{pin.flag}</span>
                <span className="pin-tag-name">{pin.name}</span>
              </div>
            </div>
          );
        })}

        {/* ── Dynamic Floating Cursor Tooltip (Follows Mouse) ── */}
        {isHoveringMap && hoveredCountry && (
          <div
            className="cursor-floating-tooltip"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: `translate(${cursorPos.relX > 75 ? '-105%' : '15px'}, ${cursorPos.relY > 75 ? '-105%' : '15px'})`,
            }}
          >
            <div className="tooltip-header">
              <span className="tooltip-flag">{hoveredCountry.flag}</span>
              <strong className="tooltip-title">{hoveredCountry.name}</strong>
            </div>
            <div className="tooltip-role">{hoveredCountry.role}</div>
            <div className="tooltip-status-badge">
              <Sparkles size={11} aria-hidden="true" />
              <span>{hoveredCountry.status}</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Active Hub Sourcing Detail Card ───────────────────── */}
      <div className="active-hub-detail-card" role="region" aria-label="Selected Sourcing Hub Information">
        <div className="active-hub-header">
          <div className="active-hub-title-wrap">
            <span className="active-hub-flag">{activePin.flag}</span>
            <div>
              <div className="active-hub-eyebrow">
                <span>{activePin.status}</span>
                <span className="hub-badge-pill">{activePin.capability}</span>
              </div>
              <h3 className="active-hub-title">{activePin.fullName}</h3>
              <p className="active-hub-loc">
                <MapPin size={15} aria-hidden="true" /> {activePin.location}
              </p>
            </div>
          </div>

          <div className="active-hub-actions">
            <Link
              to={`/contact?country=${encodeURIComponent(activePin.name)}&source=${encodeURIComponent(activePin.status)}`}
              className="btn btn--primary btn--sm active-hub-cta"
            >
              Inquire About {activePin.name} Sourcing
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="active-hub-body">
          <p className="active-hub-desc">{activePin.description}</p>

          <div className="active-hub-highlights-wrap">
            <span className="highlights-label">Key Sourced Categories &amp; Capabilities:</span>
            <div className="active-hub-highlights-grid">
              {activePin.highlights.map((h, i) => (
                <div key={i} className="highlight-pill">
                  <CheckCircle2 size={13} aria-hidden="true" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
