import React from 'react';
import { motion } from "framer-motion";
import { TitleText } from "../Tracks_new/CustomTexts";
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";
import './style.css';
// import {  img } from '../../assets/images';

const Fir = () => {
  return (
    <div className="container mx-auto my-8">
              <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText
          title={
            <>
              <div className="container mx-auto px-4 flex justify-center ">
              
              <div className="text-3xl lg:text-5xl  text-[#DEECE4] my-3 lg:my-4 font-[Inter] ">
              Recent FIR
              <form className="container p-2 px-5 d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
            </div>
              
            </>
          }
          textStyles="text-center"
        />
      </motion.div>
      <div className="fir">
      <div className="flex justify-center">
              {/* <div className="text-3xl lg:text-5xl  text-[#DEECE4] my-3 lg:my-4 font-[Inter] ">
                Recent FIR
              </div> */}
              </div>
      <div className=" block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="second p-4 mx-5">
        <h1 className=" fip lg:text-5xl
        sm:text-4xl text-2xl flex font-bold mb-2 text-white font-[Inter]">
          heading
          <p className="text-sm m-2  text-gray-400 font-[Inter] lg:m-3">

          </p>
        </h1>
        <h5 className='sep lg:text-3xl
        sm:text-xl text-base font-semibold text-white my-1 font-[Inter]'>Description</h5>
        {/* <img src={PrizeIcon1} alt="" /> */}
        </div>
        <div className=" first p-4 mx-5 mt-[-20px]">
        <h1 className="lg:text-5xl
        sm:text-4xl text-2xl flex font-bold mb-2 text-white font-[Inter]">
          heading
          <p className="text-sm m-2  text-gray-400 font-[Inter] lg:m-3">
  
          </p>
        </h1>
        <h5 className='thp lg:text-3xl
        sm:text-xl text-base font-semibold text-white my-1 font-[Inter]'>Description</h5>
        {/* <img src={PrizeIcon2} alt="" /> */}
        </div>
        <div className=" third p-4 mx-5">
        <h1 className="lg:text-5xl
        sm:text-4xl text-2xl flex font-bold mb-2 text-white font-[Inter]">
           heading
          <p className="text-sm m-2  text-gray-400 font-[Inter] lg:m-3">
          
          </p>
        </h1>
        <h5 className='lg:text-3xl
        sm:text-xl text-base font-semibold text-white my-1 font-[Inter]'>Description</h5>
        {/* <img src={PrizeIcon3} alt="" /> */}
        </div>
        
</div>

      </div>
    </div>
  );
};
// }

export default Fir;
