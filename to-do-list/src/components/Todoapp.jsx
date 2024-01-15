import React from "react";
import "./Todo.css"

export default class Todoapp extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todolist: [],
    };
  }

  render() {
    let { text, todolist } = this.state;

    let handleChange = (event) => {
      this.setState({ text: event.target.value });
    };

    let handleClick = () => {
      this.setState({
        todolist: [...todolist, text],
      });
      this.setState({text:""})
    };

    let handleUpdate = (index) => {
      let newValue = prompt("Write your new value");
      let updatedArr = todolist.map((el, i) => {
        if (i === index) {
          return newValue;
        }
        return el;
      });
      this.setState({ todolist: updatedArr });
    };
    let handleDelete = (index) => {
        let deletedArr = todolist.filter((el,i)=>i!==index)
        this.setState({ todolist: deletedArr });
    }
    return (
      <>
      <div className="main">
        <div className="addtodo">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="enter your to-do"
          />
          <button onClick={handleClick}>ADD</button>
        </div>
        <div className="buttons">
          {todolist.map((el, i) => (
            <div key={i}>
              <p>{el}</p>
              <button onClick={() => handleUpdate(i)}>Update</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
}
