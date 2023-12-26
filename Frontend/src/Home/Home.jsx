import "./Home.css";
import React from "react";
import Hero from "../components/Hero/hero";
import AboutSection from "../components/About/about";
import Faqs from "../components/Faq/faq";
import Footer from "../components/Footer/footer";
import Challenges from "../components/Challenges/Challenges";
import TeamMembers from "../components/Team_Members/team";
import Prizes from "../components/prizesnav/prizesmain/prize";
import Fir from "../components/Fir/Fir";

import Procedure from "../components/Procedure/Procedure";

import Police_team from "../components/Police_Team/Police_team";
import Theme from "../components/Themes/Theme";

import Carousel from "../components/carousel/carousel";
import StarsCanvas from "../canvas/Star";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div
          className="bg-black bg-cover 
      bg-no-repeat bg-center"
        >
          <Navbar />

          <div className="relative z-0">
            {/* <StarsCanvas /> */}
            <Hero />
          </div>
            {/* <StarsCanvas /> */}

          <AboutSection />
          <Fir />
          <Carousel />
          <Procedure />
          {/* <Carousel /> */}
          {/* <Theme /> */}
          <Carousel />
          <Police_team />

          {/* <Challenges /> */}
          <TeamMembers />
          <Faqs />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
