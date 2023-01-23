import React, { Component } from "react";
import "./Form.css";

class Form1 extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      department: "",
      rating: "",
      rendering: false,
      array: [],
    };
  }
  handleOnClick = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.array);
   
  };

  handleSubmit = (event) => {
    event.preventDefault();
    
    // e.preventDefault();
    // this.setState({ rendering: true });

    console.log("hello")
  

    let obj = {
      name: this.state.name,
      department: this.state.department,
      rating: this.state.rating,
    };
    this.state.array.push(obj);
    console.log(this.state.array);
    this.setState({
      name: "",
      department: "",
      rating: "",
        rendering: false,
    });
   
}

  


  render() {
    return (
      <div>
        <h1>EMPLOYMENT FEEDBACK FORM</h1>
        <form action='' onSubmit={() => this.handleSubmit.bind(this)}>
          <div className="form">
            <label>
              {" "}
              Name :{" "}
              <input
                type={"text"}
                placeholder="Enter a name"
                name="name"
                value={this.name}
                onChange={this.handleOnClick}
              />
            </label>
          </div>
          <div className="form">
            <label>
              Department :{" "}
              <input
                type={"text"}
                placeholder="Enter a department "
                name="department"
                value={this.name}
                onChange={this.handleOnClick}
              />
            </label>
          </div>
          <div className="form">
            <label>
              Rating :{" "}
              <input
                type={"number"}
                placeholder="Enter a Rating"
                name="rating"
                value={this.name}
                onChange={this.handleOnClick}
              />
            </label>
          </div>
          <input
            className="submit"
            type="submit"
            // onClick={() => this.handleSubmit}
          />
        </form>
        <br />
        <hr />
        <div>
          <span>
           {console.log(this.state.rendering)}
           {console.log(this.state.array)}
           { this.state.rendering && (
            <div className="spa">
              {this.state.array.length > 0 &&
                this.state.array.map((event) => {
                  return (
                    <div className="content">
                      <h1>
                        {event.name} || {event.department} || {event.rating}
                      </h1>
                    </div>
                  );
                })}
            </div>
            )}
          </span>
        </div>
      </div>
    );
  }
}

export default Form1;
