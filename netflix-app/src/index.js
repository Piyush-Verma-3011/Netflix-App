import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Sdata from "./Sdata";

// props concept is used!
import Card from "./card";



function ncard(val){
    return(
        <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1 className="heading__style">List of best Netflix Series</h1>

    
{/* 
    <Card
      imgsrc={Sdata[1].imgsrc}
      title={Sdata[1].title}
      sname={Sdata[1].sname}
      link
      target={Sdata[1].links}
    />
    <Card
      imgsrc={Sdata[2].imgsrc}
      title={Sdata[2].title}
      sname={Sdata[2].sname}
      link
      target={Sdata[2].links}
    />
    <Card
      imgsrc={Sdata[3].imgsrc}
      title={Sdata[3].title}
      sname={Sdata[3].sname}
      link
      target={Sdata[3].links}
    /> 
    {Sdata.map((val)=>{
         <Card
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.sname}
      link={val.links}
    />
    }}
    
    
    */}
   { Sdata.map(ncard)}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
