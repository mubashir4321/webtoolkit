import { lazy, Suspense, useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import ChatWidget from '@/components/ChatWidget';
const Scene3DLazy = lazy(() => import('@/components/Scene3D'));

const Index = () => {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const onIdle = () => setShowScene(true);
    if ('requestIdleCallback' in window) {
      // @ts-ignore
      requestIdleCallback(onIdle, { timeout: 1500 });
    } else {
      const t = setTimeout(onIdle, 800);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Lazy mount 3D scene after idle and only render on md+ screens via CSS */}
      {showScene && (
        <div className="hidden md:block">
          <Suspense fallback={null}>
            <Scene3DLazy />
          </Suspense>
        </div>
      )}
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <ChatWidget />
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-border py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 DevPortfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
