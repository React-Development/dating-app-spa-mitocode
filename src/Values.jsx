import React, { Component } from "react";
import valuesService from "./services/valuesService";

class Values extends Component {
  state = {
    values: [],
  };

  // On Load
  async componentDidMount() {
    const { data: values } = await valuesService.getValues();
    console.log("Values", values);
    this.setState((prevState) => {
      return {
        ...prevState,
        values,
      };
    });
  }

  render() {
    const { values } = this.state;
    console.log("response", values);

    return (
      <div>
        <h1>Values List</h1>
        {values.map((item) => (
          <p key={item.id}>
            ID: {item.id} - Name: {item.name}
          </p>
        ))}
      </div>
    );
  }
}

export default Values;
