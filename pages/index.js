import {
  Hero,
  Navbar,
  Model3,
  ModelX,
  ModelY,
  SolarPanels,
  SolarRoof,
  Footer,
} from "../components/index.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Model3 />
      <ModelX />
      <ModelY />
      <SolarPanels />
      <SolarRoof />
      <Footer />
    </>
  );
}
