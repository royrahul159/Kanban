import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      inputVal : ""
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
  }
  selectTask =(e) =>{
    let selectedTask = e.target.dataset.testid.split("-")[1];
    this.setState({
      inputVal : selectedTask
    })
  }
  moveForward = () =>{
    let inputVal = this.state.inputVal;
    const tasksArr = [...this.state.tasks];
    for (var i in tasksArr) {
      if (tasksArr[i].name === inputVal && tasksArr[i].stage < this.stagesNames.length -1) {
        tasksArr[i].stage ++;
         break; 
      }
    }
    this.setState({
      tasks: tasksArr
    })
  }
  moveBackward = () =>{
    let inputVal = this.state.inputVal;
    const tasksArr = [...this.state.tasks];
    for (var i in tasksArr) {
      if (tasksArr[i].name === inputVal && tasksArr[i].stage > 0) {
        tasksArr[i].stage --;
         break; 
      }
    }
    this.setState({
      tasks: tasksArr
    })
  }
  render() {
    const { tasks } = this.state;

    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }

    return (
      <div className="App">
        <Controls 
          inputVal={this.state.inputVal}
          moveForward={this.moveForward}
          moveBackward = {this.moveBackward}
        />
        <Board
          selectTask = {this.selectTask}
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
        />
      </div>
    );
  }
}

export default App;
