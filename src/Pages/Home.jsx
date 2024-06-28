
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";
import ResumeSection from "./Resume";

 function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyProjects />
      <ResumeSection />
      <ContactMe />
      <Footer />
    </>
  );
}
export default Home
