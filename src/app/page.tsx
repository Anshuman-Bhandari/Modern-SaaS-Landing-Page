'use client';

import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/layout/Hero';
import Features from '../components/layout/Features';
import Pricing from '../components/layout/Pricing';
import FAQ from '../components/layout/FAQ';
import Contact from '../components/forms/Contact';
import Footer from '../components/layout/Footer';
import { StaggerTestimonials } from '@/components/layout/Testimonials2';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <div className="flex w-full h-screen justify-center items-center">
        <StaggerTestimonials />
      </div>
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
