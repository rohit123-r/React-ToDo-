import React from "react";
import "./style.css";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      lists: [{ id: 1, name: "Buy A new Laptop" }, { id: 2, name: "Doctor Appointment " }],
      newTask: ""
    };
  }

  addTask = () => {
    const arr = [...this.state.lists];

    const newTask = {
      id: Math.random(),
      name: this.state.newTask
    };

    arr.push(newTask);

    this.setState({
      lists: arr
    });
  };

  changeTask = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  getDetails = data => {
    console.log(data);
    const arr = [...this.state.lists];

    const newArr = arr.filter(t => t.id != data.id);

    this.setState({
      lists: newArr
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.changeTask} />

        <button onClick={this.addTask}>Add Task</button>

        <h1 onClick={this.changeName}>Tasks</h1>
        {this.state.lists.map(dt => {
          return (
            <h4 key={dt.id} onClick={() => this.getDetails(dt)}>
              {dt.name}
            </h4>
          );
        })}
      </div>
    );
  }
}
