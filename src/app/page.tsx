import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import HeroSlideshow from '@/components/HeroSlideshow';
import CollectionsGrid from '@/components/CollectionsGrid';
import CustomMadeBanner from '@/components/CustomMadeBanner';
import NewArrivals from '@/components/NewArrivals';
import StoreLocations from '@/components/StoreLocations';
import SiteFooter from '@/components/SiteFooter';

export default function HomePage() {
  return (
    <div
      style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '12px',
        fontWeight: 300,
        color: '#060606',
        background: '#ffffff',
        minHeight: '100vh',
      }}
    >
      {/* Header + Navigation */}
      <SiteHeader />

      {/* Main content */}
      <main id="MainContent">
        {/* Hero Slideshow */}
        <HeroSlideshow />

        {/* Collections Grid */}
        <CollectionsGrid />

        {/* Bespoke Design Service Banner */}
        <CustomMadeBanner />

        {/* New Arrivals */}
        <NewArrivals />

        {/* Store Locations */}
        <StoreLocations />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
