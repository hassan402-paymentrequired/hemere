'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
  status: 'Active' | 'Draft' | 'Out of Stock';
  image: string;
  alt: string;
}

const allProducts: Product[] = [
  {
    id: 'P-001',
    name: 'Arc Floor Lamp',
    category: 'Lighting',
    price: '₦480',
    stock: 12,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17fc90993-1772441226475.png',
    alt: 'Arc floor lamp with curved brass arm',
  },
  {
    id: 'P-002',
    name: 'Linen Throw Cushion',
    category: 'Textiles',
    price: '₦95',
    stock: 34,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_17c0ea455-1772224813028.png',
    alt: 'Ivory boucle cushion with textured weave',
  },
  {
    id: 'P-003',
    name: 'Marble Side Table',
    category: 'Furniture',
    price: '₦1,200',
    stock: 5,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1921999f1-1772601616313.png',
    alt: 'Marble side table with slim brass legs',
  },
  {
    id: 'P-004',
    name: 'Amber Glass Vase',
    category: 'Home Accessories',
    price: '₦145',
    stock: 18,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1612943727861-72cc8b272114',
    alt: 'Amber smoked glass statement vase',
  },
  {
    id: 'P-005',
    name: 'Soy Wax Candle Set',
    category: 'Candles & Fragrance',
    price: '₦68',
    stock: 42,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13d13c4a5-1772135351858.png',
    alt: 'Luxury soy wax candle set in glass vessels',
  },
  {
    id: 'P-006',
    name: 'Vessel — Matte Travertine',
    category: 'Home Accessories',
    price: '₦185',
    stock: 8,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d8384688-1772142772408.png',
    alt: 'Matte travertine decorative vessel',
  },
  {
    id: 'P-007',
    name: 'Smoked Glass Vase',
    category: 'Home Accessories',
    price: '₦145',
    stock: 0,
    status: 'Out of Stock',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_15bcfeed3-1771507445228.png',
    alt: 'Smoked glass vase with elongated silhouette',
  },
  {
    id: 'P-008',
    name: 'The Art of Interiors',
    category: 'Coffee Table Books',
    price: '₦58',
    stock: 22,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1cb32b081-1772217915322.png',
    alt: 'Coffee table book on interior design',
  },
  {
    id: 'P-009',
    name: 'Boucle Armchair',
    category: 'Furniture',
    price: '₦2,400',
    stock: 3,
    status: 'Draft',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1065d7918-1771884763956.png',
    alt: 'Boucle upholstered armchair in cream',
  },
  {
    id: 'P-010',
    name: 'Amber Oud Candle 220g',
    category: 'Candles & Fragrance',
    price: '₦68',
    stock: 15,
    status: 'Active',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1465fbef0-1773056688173.png',
    alt: 'Amber oud scented candle in glass vessel',
  },
];

const statusColors: Record<Product['status'], { bg: string; color: string }> = {
  Active: { bg: '#f0faf4', color: '#1a7a3c' },
  Draft: { bg: '#fff8e6', color: '#a06000' },
  'Out of Stock': { bg: '#fff0f0', color: '#a01a1a' },
};

const navItems = [
  { label: 'Dashboard', icon: 'grid', href: '/admin' },
  { label: 'Orders', icon: 'package', href: '/admin/orders' },
  { label: 'Products', icon: 'tag', href: '/admin/products', active: true },
  { label: 'Customers', icon: 'users', href: '/admin' },
  { label: 'Analytics', icon: 'bar-chart', href: '/admin' },
  { label: 'Settings', icon: 'settings', href: '/admin' },
];

function NavIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    grid: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    package: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    tag: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    users: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    'bar-chart': (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    settings: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  };
  return <>{icons[name] || null}</>;
}

