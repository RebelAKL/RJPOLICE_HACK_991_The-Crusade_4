// "use client";
// import { textContainer, textVariant2 } from "../Tracks/motion";
import React, { lazy } from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import { motion } from "framer-motion";
// import { TitleText } from "../Tracks/CustomTexts.jsx";
import { staggerContainer } from "../Tracks/motion.js";
import styles from "../Tracks/style.js";
import "slick-carousel/slick/slick-theme.css";
import team from "./teamdata.json";

const Card = lazy(() => import("./card.jsx"));
const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
`;

const TeamMembers = () => {
  // const TitleText = ({ title, textStyles }) => (
  //   <motion.h2
  //     variants={textVariant2}
  //     initial="hidden"
  //     whileInView="show"
  //     className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  //   >
  //     {title}
  //   </motion.h2>
  // );
  return (
    <div className="mt-16 text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

{/* title= */}
{
            <>
              <div className="text-4xl lg:text-7xl font-bold text-white my-4 lg:my-6 font-[Oswald]">
                Team Members
              </div>
            </>
          }
        {/* <TitleText
          
          textStyles="text-center"
        /> */}
      </motion.div>
      <Section>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 md:gap-x-16 md:gap-y-10 lg:grid-cols-4 m-2  md:max-w-[85vw] lg:max-w-[80vw] mx-auto">
          {team.map((team, index) => {
            return <Card props={team} key={index} />;
          })}
        </div>
      </Section>
    </div>
  );
};

export default TeamMembers;
