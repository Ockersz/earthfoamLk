import HomeHero from "./components/HomeHero.jsx";
import HomePageContent, { SiteFooter } from "./components/HomePageContent.jsx";
import SideNav from "./components/SideNav.jsx";

export default function App() {
  return (
    <>
      <SideNav />
      <main>
        <HomeHero />
        <HomePageContent />
      </main>
      <SiteFooter />
    </>
  );
}
