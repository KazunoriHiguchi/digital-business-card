import React from "react";
import profile_img from "../img/IMG_4878.JPG";
import ButtonIcon from "./ButtonIcon";

export default function Main() {
  return (
    <main>
      <img src={profile_img} className="profile-img"></img>
      <div class="main-text">
        <h1>KazunoriHiguchi</h1>
        <h3 className="occupation">Fronted Developer</h3>
        <h4>Kazunori.website</h4>
        <a href="mailto:kazunorihiguchi@keio.jp">
        <ButtonIcon />
        </a>
          
        <h3 className="main-title">About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3 className="main-title">Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </div>
    </main>
  );
}
