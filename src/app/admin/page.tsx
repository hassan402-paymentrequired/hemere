'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  customer: string;
  date: string;
  amount: string;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  items: number;
}

interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  stock: number;
}

const recentOrders: Order[] = [
  {
    id: '#HM-4821',
    customer: 'Sophie van den Berg',
    date: '18 May 2026',
    amount: '₦1,240.00',
    status: 'Delivered',
    items: 3,
  },
  {
    id: '#HM-4820',
    customer: 'Luca Rossi',
    date: '17 May 2026',
    amount: '₦680.00',
    status: 'Shipped',
    items: 2,
  },
  {
    id: '#HM-4819',
    customer: 'Emma Müller',
    date: '17 May 2026',
    amount: '₦3,450.00',
    status: 'Processing',
    items: 5,
  },
  {
    id: '#HM-4818',
    customer: 'James Thornton',
    date: '16 May 2026',
    amount: '₦290.00',
    status: 'Delivered',
    items: 1,
  },
  {
    id: '#HM-4817',
    customer: 'Isabelle Dupont',
    date: '15 May 2026',
    amount: '₦920.00',
    status: 'Cancelled',
    items: 2,
  },
];

const products: Product[] = [
  { id: 'P-001', name: 'Arc Floor Lamp', category: 'Lighting', price: '₦480', stock: 12 },
  { id: 'P-002', name: 'Linen Throw Cushion', category: 'Textiles', price: '₦95', stock: 34 },
  { id: 'P-003', name: 'Marble Side Table', category: 'Furniture', price: '₦1,200', stock: 5 },
  { id: 'P-004', name: 'Amber Glass Vase', category: 'Home Accessories', price: '₦145', stock: 18 },
  {
    id: 'P-005',
    name: 'Soy Wax Candle Set',
    category: 'Candles & Fragrance',
    price: '₦68',
    stock: 42,
  },
];

const statusColors: Record<Order['status'], { bg: string; color: string }> = {
  Delivered: { bg: '#f0faf4', color: '#1a7a3c' },
  Processing: { bg: '#fff8e6', color: '#a06000' },
  Shipped: { bg: '#eef4ff', color: '#1a4fa0' },
  Cancelled: { bg: '#fff0f0', color: '#a01a1a' },
};

