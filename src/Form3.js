

import React, { Component } from 'react'

export default class Form3 extends Component {
    constructor(){
        super();
        this.state={
            
        name: "",
        department: "",
        rating: "",
        employees: [],
        show: false
        }
    }

    handleChange = (event) => {
        console.log(event.target);
        this.setState({
          [event.target.name]: event.target.value
        })
      }
      OnSubmit(event) {
        event.preventDefault();

        this.setState({ show: true });
        const Obj = {
          name: this.state.name,
          department: this.state.department,
          rating: this.state.rating
        }
    
        this.state.employees.push(Obj)
        this.setState({
          name: "",
          department: "",
          rating: "",
          show: true
    
        })
        console.log(this.state.employees)
      }
    


  render() {
    return (
      <div>
         <div className='container'>
              <h1>EMPLOYEE FEEDBACK FORM</h1>
              <form action=""> 
                <label className="form" for="name">Name : </label>
                <input required type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange} /><br></br>
                <label className="form" for="department">Department : </label>
                <input required type="text" id="department" value={this.state.department} name="department" onChange={this.handleChange} /><br></br>
                <label className="form" for="rating">Rating : </label>
                <input required type="number" id="rating" value={this.state.rating} name="rating" onChange={this.handleChange} /><br></br>
    
              </form>
              <button type="submit"  className="submit" onClick={this.OnSubmit.bind(this)}>Submit</button>
            </div>
          
            {this.state.show && <div className='spa'>
              {this.state.employees.length > 0 && this.state.employees.map((event) => {
                return (<div className=''>
                  <h3>{event.name} || {event.department} || {event.rating}</h3>
                </div>)
              })}
            </div>}
           
            
      </div>
    )
  }
}



       
    
    
