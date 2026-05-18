'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '13px',
    fontWeight: 300,
    letterSpacing: '0.5px',
    color: '#060606',
    background: '#ffffff',
    border: '1px solid #d0d0cc',
    padding: '13px 14px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '11px',
    fontWeight: 400,
    letterSpacing: '1.5px',
    textTransform: 'uppercase' as const,
    color: '#060606',
    display: 'block',
    marginBottom: '6px',
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', color: '#060606', background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ borderBottom: '1px solid #e8e8e1', padding: '0 40px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link
          href="/"
          style={{
            fontFamily: '"Proza Libre", sans-serif',
            fontSize: '22px',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#060606',
            textDecoration: 'none',
          }}
        >
          HEMERE
        </Link>
        <Link
          href="/login"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: '11px',
            fontWeight: 300,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#666',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to sign in
        </Link>
      </header>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>
        <div style={{ width: '100%', maxWidth: '420px' }}>
          {!submitted ? (
            <>
              {/* Title */}
              <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                <div style={{ width: '56px', height: '56px', background: '#f5f5f3', border: '1px solid #e8e8e1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#060606" strokeWidth="1.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h1 style={{ fontFamily: '"Proza Libre", sans-serif', fontSize: '28px', fontWeight: 500, color: '#060606', margin: '0 0 10px', letterSpacing: '0.02em' }}>
                  Reset Password
                </h1>
                <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 300, color: '#6b6b6b', letterSpacing: '0.5px', margin: 0, lineHeight: '1.7' }}>
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: '#060606',
                    color: '#ffffff',
                    border: 'none',
                    padding: '16px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '12px',
                    fontWeight: 500,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    marginTop: '8px',
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#333')}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = '#060606')}
                >
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            /* Success state */
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: '#f5f5f3', border: '1px solid #e8e8e1', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#060606" strokeWidth="1.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h1 style={{ fontFamily: '"Proza Libre", sans-serif', fontSize: '28px', fontWeight: 500, color: '#060606', margin: '0 0 12px', letterSpacing: '0.02em' }}>
                Check Your Email
              </h1>
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '12px', fontWeight: 300, color: '#6b6b6b', letterSpacing: '0.5px', lineHeight: '1.7', margin: '0 0 32px' }}>
                We&apos;ve sent a password reset link to <strong style={{ color: '#060606', fontWeight: 500 }}>{email}</strong>. Please check your inbox.
              </p>
              <Link
                href="/login"
                style={{
                  display: 'inline-block',
                  background: '#060606',
                  color: '#ffffff',
                  padding: '14px 40px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
