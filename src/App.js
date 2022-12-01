import React from "react";
import EmployersList from "./EmployersList";
import "./employersList.css";

export default class App extends React.Component {
  state = {
    employer: []
  };

  getData = () => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ employer: data });
      });
  };
  componentDidMount() {
    this.getData();
  }

  searchByName = () => {
    const input = document.querySelector(".input").value;
    if (input.length > 1) {
      const copyState = this.state.employer;
      const searchEmployers = copyState.filter((item) => item.name === input);
      this.setState({ employer: searchEmployers });
      console.log(searchEmployers);
    } else alert("Please enter a name!");
  };

  render() {
    return (
      <div className="wrapper">
        <div className="inpt-btn">
          <input
            className="input"
            type="text"
            placeholder="Enter full name..."
          />
          <button type="button" onClick={this.searchByName}>
            Search
          </button>
        </div>
        <div className="container">
          {this.state.employer.map((item) => {
            return <EmployersList {...item} />;
          })}
        </div>
      </div>
    );
  }
}
