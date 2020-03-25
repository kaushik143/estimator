import React from "react";
import corona from "./coro.jpg";
import "./App.css";
import { FormFields } from "./formFields";
import { StatFields } from "./statFields";
import { NewsFields } from "./newsFields";

function App() {
  return (
    <div className="App">
      <header className="App-header">Covid-19 Raashan</header>
      {/* <div className="mainContainer">
        <div className="instruction">
          <div>Wash your hands frequently</div>
          <div>Maintain social distancing</div>
          <div>Avoid touching eyes, nose and mouth</div>
          <div>Avoid touching eyes, nose and mouth</div>
        </div>
        <div>
          <img src={corona}></img>
        </div>
      </div> */}
      {/* <StatFields /> */}

      {/* <NewsFields /> */}
      <div className="sectionContainer">
        <FormFields />
        {/* <div className="footerContainer">
          <div className="aboutUs">
            <div className="label">About us</div>
            <div className="value">
              <p>It is not important who we are. </p>
              <p>
                At this point, we just want to say we are comman people of India
                who want to spread awareness and help everyone in the way
                possible.
              </p>
            </div>
          </div>
          <div className="linksSection">
            <div className="label">Important links</div>
            <div className="value">
              <ul>
                <li></li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
