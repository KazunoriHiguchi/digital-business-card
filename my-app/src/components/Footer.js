import React from "react";
import Instagram from "../img/Instagram Icon.png";
import GitHub from "../img/GitHub Icon.png";

export default function Footer(){
  return(
    <footer>
    <a href="https://www.instagram.com//">
      <img src={Instagram} >
      </img>
    </a>
    <a href="https://github.com/KazunoriHiguchi">
      <img src={GitHub}></img>
    </a>
    </footer>
  )
}