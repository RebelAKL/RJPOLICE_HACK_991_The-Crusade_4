import React from 'react';
import './styles.css';
import { company } from './data';

function YourComponent() {
  return (
    <>
       <div className=" nice flex items-center justify-center bg-transparent relative" >
        <div className="header absolute top-0 text-left" style={{ width: '80%' }}>
          <h2 className="header1">TIER-1</h2>
          <h2 className="header2">THE COMPANY SPONSOR PRIZES</h2>
        </div>
      </div>
      <div className="container">
        {company.map((company, index) => (
          <div className="card" style={{ '--clr': `#${index + 1}E${index + 2}7F` }} key={index}>
            <div className="img-box">
              <img src={company.img} alt={company.name} />
            </div>
            <div className="content">
              <h2>{company.name}</h2>
              <p>{company.info}</p>
              <a className="but" href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default YourComponent;
