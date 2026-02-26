import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Actions } from './components/Actions';
import { Footer } from './components/Footer';
import { ContactForm } from './components/ContactForm';
import { ViewState } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  // Navigation is handled via scrolling to IDs in Navbar or changing view state
  const [currentView, setCurrentView] = React.useState<ViewState>(ViewState.HOME);

  const renderContent = () => {
    if (currentView === ViewState.CONTACT) {
      return <ContactForm onBack={() => setCurrentView(ViewState.HOME)} />;
    }

    return (
      <main className="flex-grow">
        <section id="home">
          <Hero setView={setCurrentView} />
        </section>
        
        <section id="help">
          <Actions onContact={() => setCurrentView(ViewState.CONTACT)} />
        </section>
      </main>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentView={currentView} setView={setCurrentView} />
      {renderContent()}
      <Footer setView={setCurrentView} />
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