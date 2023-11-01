import React from 'react';
import PropTypes from 'prop-types'
import Task from '../task'; 

import './task-list.css';


const TaskList = ({ todos, onDeleted, onToggleDone }) => {

        let elements = todos.map((item) => {
                const {id, ...props} = item;
                return (<Task key={item.id} {...props} onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}/>)
        })

        return (
        <ul className="todo-list">{elements}</ul>
        );
};
TaskList.defaultProps = {
        todos: [],
        onDeleted: () => {},
        onToggleDone: () => {}
        
};
TaskList.propTypes = {
        todos: PropTypes.arrayOf(PropTypes.object).isRequired,
        onDeleted: PropTypes.func,
        onToggleDone: PropTypes.func
}



  export default TaskList;