export default function AdminProducts() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const filtered = allProducts.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'All' || p.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const toggleAll = () => {
    setSelectedIds(selectedIds.length === filtered.length ? [] : filtered.map((p) => p.id));
  };

  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        color: '#060606',
        background: '#f5f5f3',
        minHeight: '100vh',
        display: 'flex',
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: '240px',
          background: '#060606',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'sticky',
          top: 0,
          height: '100vh',
        }}
      >
        <div
          style={{ padding: '24px 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <Link
            href="/"
            style={{
              fontFamily: '"Proza Libre", sans-serif',
              fontSize: '20px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              textDecoration: 'none',
            }}
          >
            HEMERE
          </Link>
          <p
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '10px',
              fontWeight: 300,
              letterSpacing: '2px',
              color: 'rgba(255,255,255,0.4)',
              margin: '4px 0 0',
              textTransform: 'uppercase',
            }}
          >
            Admin Panel
          </p>
        </div>
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: item.active ? 'rgba(255,255,255,0.08)' : 'none',
                borderLeft: item.active ? '2px solid #ffffff' : '2px solid transparent',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: item.active ? 400 : 300,
                letterSpacing: '1px',
                color: item.active ? '#ffffff' : 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'all 0.15s ease',
              }}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '1px',
              color: 'rgba(255,255,255,0.4)',
              textDecoration: 'none',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        {/* Top bar */}
        <header
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #e8e8e1',
            padding: '0 32px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: '"Proza Libre", sans-serif',
                fontSize: '20px',
                fontWeight: 500,
                color: '#060606',
                margin: 0,
                letterSpacing: '0.02em',
              }}
            >
              Products
            </h1>
            <p
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 300,
                color: '#999',
                letterSpacing: '0.5px',
                margin: 0,
              }}
            >
              {allProducts.length} total products
            </p>
          </div>
          <Link
            href="/admin/products/new"
            style={{
              background: '#060606',
              color: '#ffffff',
              fontFamily: 'Poppins, sans-serif',
              fontSize: '11px',
              fontWeight: 400,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '10px 24px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            Add Product
          </Link>
        </header>

        <main style={{ flex: 1, padding: '32px' }}>
          {/* Filters */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e8e8e1',
              padding: '16px 24px',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '36px',
                  paddingRight: '12px',
                  paddingTop: '9px',
                  paddingBottom: '9px',
                  border: '1px solid #e8e8e1',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: 300,
                  color: '#060606',
                  outline: 'none',
                  background: '#f5f5f3',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['All', 'Active', 'Draft', 'Out of Stock'].map((s) => (
                <button
                  key={s}
                  onClick={() => setFilterStatus(s)}
                  style={{
                    padding: '8px 16px',
                    border: filterStatus === s ? '1px solid #060606' : '1px solid #e8e8e1',
                    background: filterStatus === s ? '#060606' : '#ffffff',
                    color: filterStatus === s ? '#ffffff' : '#6b6b6b',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    letterSpacing: '0.5px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div style={{ background: '#ffffff', border: '1px solid #e8e8e1' }}>
            {selectedIds.length > 0 && (
              <div
                style={{
                  padding: '12px 24px',
                  background: '#f5f5f3',
                  borderBottom: '1px solid #e8e8e1',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 300,
                    color: '#6b6b6b',
                  }}
                >
                  {selectedIds.length} selected
                </span>
                <button
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: '#a01a1a',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    letterSpacing: '0.5px',
                  }}
                >
                  Delete selected
                </button>
              </div>
            )}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e8e8e1' }}>
                  <th style={{ padding: '12px 24px', width: '40px' }}>
                    <input
                      type="checkbox"
                      checked={selectedIds.length === filtered.length && filtered.length > 0}
                      onChange={toggleAll}
                      style={{ cursor: 'pointer' }}
                    />
                  </th>
                  {['Product', 'Category', 'Price', 'Stock', 'Status', 'Actions'].map((h) => (
                    <th
                      key={h}
                      style={{
                        padding: '12px 16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '10px',
                        fontWeight: 400,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: '#999',
                        textAlign: 'left',
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((product, i) => (
                  <tr
                    key={product.id}
                    style={{
                      borderBottom: i < filtered.length - 1 ? '1px solid #f0f0ec' : 'none',
                      background: selectedIds.includes(product.id) ? '#fafaf8' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '14px 24px' }}>
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(product.id)}
                        onChange={() => toggleSelect(product.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '40px',
                            height: '40px',
                            background: '#f5f5f3',
                            flexShrink: 0,
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={product.image}
                            alt={product.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                        </div>
                        <div>
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '12px',
                              fontWeight: 400,
                              color: '#060606',
                              margin: '0 0 2px',
                              letterSpacing: '0.3px',
                            }}
                          >
                            {product.name}
                          </p>
                          <p
                            style={{
                              fontFamily: 'Poppins, sans-serif',
                              fontSize: '10px',
                              fontWeight: 300,
                              color: '#999',
                              margin: 0,
                              letterSpacing: '0.5px',
                            }}
                          >
                            {product.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        fontWeight: 300,
                        color: '#6b6b6b',
                        letterSpacing: '0.5px',
                      }}
                    >
                      {product.category}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        fontWeight: 400,
                        color: '#060606',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {product.price}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '12px',
                        fontWeight: 300,
                        color:
                          product.stock === 0
                            ? '#a01a1a'
                            : product.stock < 10
                              ? '#a06000'
                              : '#1a7a3c',
                        letterSpacing: '0.3px',
                      }}
                    >
                      {product.stock}
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <span
                        style={{
                          ...statusColors[product.status],
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '10px',
                          fontWeight: 400,
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          padding: '4px 10px',
                          display: 'inline-block',
                        }}
                      >
                        {product.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <Link
                          href={`/products/${product.id}`}
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '11px',
                            fontWeight: 300,
                            color: '#6b6b6b',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                            borderBottom: '1px solid #e8e8e1',
                            paddingBottom: '1px',
                          }}
                        >
                          View
                        </Link>
                        <Link
                          href="/admin/products/new"
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '11px',
                            fontWeight: 300,
                            color: '#060606',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                            borderBottom: '1px solid #060606',
                            paddingBottom: '1px',
                          }}
                        >
                          Edit
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filtered.length === 0 && (
              <div style={{ padding: '48px 24px', textAlign: 'center' }}>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '13px',
                    fontWeight: 300,
                    color: '#999',
                    letterSpacing: '0.5px',
                  }}
                >
                  No products found matching your search.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