const navItems = [
  { label: 'Dashboard', icon: 'grid', href: '/admin', active: true },
  { label: 'Orders', icon: 'package', href: '/admin/orders' },
  { label: 'Products', icon: 'tag', href: '/admin/products' },
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

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState('Dashboard');

  const stats = [
    { label: 'Total Revenue', value: '₦48,320', change: '+12.4%', up: true },
    { label: 'Orders This Month', value: '184', change: '+8.1%', up: true },
    { label: 'Active Customers', value: '1,042', change: '+5.3%', up: true },
    { label: 'Avg. Order Value', value: '₦262', change: '-2.1%', up: false },
  ];

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
        {/* Logo */}
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

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                background: activeNav === item.label ? 'rgba(255,255,255,0.08)' : 'none',
                border: 'none',
                borderLeft:
                  activeNav === item.label ? '2px solid #ffffff' : '2px solid transparent',
                cursor: 'pointer',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '12px',
                fontWeight: activeNav === item.label ? 400 : 300,
                letterSpacing: '1px',
                color: activeNav === item.label ? '#ffffff' : 'rgba(255,255,255,0.5)',
                textAlign: 'left',
                transition: 'all 0.15s ease',
              }}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom */}
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

      {/* Main content */}
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
              Dashboard
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
              Monday, 18 May 2026
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
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
              Export
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  background: '#060606',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    color: '#060606',
                    margin: 0,
                    letterSpacing: '0.3px',
                  }}
                >
                  Admin
                </p>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '10px',
                    fontWeight: 300,
                    color: '#999',
                    margin: 0,
                    letterSpacing: '0.3px',
                  }}
                >
                  admin@hemere.com
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, padding: '32px' }}>
          {/* Stats */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
              marginBottom: '32px',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '24px' }}
              >
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '10px',
                    fontWeight: 400,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#999',
                    margin: '0 0 12px',
                  }}
                >
                  {stat.label}
                </p>
                <p
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '28px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: '0 0 8px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    color: stat.up ? '#1a7a3c' : '#a01a1a',
                    margin: 0,
                    letterSpacing: '0.5px',
                  }}
                >
                  {stat.change} vs last month
                </p>
              </div>
            ))}
          </div>

          {/* Two-column layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '24px' }}>
            {/* Recent Orders */}
            <div style={{ background: '#ffffff', border: '1px solid #e8e8e1' }}>
              <div
                style={{
                  padding: '20px 24px',
                  borderBottom: '1px solid #e8e8e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h2
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: 0,
                  }}
                >
                  Recent Orders
                </h2>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    letterSpacing: '1px',
                    color: '#6b6b6b',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  View all
                </button>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid #e8e8e1' }}>
                    {['Order', 'Customer', 'Date', 'Items', 'Amount', 'Status'].map((h) => (
                      <th
                        key={h}
                        style={{
                          padding: '12px 24px',
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
                  {recentOrders.map((order, i) => (
                    <tr
                      key={order.id}
                      style={{
                        borderBottom: i < recentOrders.length - 1 ? '1px solid #f0f0ec' : 'none',
                      }}
                    >
                      <td
                        style={{
                          padding: '14px 24px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: 400,
                          color: '#060606',
                          letterSpacing: '0.3px',
                        }}
                      >
                        {order.id}
                      </td>
                      <td
                        style={{
                          padding: '14px 24px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: 300,
                          color: '#060606',
                          letterSpacing: '0.3px',
                        }}
                      >
                        {order.customer}
                      </td>
                      <td
                        style={{
                          padding: '14px 24px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '11px',
                          fontWeight: 300,
                          color: '#999',
                          letterSpacing: '0.3px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {order.date}
                      </td>
                      <td
                        style={{
                          padding: '14px 24px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: 300,
                          color: '#6b6b6b',
                          letterSpacing: '0.3px',
                          textAlign: 'center',
                        }}
                      >
                        {order.items}
                      </td>
                      <td
                        style={{
                          padding: '14px 24px',
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: 400,
                          color: '#060606',
                          letterSpacing: '0.3px',
                        }}
                      >
                        {order.amount}
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <span
                          style={{
                            ...statusColors[order.status],
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '10px',
                            fontWeight: 400,
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                            padding: '4px 10px',
                            display: 'inline-block',
                          }}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Products */}
            <div style={{ background: '#ffffff', border: '1px solid #e8e8e1' }}>
              <div
                style={{
                  padding: '20px 24px',
                  borderBottom: '1px solid #e8e8e1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <h2
                  style={{
                    fontFamily: '"Proza Libre", sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#060606',
                    margin: 0,
                  }}
                >
                  Top Products
                </h2>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '11px',
                    fontWeight: 300,
                    letterSpacing: '1px',
                    color: '#6b6b6b',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textUnderlineOffset: '3px',
                  }}
                >
                  Manage
                </button>
              </div>
              <div>
                {products.map((product, i) => (
                  <div
                    key={product.id}
                    style={{
                      padding: '16px 24px',
                      borderBottom: i < products.length - 1 ? '1px solid #f0f0ec' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '12px',
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: 400,
                          color: '#060606',
                          margin: '0 0 3px',
                          letterSpacing: '0.3px',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
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
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {product.category}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <p
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '12px',
                          fontWeight: 400,
                          color: '#060606',
                          margin: '0 0 3px',
                          letterSpacing: '0.3px',
                        }}
                      >
                        {product.price}
                      </p>
                      <p
                        style={{
                          fontFamily: 'Poppins, sans-serif',
                          fontSize: '10px',
                          fontWeight: 300,
                          color: product.stock < 10 ? '#a01a1a' : '#1a7a3c',
                          margin: 0,
                          letterSpacing: '0.5px',
                        }}
                      >
                        {product.stock} in stock
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
