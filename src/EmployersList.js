import React from "react";
import "./employersList.css";
export default class EmployersList extends React.Component {
  render() {
    const { name, department, role } = this.props;
    return (
      <div className="block">
        <p>Name: {name}</p>
        <p>Department: {department}</p>
        <p>Role: {role}</p>
      </div>
    );
  }
}
