import React from "react";
import "../assets/scss/todo.scss";
import Formtodo from "../components/Formtodo";
import TodoList from "../components/TodoList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class MainTodo extends React.Component {
  state = {
    listJobs: [
      { id: 1, name: "MAKE VIDEO" },
      { id: 2, name: "CEO" },
      { id: 3, name: "MARKETING" },
      { id: 4, name: "LIVE TWITCH" },
      { id: 5, name: "LIVE YOUTUBE" },
    ],
    editJob: {},
  };

  // thêm việc  (prop function)
  addJob = (job) => {
    if (!job.name) {
      toast.error("Tên công việc không được rỗng");
      return;
    }
    let checkDup = this.state.listJobs.find((n) => n.name == job.name);
    if (checkDup) {
      toast.warn("Có vẻ như bạn đã thêm '" + job.name + "' vào rồi");

      return;
    }
    //
    this.setState({
      listJobs: [...this.state.listJobs, job],
    });
    toast.success("Đã thêm '" + job.name + "' thành công!");
  };

  // xoá todo (prop function)
  delJob = (job) => {
    let filter = this.state.listJobs.filter((n) => n != job);
    //
    this.setState({
      listJobs: filter,
    });

    toast.success("Xoá '" + job.name + "' thành công!");
  };
  //sửa todo (prop function)
  editJober = (job) => {
    let prevJob  = job.name;
    let { listJobs, editJob } = this.state;


    let IsEmpty = Object.keys(job).length === 0;
    // cập nhật lại mảng
    console.log("Job empty", IsEmpty);
    let todoCopy = [...listJobs];

    if (IsEmpty === false) {
      let objIndex = todoCopy.findIndex(n => n.id == job.id);

      console.log("index", objIndex);
      console.log("editJob", editJob);
      console.log("Job", job);
      console.log("todoCopy", todoCopy);

      //
      if (objIndex === -1) {
        toast.error("Công việc không tồn tại hoặc đã bị xoá");
        return;
      }

      todoCopy[objIndex].name = job.name;
      toast.success("Đã sửa thành "+job.name+"' thành công!");
      return;
    }

    toast.error("Tham số chỉnh sửa rỗng!");
  };

  render() {
    // edit title
    document.title = "TODO APP";
    let { listJobs, editJob } = this.state;
    
    console.log("editJob render",editJob);

    return (
      <>
        <h1 className="text-center">SIMPLE TODO APP</h1>
        <Formtodo addJob={this.addJob} />
        <TodoList
          jobs={listJobs}
          delJob={this.delJob}
          editJob={this.editJober}
          editState={editJob}
        />
        <ToastContainer
         theme="colored"
          position="top-right"
          autoClose={800}
          hideProgressBar={false}
          newestOnTop={true}
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
export default MainTodo;
