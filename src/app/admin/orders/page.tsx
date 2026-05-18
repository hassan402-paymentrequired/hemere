'use client';
import React, { useState } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  customer: string;
  email: string;
  date: string;
  amount: string;
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Cancelled';
  items: number;
  payment: string;
}

const allOrders: Order[] = [
  { id: '#HM-4821', customer: 'Sophie van den Berg', email: 'sophie@example.com', date: '18 May 2026', amount: '€1,240.00', status: 'Delivered', items: 3, payment: 'Visa •••• 4242' },
  { id: '#HM-4820', customer: 'Luca Rossi', email: 'luca@example.com', date: '17 May 2026', amount: '€680.00', status: 'Shipped', items: 2, payment: 'Mastercard •••• 1234' },
  { id: '#HM-4819', customer: 'Emma Müller', email: 'emma@example.com', date: '17 May 2026', amount: '€3,450.00', status: 'Processing', items: 5, payment: 'iDEAL' },
  { id: '#HM-4818', customer: 'James Thornton', email: 'james@example.com', date: '16 May 2026', amount: '€290.00', status: 'Delivered', items: 1, payment: 'Visa •••• 9876' },
  { id: '#HM-4817', customer: 'Isabelle Dupont', email: 'isabelle@example.com', date: '15 May 2026', amount: '€920.00', status: 'Cancelled', items: 2, payment: 'Mastercard •••• 5678' },
  { id: '#HM-4816', customer: 'Nora Andersen', email: 'nora@example.com', date: '14 May 2026', amount: '€560.00', status: 'Delivered', items: 2, payment: 'Visa •••• 3311' },
  { id: '#HM-4815', customer: 'Marco Bianchi', email: 'marco@example.com', date: '13 May 2026', amount: '€1,890.00', status: 'Shipped', items: 4, payment: 'PayPal' },
  { id: '#HM-4814', customer: 'Clara Hoffmann', email: 'clara@example.com', date: '12 May 2026', amount: '€340.00', status: 'Delivered', items: 1, payment: 'Visa •••• 7722' },
  { id: '#HM-4813', customer: 'Thomas Eriksson', email: 'thomas@example.com', date: '11 May 2026', amount: '€2,100.00', status: 'Processing', items: 3, payment: 'iDEAL' },
  { id: '#HM-4812', customer: 'Amelia Laurent', email: 'amelia@example.com', date: '10 May 2026', amount: '€475.00', status: 'Delivered', items: 2, payment: 'Mastercard •••• 4499' },
];

const statusColors: Record<Order['status'], { bg: string; color: string }> = {
  Delivered: { bg: '#f0faf4', color: '#1a7a3c' },
  Processing: { bg: '#fff8e6', color: '#a06000' },
  Shipped: { bg: '#eef4ff', color: '#1a4fa0' },
  Cancelled: { bg: '#fff0f0', color: '#a01a1a' },
};

const navItems = [
  { label: 'Dashboard', icon: 'grid', href: '/admin' },
  { label: 'Orders', icon: 'package', href: '/admin/orders', active: true },
  { label: 'Products', icon: 'tag', href: '/admin/products' },
  { label: 'Customers', icon: 'users', href: '/admin' },
  { label: 'Analytics', icon: 'bar-chart', href: '/admin' },
  { label: 'Settings', icon: 'settings', href: '/admin' },
];

function NavIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    grid: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>,
    package: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
    tag: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
    users: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    'bar-chart': <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
    settings: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>,
  };
  return <>{icons[name] || null}</>;
}

