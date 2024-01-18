 
import React from 'react';
import { tabData } from './Tabs_Data';
import { thumb} from '../../assets/images';
import Design_copmponent from '../design_componet/opacity';
import axios from 'axios';
import { useState,useEffect } from 'react';

const Gallery = ({ activeTab }) => {
  
  const [showDetails, SetDetails]= useState();
  useEffect(()=>{
    async function Details(){
      try{
        const showDetails = await axios.get(' ');
        console.log(showDetails.data);
        SetDetails(showDetails.data);

      }catch(error){
        console.log("error");
      }
    }
    Details();
  },[])

  const filteredData = tabData[activeTab] || [];

  return (
    <div className="container w-full h-full mt-12 mb-12">
      {filteredData.map((data, index) => (
        <div key={index} className="mb-4 sm:mb-0 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* 1st div - Content */}
          <div className="flex flex-rows p-3">
            <img
              src={thumb}
              alt={`Image 1`}
              className="w-1/4 h-1/2   object-contain mx-3"
              style={{ maxWidth: '33%', maxHeight: '33%' }}
            />
            <div className='flex flex-col gap-8 text-white'>
            <h1 className='text-xl md:text-2xl lg:text-4xl font-bold '>{data.heading}</h1>
            <p className="text-white">{data.content}</p>
            </div>
          </div>
          {/* 2nd div - Image */}
          <div className='flex justify-center items-center'>
            <img
              src={data.img1}
              alt={`Image 1`}
              className=" object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          {/* 3rd div - Image */}
          <div className='flex justify-center items-center '>
            <img
              src={data.img2}
              alt={`Image 2`}
              className=" object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </div>
          {/* 4th div - Text */}
          <div className="py-4 mt-4 text-white">
          <Design_copmponent/>
          {/* <h1 className='font-bold pb-8  '>More Info</h1> */}
            <p className="text-white mt-3">{data.Cognizable}</p>
            <p className="text-white">{data.Bailable}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;