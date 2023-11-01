import React from "react";
import PropTypes from 'prop-types';
import TasksFilter from '../tasks-filter'; 

import './footer.css';

const Footer = ({leftItem, filterDone, filterActive, filterAll, clearCompleted, isFilter }) => {
    return (
      <footer className="footer">
          <span className="todo-count">{leftItem} items left</span>
          <TasksFilter filterDone={() => filterDone()} filterActive={() => filterActive()} filterAll={() => filterAll()} isFilter={isFilter}/>
          <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>

    )
  };

Footer.defaultProps = {
  leftItem: 0,
  filterDone: () => {},
  filterActive: () => {},
  filterAll: () => {},
  clearCompleted: () => {},
  isFilter: 0
}
Footer.propTypes = {
  leftItem: PropTypes.number,
  filterDone: PropTypes.func,
  filterActive: PropTypes.func,
  filterAll: PropTypes.func,
  isFilter: PropTypes.number
};


export default Footer;