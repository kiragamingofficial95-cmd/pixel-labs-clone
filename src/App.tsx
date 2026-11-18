import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { PrivacyPage, TermsPage } from './pages/PolicyPage';
import { WebsiteDesignPage, WebsiteRedesignPage } from './pages/ServicePages';
import { NotFoundPage } from './pages/NotFoundPage';

const ScrollHandler: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);

  return null;
};

export const AppRoutes: React.FC = () => {
  return (
    <>
      <ScrollHandler />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/website-design" element={<WebsiteDesignPage />} />
        <Route path="/website-redesign" element={<WebsiteRedesignPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
