import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Actions } from './components/Actions';
import { Footer } from './components/Footer';
import { ViewState } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  // Navigation is handled via scrolling to IDs in Navbar
  const [currentActiveSection, setCurrentActiveSection] = React.useState<ViewState>(ViewState.HOME);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentView={currentActiveSection} setView={() => {}} />
      <main className="flex-grow">
        <section id="home">
          <Hero setView={() => {}} />
        </section>
        
        <section id="help">
          <Actions />
        </section>
      </main>
      <Footer setView={() => {}} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;