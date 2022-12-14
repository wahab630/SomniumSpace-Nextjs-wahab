import Header from "../components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from "../components/layouts/Footer";
import Hero from '../components/elements/Hero'
import Virtual from "../components/elements/Virtual";
import InGame from "../components/elements/InGame";
import Partners from "../components/elements/Partners";
import Calenders from "../components/elements/Calenders";
import Community from "../components/elements/Community";
import BottomIcons from "../components/elements/BottomIcons";
import HeroBelow from "../components/elements/HeroBelow";
import Ethereum from "../components/elements/Ethereum";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <HeroBelow/>
   <Ethereum/>
   <Virtual/>
   <InGame/>
   <Partners/>
   <Calenders/>
   <Community/>
   <BottomIcons/>
   <Footer/>
   </>
  )
}
