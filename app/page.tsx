// app/page.tsx
import Header from "./Header/page";
import Hero from "./Hero/page";
import About from "./About/page";
import Services from "./Services/page"
import Testinomial from "./Testinomial/page";
import Footer from "./Footer/page";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero/>
      <About/>
      <Services/>
      <Testinomial/>
      <Footer/>
    </div>
  );
}
