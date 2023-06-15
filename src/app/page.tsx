'use client';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <h1>Hello, welcome to dreamtalk !</h1>
    </div>
  );
}
