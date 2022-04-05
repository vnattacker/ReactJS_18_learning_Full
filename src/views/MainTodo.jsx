import React from "react";
import "../assets/scss/todo.scss";
import Formtodo from "../components/Formtodo";
import TodoList from "../components/TodoList";
import { toast } from "react-toastify";

class MainTodo extends React.Component {
  state = {
    listJobs: [
      { id: 1, name: "MAKE VIDEO" },
      { id: 2, name: "CEO" },
      { id: 3, name: "MARKETING" },
    ],
  };

  // thêm việc
  addJob = (job) => {
    if (!job.name) {
      toast.error("Tên công việc không được rỗng");
      return;
    }
    let checkDup = this.state.listJobs.find((n) => n.name == job.name);
    if (checkDup) {
      toast.error("Có vẻ như bạn đã thêm '" + job.name + "' vào rồi");

      return;
    }
    //
    this.setState({
      listJobs: [...this.state.listJobs, job],
    });
    toast.success("Đã thêm '" + job.name + "' thành công!");
  };

  // xoá công việc
  delJob = (job) => {
    let filter = this.state.listJobs.filter((n) => n != job);
    //
    this.setState({
      listJobs: filter,
    });

    toast.success("Xoá '" + job.name + "' thành công!");
  };
  render() {
    let { listJobs } = this.state;
    // edit title
    document.title = "TODO APP";
    return (
      <>
        <Formtodo addJob={this.addJob} />
        <TodoList jobs={listJobs} delJob={this.delJob} />
      </>
    );
  }
}
export default MainTodo;
