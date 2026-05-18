'use client';
import React, { useState } from 'react';
import Link from 'next/link';

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

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #e8e8e1',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '13px',
  fontWeight: 300,
  color: '#060606',
  outline: 'none',
  background: '#ffffff',
  boxSizing: 'border-box',
  letterSpacing: '0.3px',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Poppins, sans-serif',
  fontSize: '10px',
  fontWeight: 400,
  letterSpacing: '1.5px',
  textTransform: 'uppercase',
  color: '#6b6b6b',
  display: 'block',
  marginBottom: '8px',
};

export default function NewProduct() {
  const [status, setStatus] = useState<'Active' | 'Draft'>('Draft');
  const [form, setForm] = useState({
    name: '',
    description: '',
    category: '',
    price: '',
    comparePrice: '',
    sku: '',
    stock: '',
    weight: '',
    dimensions: '',
    material: '',
    tags: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link
              href="/admin/products"
              style={{
                color: '#999',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>
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
              Add New Product
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={() => setStatus('Draft')}
              style={{
                background: 'none',
                border: '1px solid #e8e8e1',
                padding: '8px 20px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#060606',
                cursor: 'pointer',
              }}
            >
              Save Draft
            </button>
            <button
              onClick={() => setStatus('Active')}
              style={{
                background: '#060606',
                border: '1px solid #060606',
                padding: '8px 20px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '11px',
                fontWeight: 400,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#ffffff',
                cursor: 'pointer',
              }}
            >
              Publish
            </button>
          </div>
        </header>

        <main style={{ flex: 1, padding: '32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 320px',
              gap: '24px',
              maxWidth: '1200px',
            }}
          >
            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Basic info */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '28px' }}>
                <h2
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 24px',
                    letterSpacing: '0.02em',
                  }}
                >
                  Product Information
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div>
                    <label style={labelStyle}>Product Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Arc Floor Lamp — Brass"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Description</label>
                    <textarea
                      name="description"
                      value={form.description}
                      onChange={handleChange}
                      placeholder="Describe the product — materials, dimensions, care instructions..."
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical', lineHeight: '1.6' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={labelStyle}>Category *</label>
                      <select
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="">Select category</option>
                        <option>Furniture</option>
                        <option>Lighting</option>
                        <option>Home Accessories</option>
                        <option>Candles & Fragrance</option>
                        <option>Textiles</option>
                        <option>Coffee Table Books</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Material</label>
                      <input
                        name="material"
                        value={form.material}
                        onChange={handleChange}
                        placeholder="e.g. Brass, Marble, Linen"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Tags</label>
                    <input
                      name="tags"
                      value={form.tags}
                      onChange={handleChange}
                      placeholder="new, bestseller, limited — separate with commas"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '28px' }}>
                <h2
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 24px',
                    letterSpacing: '0.02em',
                  }}
                >
                  Pricing
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Price *</label>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          left: '14px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '13px',
                          fontWeight: 300,
                          color: '#6b6b6b',
                        }}
                      >
                        ₦
                      </span>
                      <input
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        placeholder="0.00"
                        style={{ ...inputStyle, paddingLeft: '28px' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>Compare at Price</label>
                    <div style={{ position: 'relative' }}>
                      <span
                        style={{
                          position: 'absolute',
                          left: '14px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '13px',
                          fontWeight: 300,
                          color: '#6b6b6b',
                        }}
                      >
                        ₦
                      </span>
                      <input
                        name="comparePrice"
                        value={form.comparePrice}
                        onChange={handleChange}
                        placeholder="0.00"
                        style={{ ...inputStyle, paddingLeft: '28px' }}
                      />
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: '#999',
                    margin: '12px 0 0',
                    letterSpacing: '0.3px',
                  }}
                >
                  Set a compare at price to show a sale. The original price will appear crossed out.
                </p>
              </div>

              {/* Inventory */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '28px' }}>
                <h2
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 24px',
                    letterSpacing: '0.02em',
                  }}
                >
                  Inventory & Shipping
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '16px',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <label style={labelStyle}>SKU</label>
                    <input
                      name="sku"
                      value={form.sku}
                      onChange={handleChange}
                      placeholder="e.g. HM-ARC-001"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Stock Quantity</label>
                    <input
                      name="stock"
                      value={form.stock}
                      onChange={handleChange}
                      type="number"
                      placeholder="0"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Weight (kg)</label>
                    <input
                      name="weight"
                      value={form.weight}
                      onChange={handleChange}
                      placeholder="0.0"
                      style={inputStyle}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Dimensions (W × D × H cm)</label>
                  <input
                    name="dimensions"
                    value={form.dimensions}
                    onChange={handleChange}
                    placeholder="e.g. 40 × 40 × 160"
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Images */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '28px' }}>
                <h2
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 24px',
                    letterSpacing: '0.02em',
                  }}
                >
                  Product Images
                </h2>
                <div
                  style={{
                    border: '2px dashed #e8e8e1',
                    padding: '48px 24px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    background: '#fafaf8',
                  }}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="1.5"
                    style={{ margin: '0 auto 12px', display: 'block' }}
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '13px',
                      fontWeight: 300,
                      color: '#6b6b6b',
                      margin: '0 0 4px',
                      letterSpacing: '0.3px',
                    }}
                  >
                    Drop images here or click to upload
                  </p>
                  <p
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '11px',
                      fontWeight: 300,
                      color: '#999',
                      margin: 0,
                      letterSpacing: '0.3px',
                    }}
                  >
                    PNG, JPG, WEBP — max 10MB each
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Status */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '24px' }}>
                <h3
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 16px',
                  }}
                >
                  Status
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {(['Active', 'Draft'] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => setStatus(s)}
                      style={{
                        padding: '10px 16px',
                        border: status === s ? '1px solid #060606' : '1px solid #e8e8e1',
                        background: status === s ? '#060606' : '#ffffff',
                        color: status === s ? '#ffffff' : '#6b6b6b',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '11px',
                        fontWeight: 300,
                        letterSpacing: '1px',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background:
                            status === s ? (s === 'Active' ? '#1a7a3c' : '#a06000') : '#e8e8e1',
                          flexShrink: 0,
                        }}
                      />
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collections */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '24px' }}>
                <h3
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 16px',
                  }}
                >
                  Collections
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {['New Arrivals', 'Bestsellers', 'Sale', 'Featured', 'Limited Edition'].map(
                    (c) => (
                      <label
                        key={c}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          cursor: 'pointer',
                        }}
                      >
                        <input type="checkbox" style={{ cursor: 'pointer' }} />
                        <span
                          style={{
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '12px',
                            fontWeight: 300,
                            color: '#060606',
                            letterSpacing: '0.3px',
                          }}
                        >
                          {c}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              {/* SEO */}
              <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '24px' }}>
                <h3
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 16px',
                  }}
                >
                  SEO Preview
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div>
                    <label style={labelStyle}>Page Title</label>
                    <input
                      placeholder={form.name || 'Product name'}
                      style={{ ...inputStyle, fontSize: '12px' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Meta Description</label>
                    <textarea
                      placeholder="Brief product description for search engines..."
                      rows={3}
                      style={{ ...inputStyle, fontSize: '12px', resize: 'vertical' }}
                    />
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={() => setStatus('Active')}
                  style={{
                    width: '100%',
                    background: '#060606',
                    color: '#ffffff',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    padding: '14px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Publish Product
                </button>
                <button
                  onClick={() => setStatus('Draft')}
                  style={{
                    width: '100%',
                    background: '#ffffff',
                    color: '#060606',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 400,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    padding: '14px',
                    border: '1px solid #e8e8e1',
                    cursor: 'pointer',
                  }}
                >
                  Save as Draft
                </button>
                <Link
                  href="/admin/products"
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: '#999',
                    letterSpacing: '1px',
                    textDecoration: 'none',
                    padding: '10px',
                    display: 'block',
                  }}
                >
                  Discard
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
