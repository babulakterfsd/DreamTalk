'use client';

import Hero from '@/components/ui/Hero';
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
    </>
  );
}
