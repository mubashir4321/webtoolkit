import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Contact from '@/components/Contact';
import ChatWidget from '@/components/ChatWidget';
import Scene3D from '@/components/Scene3D';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Scene3D />
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