export default function AdminOrders() {
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('All');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filtered = allOrders.filter((o) => {
    const matchSearch = o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === 'All' || o.status === filterStatus;
    return matchSearch && matchStatus;
  });

  const statusCounts = {
    All: allOrders.length,
    Processing: allOrders.filter((o) => o.status === 'Processing').length,
    Shipped: allOrders.filter((o) => o.status === 'Shipped').length,
    Delivered: allOrders.filter((o) => o.status === 'Delivered').length,
    Cancelled: allOrders.filter((o) => o.status === 'Cancelled').length,
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#060606', background: '#f5f5f3', minHeight: '100vh', display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '240px', background: '#060606', minHeight: '100vh', display: 'flex', flexDirection: 'column', flexShrink: 0, position: 'sticky', top: 0, height: '100vh' }}>
        <div style={{ padding: '24px 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" style={{ fontFamily: '"Proza Libre", sans-serif', fontSize: '20px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffff', textDecoration: 'none' }}>HEMERE</Link>
          <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 300, letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', margin: '4px 0 0', textTransform: 'uppercase' }}>Admin Panel</p>
        </div>
        <nav style={{ flex: 1, padding: '16px 0' }}>
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 24px', background: item.active ? 'rgba(255,255,255,0.08)' : 'none', borderLeft: item.active ? '2px solid #ffffff' : '2px solid transparent', fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: item.active ? 400 : 300, letterSpacing: '1px', color: item.active ? '#ffffff' : 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'all 0.15s ease' }}>
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, letterSpacing: '1px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
            Back to Store
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <header style={{ background: '#ffffff', borderBottom: '1px solid #e8e8e1', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div>
            <h1 style={{ fontFamily: '"Proza Libre", sans-serif', fontSize: '20px', fontWeight: 500, color: '#060606', margin: 0, letterSpacing: '0.02em' }}>Orders</h1>
            <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, color: '#999', letterSpacing: '0.5px', margin: 0 }}>{allOrders.length} total orders</p>
          </div>
          <button style={{ background: 'none', border: '1px solid #e8e8e1', padding: '8px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#060606', cursor: 'pointer' }}>
            Export CSV
          </button>
        </header>

        <main style={{ flex: 1, padding: '32px' }}>
          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'Processing', count: statusCounts.Processing, color: '#a06000', bg: '#fff8e6' },
              { label: 'Shipped', count: statusCounts.Shipped, color: '#1a4fa0', bg: '#eef4ff' },
              { label: 'Delivered', count: statusCounts.Delivered, color: '#1a7a3c', bg: '#f0faf4' },
              { label: 'Cancelled', count: statusCounts.Cancelled, color: '#a01a1a', bg: '#fff0f0' },
            ].map((s) => (
              <div key={s.label} style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '20px 24px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', margin: '0 0 8px' }}>{s.label}</p>
                <p style={{ fontFamily: '"Proza Libre", sans-serif', fontSize: '28px', fontWeight: 500, color: '#060606', margin: 0 }}>{s.count}</p>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div style={{ background: '#ffffff', border: '1px solid #e8e8e1', padding: '16px 24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ position: 'relative', flex: '1', minWidth: '200px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }}>
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input type="text" placeholder="Search by order ID or customer..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '100%', paddingLeft: '36px', paddingRight: '12px', paddingTop: '9px', paddingBottom: '9px', border: '1px solid #e8e8e1', fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 300, color: '#060606', outline: 'none', background: '#f5f5f3', boxSizing: 'border-box' }} />
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {['All', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((s) => (
                <button key={s} onClick={() => setFilterStatus(s)} style={{ padding: '8px 16px', border: filterStatus === s ? '1px solid #060606' : '1px solid #e8e8e1', background: filterStatus === s ? '#060606' : '#ffffff', color: filterStatus === s ? '#ffffff' : '#6b6b6b', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, letterSpacing: '0.5px', cursor: 'pointer', transition: 'all 0.15s ease' }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div style={{ background: '#ffffff', border: '1px solid #e8e8e1' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #e8e8e1' }}>
                  {['Order', 'Customer', 'Date', 'Items', 'Payment', 'Amount', 'Status', ''].map((h) => (
                    <th key={h} style={{ padding: '12px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#999', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((order, i) => (
                  <tr key={order.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #f0f0ec' : 'none', cursor: 'pointer' }} onClick={() => setSelectedOrder(order)}>
                    <td style={{ padding: '14px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: '#060606', letterSpacing: '0.3px' }}>{order.id}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: '#060606', margin: '0 0 2px', letterSpacing: '0.3px' }}>{order.customer}</p>
                      <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 300, color: '#999', margin: 0, letterSpacing: '0.3px' }}>{order.email}</p>
                    </td>
                    <td style={{ padding: '14px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, color: '#999', letterSpacing: '0.3px', whiteSpace: 'nowrap' }}>{order.date}</td>
                    <td style={{ padding: '14px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 300, color: '#6b6b6b', letterSpacing: '0.3px', textAlign: 'center' }}>{order.items}</td>
                    <td style={{ padding: '14px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, color: '#6b6b6b', letterSpacing: '0.3px' }}>{order.payment}</td>
                    <td style={{ padding: '14px 20px', fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: '#060606', letterSpacing: '0.3px' }}>{order.amount}</td>
                    <td style={{ padding: '14px 20px' }}>
                      <span style={{ ...statusColors[order.status], fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', display: 'inline-block' }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 20px' }}>
                      <button onClick={(e) => { e.stopPropagation(); setSelectedOrder(order); }} style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, color: '#060606', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.5px', borderBottom: '1px solid #060606', paddingBottom: '1px' }}>Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>

      {/* Order Detail Panel */}
      {selectedOrder && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} onClick={() => setSelectedOrder(null)} />
          <div style={{ position: 'relative', width: '420px', background: '#ffffff', height: '100vh', overflowY: 'auto', boxShadow: '-4px 0 24px rgba(0,0,0,0.1)' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid #e8e8e1', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontFamily: '"Proza Libre", sans-serif', fontSize: '18px', fontWeight: 500, color: '#060606', margin: '0 0 4px' }}>{selectedOrder.id}</h2>
                <span style={{ ...statusColors[selectedOrder.status], fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '1px', textTransform: 'uppercase', padding: '4px 10px', display: 'inline-block' }}>
                  {selectedOrder.status}
                </span>
              </div>
              <button onClick={() => setSelectedOrder(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#999', padding: '4px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', margin: '0 0 12px' }}>Customer</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', fontWeight: 400, color: '#060606', margin: '0 0 4px' }}>{selectedOrder.customer}</p>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 300, color: '#6b6b6b', margin: 0 }}>{selectedOrder.email}</p>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', margin: '0 0 12px' }}>Order Details</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    { label: 'Date', value: selectedOrder.date },
                    { label: 'Items', value: `${selectedOrder.items} item${selectedOrder.items > 1 ? 's' : ''}` },
                    { label: 'Payment', value: selectedOrder.payment },
                    { label: 'Total', value: selectedOrder.amount },
                  ].map((row) => (
                    <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #f0f0ec' }}>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 300, color: '#999', letterSpacing: '0.5px' }}>{row.label}</span>
                      <span style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 400, color: '#060606', letterSpacing: '0.3px' }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', color: '#999', margin: '0 0 12px' }}>Update Status</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {(['Processing', 'Shipped', 'Delivered', 'Cancelled'] as Order['status'][]).map((s) => (
                    <button key={s} style={{ padding: '8px 14px', border: selectedOrder.status === s ? '1px solid #060606' : '1px solid #e8e8e1', background: selectedOrder.status === s ? '#060606' : '#ffffff', color: selectedOrder.status === s ? '#ffffff' : '#6b6b6b', fontFamily: 'Poppins, sans-serif', fontSize: '10px', fontWeight: 300, letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <button style={{ width: '100%', background: '#060606', color: '#ffffff', fontFamily: 'Poppins, sans-serif', fontSize: '11px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase', padding: '14px', border: 'none', cursor: 'pointer' }}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
