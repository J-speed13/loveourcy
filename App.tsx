import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Idea } from './components/Idea';
import { Goal } from './components/Goal';
import { Posters } from './components/Posters';
import { Help } from './components/Help';
import { Donate } from './components/Donate';
import { DownloadLogo } from './components/DownloadLogo';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Footer } from './components/Footer';
import { ViewState } from './types';
import { LanguageProvider } from './contexts/LanguageContext';

const AppContent: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            <Idea />
            <Goal />
            <About />
            <Posters />
            <Help />
          </>
        );
      case ViewState.STORY:
        return (
          <>
            <Idea />
            <About />
          </>
        );
      case ViewState.DONATE:
        return <Donate />;
      case ViewState.DOWNLOAD:
        return <DownloadLogo />;
      case ViewState.PRIVACY:
        return <PrivacyPolicy />;
      case ViewState.TERMS:
        return <TermsOfService />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
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