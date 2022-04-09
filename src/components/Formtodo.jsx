import React from "react";

class Formtodo extends React.Component {
  state = {
    job: {},
    notify: {}
  }

  handleGetJob = (e)=>{
    this.setState({
      job:{
        id: Math.floor(Math.random() * 999999),
        name: e.target.value
      }
    });
   
  }
  handleSubmitJob = (e)=>{
    e.preventDefault();
    this.props.addJob(this.state.job);
  }
  render() {

    let {job} = this.state;
 
    return (
     <div className="row justify-content-center">
          <form 
            onSubmit={this.handleSubmitJob} 
            className="form-todo  col-lg-6 col-md-6 col-12 border border-gray rounded"
          >
        <div className="mt-3">
          <label htmlFor="">Tên công việc: </label>
          <input
          onChange={(e) => this.handleGetJob(e)}
            type="text"
            className="form-control"
            placeholder="Nhập tên công việc"
          />
        </div>

        <div className="m-3">
          <button onClick={this.handleSubmitJob}
           className="btn btn-primary align-center"
           >Thêm việc
           </button>
        </div>
      </form>
     </div>
    );
  }
}

export default Formtodo;
