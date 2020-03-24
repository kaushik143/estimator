import React, { Component } from "react";
import "./statFields.css";
import death from "./death.png";
import activePatient from "./active_patient.png";
import cured from "./cured.png";
import migratedIcon from "./migrated_icon.png";
import passengers from "./passengers.png";

class StatFields extends Component {
  render() {
    return (
      <div className="statsContainer">
        <div className="statsItem">
          <div className="statImage">
            <img src={passengers}></img>
          </div>
          <div className="statValue">
            <div className="value"></div>
            <div className="label"></div>
          </div>
        </div>
        <div className="statsItem">
          <div className="statImage">
            <img src={activePatient}></img>
          </div>
          <div className="statValue">
            <div className="value"></div>
            <div className="label"></div>
          </div>
        </div>
        <div className="statsItem">
          <div className="statImage">
            <img src={cured}></img>
          </div>
          <div className="statValue">
            <div className="value"></div>
            <div className="label"></div>
          </div>
        </div>
        <div className="statsItem">
          <div className="statImage">
            <img src={death}></img>
          </div>
          <div className="statValue">
            <div className="value"></div>
            <div className="label"></div>
          </div>
        </div>
        <div className="statsItem">
          <div className="statImage">
            <img src={migratedIcon}></img>
          </div>
          <div className="statValue">
            <div className="value"></div>
            <div className="label"></div>
          </div>
        </div>
      </div>
    );
  }
}

export { StatFields };
