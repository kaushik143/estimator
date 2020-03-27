import React from "react";
import corona from "./coro.jpg";
import "./App.css";
import { FormFields } from "./formFields";
import { StatFields } from "./statFields";
import { NewsFields } from "./newsFields";

function App() {
  return (
    <div className="App">
      <header className="App-header">Raashan Estimator</header>
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
      </div>
      <div className="footerContainer">
        <div className="aboutUs">
          <div className="label">About us</div>
          <div className="value">
            <p>
              In this time of lockdown we have felt people are stocking up
              everything. But we request everyone to buy only that much which is
              sufficient for their family members. To get the best estimation we
              have created this Raashan estimator for the essentials items.
            </p>
          </div>
        </div>
        <div className="footerTag">Made with &#9829;.</div>
        <div className="footerTag">Help fighting coronavirus</div>
      </div>
    </div>
  );
}

export default App;
