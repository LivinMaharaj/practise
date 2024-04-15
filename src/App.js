import React, { Component } from "react"
import * as ReactDOM from 'react-dom';
import Joke from "./Joke"
import jokesData from "./jokesData"
import Product from "./Product";
import productsData from "./vschoolProducts"
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import { render } from "@testing-library/react";
/* import logo from './logo.svg'; 

import './App.css';
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import ContactCard from "./ContactCard";

  function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      
      </div>
      
  )
} */

/* function App() {
return (
<div>
  <input type="checkbox"  />
  <p>Placeholder text</p>
   </div>
)}

function App()
{
  const date = new Date()
  const hours= date.getHours()
  let timeOfDay
  if (hours <12) {
    timeOfDay ="morning"
  } else if (hours >= 12 && hours < 17 ) {
    timeOfDay="afternoon"
  }else {
    timeOfDay="night"
  }
  const styles ={
    color: "#FF8C00", backgroundColor: "#FF2D00", fontSize: 70
  }
  return (
<h1 style = {styles} > Good {timeOfDay} Livin! </h1>
  )
} 
function App() {
  return (
    <div className="todo-list">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  )
} 

function App() {
  return (
    <div className="contacts" >
      <ContactCard contact ={{
      name: "Mr.Whiskers",
      imgUrl:"https://www.istockphoto.com/photo/bengal-cat-lying-on-sofa-and-smiling-gm1325997570-410841353",
      phone :"9999999999",
      email:"placekitten@catnap.meow"}}
      />

<ContactCard contact ={{
name: "Mr.Purrs",
imgUrl: "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
phone: "9999999777",
email: "placekitten@catnap.meow"
}}
      
      />

    </div>
  )
} 

function App()
{
  const nums =[1,2,3,4,5,6,7,8,9,10]
  const doubled =nums.map(function(num) {
    return num *2
  })
  console.log(doubled) 


  
  

  function App()
  {
    const jokeComponents= jokesData.map (joke => {
      return (
        <Joke question={joke.question} punchLine={joke.punchLine} />
      )

  })
    
    return (
      <div>
        {jokeComponents}
        
        
      </div>)
  }   

  function App(){
    const productComponents = productsData.map (item => <Product key={item.id} product={item}/>)
    return (
      <div>
  {productComponents}
      </div>
    )
  }
function App(){
const todoItems = todosData.map (item=> <TodoItem key={item.id} item={item} />)

return (
  <div className="todo-list">
  {todoItems}
  </div>
)
  }

class App extends React.Component {
  render() {return (
    <div>
      <Header username= "Angeline"/>
      <Greeting />
    </div> )
  }

}
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome , {this.props.username}! </p>
      </header>
    )
  }
}
class Greeting extends React.Component {
  render() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }
return (
  <h1>Good {timeOfDay} to you, Chakku! </h1>
)
  }
} 

class App extends React.Component {
constructor (){
/* makes a call to global function, initialize vlues 
super()
this.state={
  answer : "Yes"
}
}
render(){
  return (
    <div>
      <h1>Is state important to know ? {this.state.answer} </h1>
      
    </div>
  )
}
} 

class App extends React.Component {
  constructor (){
  /* makes a call to global function, initialize vlues 
  super()
  this.state={
    name : "Karnataka",
    age: "100"
  }
  }
  render(){
    return (
      <div>
        <h1>{this.state.name} </h1>
        <h3>{this.state.age} years old</h3>
        
      </div>
    )
  }
  } 

  Login page:

  class App extends React.Component {
    constructor(){
      super()
      this.state= { isLoggedIn: false }
    }
    render(){
      let wordDisplay
      if(this.state.isLoggedIn === true) {
        wordDisplay="in"
      }
      else {
        wordDisplay="out"
      }
      
      return (
        <div>
          <h1>You are currently logged {wordDisplay}</h1>
         
        </div>
      )
    }
  } */

  /*fully working Login Page:

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root')); 
  root.render(<App />); 
  
  class App extends React.Component{
    constructor()
    {
      super()
      this.state= {
        todos: todosData
        
      }
    }
      render(){
        const todoItems= this.state.todos.map (item=> <TodoItem key={item.id} item={item} />)
        return(
          <div className="todo-list">
            {todoItems}
            </div>
        )
      
    }
  } 
Event Handler:
  function handleClick()
  {
    console.log("I was clicked")
  }

  function App (){
    return(
      <div>
        <img onMouseOver={() => console.log("Hovered")} src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="400" 
     height="500"/>
        <br />
        <br />
        <button onClick={handleClick} > Click me </button>
      </div>
    )
  } */

  
  
 

export default App ;
