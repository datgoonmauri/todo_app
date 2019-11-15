import React, {Component} from "react";


class TodoItem extends Component {
    //this.props.handleDelete
    render() {
      return (
        <li className={this.props.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              checked={this.props.completed}
              onChange={this.props.handleToggle}
            />
            <label>{this.props.title}</label>
            <button className="destroy"
            onClick={this.props.handleDelete} />
          </div>
        </li>
      );
    }
  }

  export default TodoItem