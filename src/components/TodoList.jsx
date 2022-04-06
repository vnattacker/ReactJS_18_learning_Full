import React from "react";
import "../assets/scss/todo.scss";
class TodoList extends React.Component {

  state = {
    editJob: {}
  }

// sửa todo 
  handleEditJob = (item) => {
    let { editJob } = this.state;
    let isEmpty = Object.keys(editJob).length === 0;
    
      if(isEmpty === false && item.id === editJob.id){

        this.props.editJob(editJob);
        this.setState({
          editJob: {}
        });
        return;
      }
      this.setState({
        editJob: item
      });
      //this.props.editJob(editJob);
  };


//Xoá todo list
  handleDeleteJob = (item) => {
    this.props.delJob(item);
  };

  // nhận dữ liệu input sửa todo
  handleChangeEditInput = (e, item)=>{
      this.setState({
        editJob: {
          id: item.id,
          name: e.target.value
        }
      });

  }



  
  render() {
    let { jobs } = this.props;
    let { editJob } = this.state;
    let isEmpty = Object.keys(editJob).length === 0;

    return (
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card">
            <div className="card-header  primary">
              <h3>Công việc</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {jobs.map((item, index) => (
                  <li key={item.id} className="list-group-item posit-relative">
                    <div className="list">
                      {isEmpty === true ? (
                        <span>
                          {index + 1} - {item.name}
                        </span>
                      ) : (
                        <>
                          {editJob.id === item.id ? (
                            <span>
                              
                              {index + 1} - 
                              <input 
                              type="text" 
                              className="form-control w-75" 
                              value={editJob.name} 
                              onChange={(e)=> this.handleChangeEditInput(e, item)}
                              />
                            </span>
                          ) : (
                            <span>
                              {item.id} - {item.name}
                            </span>
                          )}
                        </>
                      )}
                    </div>

                    {/*sửa xoá*/}
                    <div className="group-crud">
                      
                        <button
                          onClick={() => this.handleEditJob(item)}
                          className="btn-edit btn-icon"
                        >
                          {
                             isEmpty === false && item.id === editJob.id ? 
                             <i className="fa-solid fa-floppy-disk"></i>

                             :
                             <i className="fa-solid fa-pen"></i>
                          }
                       
                         
                        </button>
                       
                      
                      
                      <button
                        onClick={() => this.handleDeleteJob(item)}
                        className="btn-edit btn-icon"
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoList;
