import React, { Component } from 'react';

//Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main  extends Component {
  state = {
    newTask: '',
  };

  handleInputChange = (event) =>  {
    this.setState({
      newTask: event.target.value,
    });
  }
  render() {
    const { newTask } = this.state;
    return (
      <div className="main">
        <h2>Lista de Tarefas</h2>
        <hr></hr>

        <form action="#">
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
            />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
