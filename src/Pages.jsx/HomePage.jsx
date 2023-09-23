import Blur from "../Components/Home/Molecules/Blur";
import FAQs from "../Components/Home/FAQs";
import Hero from "../Components/Home/Hero";
import Intro from "../Components/Home/Intro";
import Judge from "../Components/Home/Judge";
import Rules from "../Components/Home/Rules";
import Timeline from "../Components/Home/Timeline";
import Prizes from "../Components/Home/Prizes";
import Partner from "../Components/Home/Partner";
import Privacy from "../Components/Home/Privacy";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Rules />
      <Judge />
      <FAQs />
      <Timeline />
      <Prizes />
      <Partner />
      <Privacy />
      <Footer />
    </>
  )
}

export default HomePage