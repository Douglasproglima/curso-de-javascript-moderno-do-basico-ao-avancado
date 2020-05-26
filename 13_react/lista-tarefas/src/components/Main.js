import React, { Component } from 'react';

//Form
import { FaPlus } from 'react-icons/fa';

//Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main  extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  };

  handleSumit = (event, index) => {
    event.preventDefault();
    const { tasks } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return; //Diferente de -1 não existe

    const newsTasks = [...tasks]; //Copy do state

    if(index === -1) {
      this.setState({
        tasks: [...newsTasks, newTask],
        newTask: '',
      });
    } else {
      newsTasks[index] = newTask;
      this.setState({
        tasks: [...newsTasks],
        index: -1,
      });
    }
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
    const { tasks } = this.state;
    this.setState({
      index,
      newTask: tasks[index],
    });
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
