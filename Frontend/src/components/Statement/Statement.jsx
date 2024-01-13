import React, { Component } from "react";
import { TitleText } from "../Tracks_new/CustomTexts";
import "./style.css";
import { motion } from "framer-motion";
import { SearchDetails } from './SearchDetails';
import Design_copmponent from '../design_componet/opacity';
import { staggerContainer } from "../Tracks_new/motion";
import styles from "../Tracks_new/style";

const Statement = () => {
  let articles=[
    {
      "source": {
          "name": "State"
          },
          "PoliceStation": "Police Station(optional)",
          
          },
    {
    "source": {
        "name": "Andhra Pradesh"
        },
        "PoliceStation": "lorem",
        
        },
    {
    "source": {
        "name": "Arunachal Pradesh	"
        },
        "PoliceStation": "lorem",
        },
    {
    "source": {
  
        "name": "Assam"
        },
        "PoliceStation": "lorem",
        
        },
    {
    "source": {
        "name": "Bihar"
        },
        "PoliceStation": "lorem",
        
        },
    {
    "source": {
        "name": "Chhattisgarh"
        },
        "PoliceStation": "lorem",

        },
    {
    "source": {
        "name": "Goa"
        },
        "PoliceStation": "lorem",
        
        },
    {
    "source": {
        "name": "Gujarat"
        },
        "PoliceStation": "lorem",
      },
    
    {
    "source": {
        "name": "Haryana"
        },
        "PoliceStation": "lorem",
        }
        ]
    let SelectState = articles.map((elements) =>
      <option key={elements.source.name}>{elements.source.name}</option>
  );
  let SelectPoliceStation = articles.map((elements) =>
  <option key={elements.PoliceStation}>{elements.PoliceStation}</option>
);

const SearchType=()=>{
      <div class="mb-3">
        <label for="formFile" class="form-label">Default file input example</label>
        <input class="form-control" type="file" id="formFile"/>
    </div>
}

  return (
    <div className="container mx-auto my-8">
        <TitleText
          title={
            <>
      
              <div className="container mx-auto px-4 flex justify-center ">
              
              <div className="text-3xl lg:text-5xl  text-[#DEECE4] my-3 lg:my-4 font-[Inter] ">
              Search
            </div>
            </div>
              
            </>
          }
          textStyles="text-center"
        />
      <form>
        <div className="m-3 p-2 d-flex justify-center ">
          <input placeholder="Statement/Scenario"
            type="text"
            className="form-control mx-1"
            id="Statment"
          />
          <select className="form-select" aria-label="Default select example">
          {SelectState}
          </select>
          
          <select className="form-select mx-1" aria-label="Default select example">
          
          {SelectPoliceStation}
          </select>
          
          <button type="submit" className="btn btn-primary ">
          Submit
        </button>
        
        </div>
      </form>


    </div>
  );
};
// }

export default Statement;

