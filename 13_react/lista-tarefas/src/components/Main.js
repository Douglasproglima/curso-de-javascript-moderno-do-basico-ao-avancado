import React, { Component } from 'react';

//Form
import { FaPlus } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main  extends Component {
  state = {
    newTask: '',
    tasks: []
  };

  handleSumit = (event) => {
    event.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return; //Diferente de -1 não existe

    const newsTasks = [...tasks]; //Copy do state

    this.setState({
      tasks: [...newsTasks, newTask],
    });
  }

  handleInputChange = (event) =>  {
    this.setState({
      newTask: event.target.value.toUpperCase(),
    });
  }

  handleDelete = (event, index) => {
    const { tasks } = this.state;
    const newsTasks = [...tasks];
    newsTasks.splice(index, 1);

    this.setState({
      tasks: [...newsTasks],
    });
  }

  handleEdit = (event, index) => {
    console.log('Update', index);
  }

  render() {
    const { newTask, tasks } = this.state;
    return (
      <div className="main">
        <h2>Lista de Tarefas</h2>
        <hr></hr>

        <form onSubmit={this.handleSumit} action="#">
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
            maxLength="34"
            />
          <button type="submit">
            <FaPlus />
          </button>
          <hr></hr>

          <ul className="tasks">
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <span>
                  <FaEdit
                    onClick={ (e) => this.handleEdit(e, index)}
                    className="edit"
                  />

                  <FaWindowClose
                    onClick={(e) => this.handleDelete(e, index)}
                    className="delete"

                  />
                </span>
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
