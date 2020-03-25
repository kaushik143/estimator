import React, { Component } from "react";
import "./formFields.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { times } from "lodash";
import * as axios from "axios";

const ques1 = "How many members you have in your family";
const ques2 = "Please add age for all the members";
const ques3 = "How many lockdown period";

class FormFields extends Component {
  constructor() {
    super();
    this.oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    this.lastDate = new Date("2020/4/14");
    this.state = {
      members: "",
      age: [],
      startDate: new Date(),
      period: 21,
      items: []
    };
  }
  handleMembersChange = evt => {
    const count = evt.target.value;
    const ages = [];
    // times(count, () => {
    //   return ages.concat([]);
    // });
    this.setState({ members: count, age: ages });
  };

  handlePersonAgeChange = (evt, index) => {
    const newArray = Array.from(this.state.age);
    const value = evt.target.value;
    newArray[index] = value;
    this.setState({ members: value, age: newArray });
  };
  addMembersAge = () => {
    const ageInput = this.state.members.map((member, index) => {
      return (
        <div>
          <input
            type="number"
            placeholder={`Person-${index}`}
            value={this.state.members}
            onChange={evt => this.handlePersonAgeChange(evt, index)}
          />
        </div>
      );
    });
    return (
      <div>
        {ques2}
        {ageInput}
      </div>
    );
  };

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleLockDownPeriod = evt => {
    this.setState({ period: evt.target.value });
  };

  submitInformation = () => {
    this.setState(() => {
      this.getUserList(); // function call
    });
  };

  resetInformation = () => {
    this.setState({
      members: "",
      age: [],
      startDate: new Date(),
      period: "",
      items: [],
      showResponse: false
    });
  };

  getUserList = () => {
    const firstDate = this.state.startDate;
    const diffDays = Math.round(
      Math.abs((firstDate - this.lastDate) / this.oneDay)
    );
    const config = {
      method: "get",
      mode: "no-cors",
      url: `http://13.127.254.103:8642/api/v1/get_estimated_data/?no_of_person=${this.state.members}&lockdown_period=${diffDays}`
    };
    axios(config)
      .then(response => response.data)
      .then(response => {
        this.setState({
          items: response.items,
          price: response.net_price,
          showResponse: true
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  };

  render() {
    return (
      <div>
        {!this.state.showResponse ? (
          <div className="formFieldsContainer">
            <div className="formFields">
              {ques1}
              <input
                type="number"
                placeholder="Family members"
                value={this.state.members}
                onChange={this.handleMembersChange}
              />
            </div>
            {/* <div>{this.addMembersAge()}</div> */}
            {/* <div className="formFields">
              {ques3}
              <input
                type="number"
                placeholder="Number of lockdown days"
                value={this.state.period}
                onChange={this.handleLockDownPeriod}
              />
              
            </div> */}
            <div className="actionContainer" onClick={this.submitInformation}>
              <button type="button" className="small">
                CALCULATE
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {this.state.showResponse ? (
          <div className="finalCalculation">
            <div className="itemSection">
              {this.state.items.map(item => {
                return (
                  <div className="itemContainer">
                    <div className="logoUrl">
                      <img src={item.logo_url} />
                    </div>
                    <div className="itemName">{item.name}</div>
                    <div className="totalQuantity">
                      {item.total_quantity}
                      {item.unit}
                    </div>
                    <div className="totalPrice">Rs. {item.total_price}</div>
                  </div>
                );
              })}
            </div>
            <div className="totalFinalPrice">
              Total Price <div>Rs. {this.state.price}</div>
            </div>
            <div className="actionContainer" onClick={this.resetInformation}>
              <button type="button" className="small">
                RESET
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export { FormFields };
