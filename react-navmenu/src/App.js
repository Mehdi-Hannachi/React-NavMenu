import React from "react";
import "./App.css";
import NavBar from './components/navbar'


const menu = [{title : "Home"},{title:"Services" , dropdown : ["For entrepreneurs","For students","For hobbyists"]},{title:"Contacts"}]
 
function App(props) {
  return (
  <div>
< NavBar menu={menu}/>
  </div>
   
  );
}

export default App;
