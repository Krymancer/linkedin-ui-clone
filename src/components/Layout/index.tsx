import React from 'react';

import { Container } from './styles';
import MobileHeader from '../MobileHeader';
import DesktopHeader from '../DesktopHeader';
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import AdBanner from '../AdBanner';

const Layout: React.FC = () => {
  return (
      <Container>
          <MobileHeader/>
          <DesktopHeader/>

          <span>
              <AdBanner/>
          </span>
          
          <main>
              <LeftColumn isLoading={false} />
              <MiddleColumn/>
              <RightColumn/>
          </main>
      </Container>
  );
}

export default Layout;