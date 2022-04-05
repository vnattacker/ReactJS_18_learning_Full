import React from "react";
import MainTodo from "./views/MainTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends React.Component {


  render() {
    return (
      <>
        <div className="header-top">
          <h1 className="text-center">SIMPLE TODO APP</h1>
        </div>
        <div className="container">
          <MainTodo />
        </div>

        <ToastContainer
         theme="colored"
          position="top-right"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          
        />
      </>
    );
  }
}

export default App;
