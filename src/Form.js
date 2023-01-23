import './Form.css'
import React, { Component } from 'react'

class Form extends Component {
    constructor(){
        super();
        
        this.state={
            name:"",
            department:"",
            rating:"",
            rendering:false ,
            array:[]
        }

    }

      handleOnClick=(e)=>{

    this.setState( {[e.target.name]:e.target.value})

      
        // let {name,value}=e.target;
        // console.log(name,value);
        // switch (name) {
        //     case "name":
        //           this.setState({name:value})
        //         break;

        //      case "department":
        //             this.setState({department:value})
        //           break;
        //      case "rating":
        //             this.setState({rating:value})
        //           break;
        
        //     default:
        //         break;
        // }

    }

    handleSubmit=(e)=>{
        e.preventDefault();  
        // let obj={
        //     name:this.state.name,
        //     department:this.state.department,
        //     rating:this.state.rating,
        // }
        // this.state.array.push(obj);
        // console.log(this.state.array);
        // this.setState({
        //     name:"",
        //     department:"",
        //     rating:"",
        //     rendering:false 
        // } )
            
    }

    // stateChange(){
    //     this.setState({rendering:true})

    // }

    // renderComp=()=>{
        
    //     // if(this.state.rendering===true){
    //     //     <div className='spa'>  {this.state.array>0 && this.state.array.map((e)=> {
    //     //         return(<span className='content'>
    //     //             {e.name}  {e.department} </span>)}) }

         
    //     //    </div>

    //     // }
           
    // //     {this.state.render && <div className='spa'>
    // //     {this.state.array.length > 0 && this.state.array.map((event) => {
    // //       return (<div className='content'>
    // //         <h1>{event.name} || {event.department} || {event.rating}</h1>
    // //       </div>)
    // //     })}
    // //   </div>}  
           
    //     }
    render() {
        return (
        
            <div>
                <h1>EMPLOYMENT FEEDBACK FORM</h1>
                <form  onClick={this.handleSubmit}>
                    <div className='form'>
                        <label> Name : <input type={"text"} placeholder="Enter a name" name="name" value={this.name} onChange={this.handleOnClick}/></label>
                    </div>
                    <div className='form'>
                        <label> Department : <input type={"text"} placeholder="Enter a department " name="department" value={this.name} onChange={this.handleOnClick}/></label>
                    </div>
                    <div className='form'>
                         <label>Rating : <input type={"number"} placeholder="Enter a Rating" name="rating" value={this.name} onChange={this.handleOnClick}/></label>
                    </div>
                
                    <input className='submit' type="submit" onClick={ () => this.stateChange()}  />                 
                  </form>
                  <br/><hr/>
                <div>
                     <span> {this.renderComp()}</span>
{/*                          
        {this.state.rendering && <div className='spa'>
        {this.state.array.length > 0 && this.state.array.map((event) => {
          return (<div className='content'>
            <h1>{event.name} || {event.department} || {event.rating}</h1>
          </div>)
        })}
      </div>}   */}
                 </div> 


            </div>
        
         )
    }
       
    }
export default Form;
    



        name: "",
        department: "",
        rating: "",
        employees: [],
        show: false
      }
    
      handleChange = (event) => {
        console.log(event.target);
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    
      OnSubmit(event) {
        event.preventDefault();
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
          <>
            <div className='container'>
              <h1>EMPLOYEE FEEDBACK FORM</h1>
              <form action="">
                <label for="name">Name : </label>
                <input required type="text" id="name" value={this.state.name} name="name" onChange={this.handleChange} /><br></br>
                <label for="department">Department : </label>
                <input required type="text" id="department" value={this.state.department} name="department" onChange={this.handleChange} /><br></br>
                <label for="rating">Rating : </label>
                <input required type="number" id="rating" value={this.state.rating} name="rating" onChange={this.handleChange} /><br></br>
    
              </form>
              <button type="submit" onClick={this.OnSubmit.bind(this)}>Submit</button>
            </div>
            {this.state.show && <div className='EmploData'>
              {this.state.employees.length > 0 && this.state.employees.map((event) => {
                return (<div className='data'>
                  <h1>{event.name} || {event.department} || {event.rating}</h1>
                </div>)
              })}
            </div>}
          </>
        )
      }
    }



