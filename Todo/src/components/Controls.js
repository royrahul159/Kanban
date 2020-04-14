import React, { Component } from 'react';

class Controls extends Component {
  constructor(props){
    super(props);
    this.state = {
      disabledBtn : true
    }
  }
  render() {
    return (
      <div style={{ padding: '1rem', background: '#D6F3FF' }}>
        <h1>Controls</h1>
        <div style={{ display: 'flex', marginTop: '1rem' }}>
          <input
            readOnly
            placeholder="Selected task name"
            style={{ fontSize: '1rem' }}
            data-testid="selected-task-field"
            value = {this.props.inputVal}
          />
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-back-btn"
            onClick={this.props.moveBackward} 
            disabled = {this.props.inputVal === "" ? true : false}
          >
            Move back
          </button>
          <button
            style={{ marginLeft: '1rem' }}
            data-testid="move-forward-btn"
            onClick={this.props.moveForward} 
            disabled = {this.props.inputVal === "" ? true : false}
          > 
            Move forward
          </button>
        </div>
      </div>
    )
  }
}

export default Controls;
