'use client';
import React, { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'New Arrivals', href: '#new-arrivals' },
  {
    label: 'Furniture',
    href: '#furniture',
    hasDropdown: true,
    children: [
      { label: 'Sofas & Armchairs', href: '#sofas' },
      { label: 'Tables & Desks', href: '#tables' },
      { label: 'Storage', href: '#storage' },
      { label: 'Beds & Bedroom', href: '#beds' },
    ],
  },
  {
    label: 'Lighting',
    href: '#lighting',
    hasDropdown: true,
    children: [
      { label: 'Pendant Lights', href: '#pendant' },
      { label: 'Floor Lamps', href: '#floor-lamps' },
      { label: 'Table Lamps', href: '#table-lamps' },
      { label: 'Wall Lights', href: '#wall-lights' },
    ],
  },
  {
    label: 'Home Accessories',
    href: '#home-accessories',
    hasDropdown: true,
    children: [
      { label: 'Decorative Objects', href: '#objects' },
      { label: 'Vases & Vessels', href: '#vases' },
      { label: 'Mirrors', href: '#mirrors' },
      { label: 'Trays & Bowls', href: '#trays' },
    ],
  },
  {
    label: 'Candles & Fragrance',
    href: '#candles',
    hasDropdown: true,
    children: [
      { label: 'Scented Candles', href: '#scented' },
      { label: 'Diffusers', href: '#diffusers' },
      { label: 'Room Sprays', href: '#sprays' },
    ],
  },
  {
    label: 'Coffee Table Books',
    href: '#books',
    hasDropdown: true,
    children: [
      { label: 'Architecture', href: '#architecture' },
      { label: 'Art & Design', href: '#art' },
      { label: 'Fashion', href: '#fashion' },
    ],
  },
  {
    label: 'Textiles',
    href: '#textiles',
    hasDropdown: true,
    children: [
      { label: 'Cushions', href: '#cushions' },
      { label: 'Throws', href: '#throws' },
      { label: 'Rugs', href: '#rugs' },
    ],
  },
  { label: 'Design Studio', href: '#studio' },
  { label: 'About Us', href: '#about' },
];

export default function SiteHeader() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      {/* Announcement bar */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e8e8e1',
          textAlign: 'center',
          padding: '8px 30px',
        }}
      >
        <p
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            letterSpacing: '1.5px',
            color: '#060606',
            margin: 0,
          }}
        >
          Amsterdam | Rotterdam | Berlin
        </p>
      </div>

      {/* Main header */}
      <header
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e8e8e1',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          style={{
            maxWidth: '1500px',
            margin: '0 auto',
            padding: '0 30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: '"Proza Libre", sans-serif',
              fontSize: '22px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#060606',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            HEMERE
          </a>

          {/* Search bar */}
          <div
            style={{
              flex: '1',
              maxWidth: '420px',
              margin: '0 40px',
              position: 'relative',
            }}
          >
            <input
              type="search"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              style={{
                width: '100%',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                letterSpacing: '1px',
                color: '#060606',
                background: '#f5f5f3',
                border: '1px solid #e8e8e1',
                borderRadius: 0,
                padding: '9px 40px 9px 14px',
                outline: 'none',
              }}
            />
            <button
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#060606',
              }}
              aria-label="Search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>

          {/* Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 0 }}>
            <a
              href="#account"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#060606',
                textDecoration: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="hidden-mobile">Account</span>
            </a>
            <a
              href="#cart"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 300,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#060606',
                textDecoration: 'none',
                position: 'relative',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="hidden-mobile">Cart</span>
            </a>
            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                color: '#060606',
                display: 'none',
              }}
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          style={{
            borderTop: '1px solid #e8e8e1',
            background: '#ffffff',
          }}
          className="desktop-nav"
        >
          <div
            style={{
              maxWidth: '1500px',
              margin: '0 auto',
              padding: '0 30px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            {navItems.map((item) => (
              <div
                key={item.label}
                style={{ position: 'relative' }}
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 300,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#060606',
                    textDecoration: 'none',
                    padding: '14px 18px',
                    whiteSpace: 'nowrap',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#6b6b6b';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#060606';
                  }}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      style={{
                        transform: openDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                      }}
                    >
                      <polyline points="2,3 5,7 8,3" />
                    </svg>
                  )}
                </a>

                {/* Dropdown */}
                {item.hasDropdown && item.children && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      background: '#ffffff',
                      border: '1px solid #e8e8e1',
                      minWidth: '200px',
                      zIndex: 100,
                      opacity: openDropdown === item.label ? 1 : 0,
                      pointerEvents: openDropdown === item.label ? 'auto' : 'none',
                      transform: openDropdown === item.label ? 'translateY(0)' : 'translateY(-6px)',
                      transition: 'opacity 0.2s ease, transform 0.2s ease',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                    }}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        style={{
                          display: 'block',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '11px',
                          fontWeight: 300,
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                          color: '#060606',
                          textDecoration: 'none',
                          padding: '11px 20px',
                          borderBottom: '1px solid #f0f0ec',
                          transition: 'background 0.15s ease',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = '#f5f5f3';
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav
            style={{
              background: '#ffffff',
              borderTop: '1px solid #e8e8e1',
              padding: '16px 0',
            }}
            className="mobile-nav"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: 300,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: '#060606',
                  textDecoration: 'none',
                  padding: '12px 30px',
                  borderBottom: '1px solid #f0f0ec',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hidden-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
