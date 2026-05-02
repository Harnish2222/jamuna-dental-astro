import { type ReactNode, lazy, Suspense } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import InView from './InView';

const FindUsSection = lazy(() => import('./FindUsSection'));
const WhatsAppWidget = lazy(() => import('./WhatsAppWidget'));

interface LayoutProps {
  children: ReactNode;
  hideFooterMap?: boolean;
}

const Layout = ({ children, hideFooterMap = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      {!hideFooterMap && (
        <InView minHeight="500px">
          <Suspense fallback={null}>
            <FindUsSection />
          </Suspense>
        </InView>
      )}
      <Footer />
      <Suspense fallback={null}>
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
};

export default Layout;
