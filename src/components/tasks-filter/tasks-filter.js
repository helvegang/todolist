import React, { Component } from "react";
import PropTypes from 'prop-types';
import './task-filter.css';


export default class TasksFilter extends Component {
  static defaultProps = {
    filterDone: () => {},
    filterActive: () => {},
    filterAll: () => {},
    isFilter: 0
  };
  static propTypes = {
    filterDone: PropTypes.func,
    filterActive: PropTypes.func,
    filterAll: PropTypes.func,
    isFilter: PropTypes.number
  };
  
  render() {
    const { filterDone, filterActive, filterAll, isFilter} = this.props;
    let filterAllClass = '';
    let filterActiveClass = '';
    let filterCompletedClass = '';
    if (isFilter === 0) {
      filterAllClass += 'selected'
    }
    else if (isFilter === 1) {
      filterActiveClass += 'selected'
    }
    else if (isFilter === 2) {
      filterCompletedClass += 'selected'
    }
    return (
      <ul className="filters">
          <li>
            <button className={filterAllClass} onClick={filterAll}>All</button>
          </li>
          <li>
            <button className={filterActiveClass} onClick={filterActive}>Active</button>
          </li>
          <li>
            <button className={filterCompletedClass} onClick={filterDone}>Completed</button>
          </li>
        </ul>

  )
  }
}


 


