import React from "react";
import "../assets/scss/todo.scss";
class TodoList extends React.Component {
  handleEditJob = (item) => {
    console.log("Edit: ", item);
  };

  handleDeleteJob = (item) => {
    this.props.delJob(item);
  };

  render() {
    let { jobs } = this.props;
    return (
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card">
            <div className="card-header  primary">
              <h3>Danh sách công việc đã thêm</h3>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {jobs.map((item, index) => (
                  <li key={item.id} className="list-group-item posit-relative">
                    <div className="list">
                      <span>{index + 1}</span> - {item.name}
                    </div>
                    <div className="group-crud">
                      <button
                        onClick={() => this.handleEditJob(item)}
                        className="btn-edit btn-icon"
                      >
                        <i className="fa-solid fa-pen"></i>
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
