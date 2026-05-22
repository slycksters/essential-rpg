import './App.css';
import {
  AboutUsSection,
  CommunitySection,
  FooterSection,
  GameSection,
  LandingSection,
  NavbarSection,
} from './components';

function App() {
  return (
    <div>
      <NavbarSection />
      <LandingSection />
      <AboutUsSection />
      <GameSection />
      <CommunitySection />
      <FooterSection />
    </div>
  );
}

export default App;
