import React from "react";
import TopNav from "./components/TopNav";
import { Outlet as Pages } from "react-router-dom";
import Leftnav from "./components/LeftNav";
import useMobile from "./customize/mobile"
const  App = ()=>  {
  const {isMobile} = useMobile();


 
    return (
      <>

        <div className="header">
        {
          isMobile === false ?  
            <TopNav />

          : <Leftnav/> 
        }

         
        </div>

        <div className="container" id="main">
          <Pages />
         
        </div>


      </>
    );
  
}

export default App;
