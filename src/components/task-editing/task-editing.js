import React from "react";

const TaskEditing = () => {
    return (
<li className="editing">
            <div className="view">
              <input className="toggle"/>
              <label>
                <span className="description">Editing task</span>
                <span className="created">created 5 minutes ago</span>
              </label>
              <button className="icon icon-edit"></button>
              <button className="icon icon-destroy"></button>
            </div>
            <input type="text" className="edit" placeholder="Editing task"/>
          </li>
    )
  };

export default TaskEditing;