import React from "react";
import TopNav from "./components/TopNav";
import {Outlet as Pages } from "react-router-dom";

class App extends React.Component {



  render() {
    return (
      <>
       
          <div className="header">
          <TopNav/>
          </div>
        
        <div className="container">
          <Pages/>
        </div>
        
        
      </>
    );
  }
}

export default App;
