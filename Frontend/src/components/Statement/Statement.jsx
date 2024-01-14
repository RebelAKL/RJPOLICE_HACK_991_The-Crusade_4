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
          "id":"1",
          "name": "State"
          },
          "key":"1",
          "PoliceStation": "Police Station(optional)",
          
          },
    {
    "source": {
      "id":"2",
        "name": "Andhra Pradesh"
        },
        "key":"2",
        "PoliceStation": "lorem",
        
        },
    {
    "source": {
      "id":"3",
        "name": "Arunachal Pradesh	"
        },
        "key":"3",
        "PoliceStation": "lodfasrem",
        },
    {
    "source": {
      "id":"4",
        "name": "Assam"
        },
        "key":"4",
        "PoliceStation": "loadfrem",
        
        },
    {
    "source": {
      "id":"5",
        "name": "Bihar"
        },
        "key":"5",
        "PoliceStation": "loghrem",
        
        },
    {
    "source": {
      "id":"6",
        "name": "Chhattisgarh"
        },
        "key":"6",
        "PoliceStation": "lorejtm",

        },
    {
    "source": {
      "id":"7",
        "name": "Goa"
        },
        "key":"7",
        "PoliceStation": "loryjem",
        
        },
    {
    "source": {
      "id":"8",
        "name": "Gujarat"
        },
        "key":"8",
        "PoliceStation": "loukfrem",
      },
    
    {
    "source": {
      "id":"9",
        "name": "Haryana"
        },
        "key":"9",
        "PoliceStation": "lomyrem",
        }
        ]
    let SelectState = articles.map((element) =>
      <option key={element.source.id}>{element.source.name}</option>
  );
  let SelectPoliceStation = articles.map((elements) =>
  <option key={elements.key}>{elements.PoliceStation}</option>
);

let SearchType=[
  {
    "source": {
      "value":"Name",
        "name": "Search Type"
        },
        "PoliceStation": "Police Station(optional)",
        
        },
  {
  "source": {
    "value":"Id",
      "name": "Text Search"
      },
      "PoliceStation": "lorem",
      
      },
  {
  "source": {
    "value":"Both",
      "name": "Image Search"
      },
      "PoliceStation": "lorem",
      },
  {
  "source": {
    "value":"None",
        "name": "Voice Search"
        }, 
        "PoliceStation": "lorem",
        },
  
      ]
  const Search = SearchType.map((type) =>
    <option key={type.source.value}>{type.source.name}</option>
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

