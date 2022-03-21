

import React, { Component} from "react";
import "./style.css";
import CovidForm from './components/CovidForm'
import Render from './components/Render'

class  App extends Component{
  state = {
    list: [],
    
  };

  handleSubmit = (FirstName, LastName, ID, Address, PhoneNumber, Temp, Yes, No)=>{
    
    let obj={
      FirstName:LastName,
       LastName:LastName,
       ID:ID, 
       Address:Address, 
       PhoneNumber:PhoneNumber, 
       Temp:Temp,
       Yes:Yes,
       No:No, 
    }
    if(FirstName === ""){
      alert("Please enter FirstName")
    }
    else if(LastName === ""){
      alert("please fill out form")
    }
    else if(ID === ""){
      alert("please fill out form")
    }
    else if(Address === ""){
      alert("please fill out form")
    }
    else if(PhoneNumber === ""){
      alert("please fill out form")
    }
    else if(Temp === ""){
      alert("please fill out form")
    }
    else if(rb1.checked === Yes)
       alert("The channel selected is: "+rb1.value);
       else if(rb2.checked === No)
       alert("The channel selected is: "+rb2.value);
    else{
      this.setState({
        list:[...this.state.list, obj]
      })
    }
    }
   
  render(){
    
    return (

      <div> 
         <CovidForm handleSubmit={this.handleSubmit}/>
         <Render  data={this.state.list}/>
      </div>
    )
  }  
}
export default App ;