'use client';

import Analytics from '@/components/ui/Analytics';
import Features from '@/components/ui/Features';
import Hero from '@/components/ui/Hero';
import Monetize from '@/components/ui/Monetize';
import Newsletter from '@/components/ui/Newsletter';
import Possibilities from '@/components/ui/Possibilities';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Hero />
      <Possibilities />
      <Features />
      <Monetize />
      <Analytics />
      <Newsletter />
    </>
  );
}
