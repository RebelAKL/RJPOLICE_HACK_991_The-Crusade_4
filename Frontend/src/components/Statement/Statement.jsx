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

let SearchType=[
  {
    "source": {
        "name": "Search Type"
        },
        "PoliceStation": "Police Station(optional)",
        
        },
  {
  "source": {
      "name": "Text Search"
      },
      "PoliceStation": "lorem",
      
      },
  {
  "source": {
      "name": "Image Search"
      },
      "PoliceStation": "lorem",
      },
  {
  "source": {
        "name": "Voice Search"
        }, 
        "PoliceStation": "lorem",
        },
  
      ]
  const Search = SearchType.map((elements) =>
    <option key={elements.source.name}>{elements.source.name}</option>
    );

  const [selected, setSelected] = React.useState(""); 
  const changeSelectOptionHandler = (event) => { 
    setSelected(event.target.value); 
  }; 

  const ImageSearch =()=> {
    return(
      <div class="mb-3">
        <label for="formFile" className="form-label text-slate-500 flex justify-center ">Upload the png,jpg or jpeg formate file</label>
        <input className="form-control" type="file" id="formFile"/>
    </div>
    )
  }
  const TextSearch =()=> {
    return(
      <input placeholder="Statement/Scenario"
            type="text"
            className="form-control mx-1"
            id="Statment"
          />
    )
  }

  const VoiceSearch =()=> {
    return(
      console.log("hi")
    )
  }

  const SearchInfo=()=>{
  if (selected === "Text Search") { 
    return(
      TextSearch()
      )
    } else if (selected === "Image Search") { 
      return(
      ImageSearch()

    )
  } else if (selected === "Voice Search") { 
    return(
      VoiceSearch()

    )
  } 
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
        <div className="m-3 py-2 px-5 d-flex justify-center ">
          
          <select onChange={changeSelectOptionHandler} className="form-select mx-1" aria-label="Default select example"> 
          {Search}
          </select> 
          <select className="form-select" aria-label="Default select example">
          {SelectState}
          </select>
          
          <select className="form-select mx-1" aria-label="Default select example">
          
          {SelectPoliceStation}
          </select>
          
          <button type="submit" className="btn btn-primary ">
          Process
        </button>
        </div>
        <div className="m-3 py-2 px-5 d-flex justify-center "> 
          <SearchInfo/>
          </div>
      </form>
      

    </div>
  );
};
// }

export default Statement;

