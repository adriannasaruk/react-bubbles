import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [change, setChange] = useState([])
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColor = () => {
        axiosWithAuth()
        .get("/api/colors")
        .then(res => setColorList(res.data))
        .catch(err => console.log(err));
    };
 
  useEffect(() => {
    getColor();
  }, [change]);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} setChange={setChange}/>
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
