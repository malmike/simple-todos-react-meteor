import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import Task from "./Task";
import { Tasks } from "../api/tasks";

class App extends Component{

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task}/>
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List </h1>
        </header>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  console.log('Tasks', Tasks.find({}).fetch());
  return {
    tasks: Tasks.find({}).fetch(),
  };
})(App);