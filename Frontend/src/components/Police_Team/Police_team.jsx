 // OrganisingTeam.js
//  "use client";
//  import { textContainer, textVariant2 } from "../Tracks/motion";
import React, { useState } from 'react';
import { Police } from './team_data';
import { motion } from "framer-motion";
import FlippingCard from "./Single_Card"
// import { TitleText } from "../Tracks/CustomTexts";
import { staggerContainer } from "../Tracks/motion";
import styles from "../Tracks/style";

const OrganisingTeam = () => {
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
  const [flippedCardIndex, setFlippedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setFlippedCardIndex(index === flippedCardIndex ? null : index);
  };

  return (
    <>
      <div className='container mx-auto shadow-2xl rounded-lg overflow-hidden'>
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
                  POLICE TEAM
                </div>
              </>
            }
          {/* <TitleText
            
            textStyles="text-center"
          /> */}
        </motion.div>
        <div className='flex justify-center mt-8 px-4 sm:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
            {Police.map((data, index) => (
              <FlippingCard
                key={index}
                data={data}
                isFlipped={index === flippedCardIndex}
                onCardClick={() => handleCardClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
 

export default OrganisingTeam;
