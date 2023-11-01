import React, { Component } from "react";
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns'

import './task.css';

export default class Task extends Component {

  static defaultProps = {
    label: 'Название не задано',
    onDeleted: () => {},
    onToggleDone: () => {},
    done: false,
    checkedBox: false,
    dateCreate: new Date()
  }

  static propTypes = {
    label: PropTypes.string,
    onDeleted: PropTypes.func,
    onToggleDone: PropTypes.func,
    done: PropTypes.bool,
    checkedBox: PropTypes.bool,
    dateCreate: PropTypes.object
  };    
  render() {

    const { label, onDeleted, onToggleDone, done, checkedBox, dateCreate } = this.props;
    
    let createdAgo = formatDistanceToNow(dateCreate, {includeSeconds: true});
    
    

    let classNames = '';
    
    if (done) {
      classNames += 'completed'
  

    }
    
    
      return (
        <li className={classNames}>
  <div className="view">
    
    <input className="toggle" onChange={onToggleDone} type="checkbox" checked={checkedBox}/>
    <label>
      <span className="description"
      onClick={onToggleDone}>{ label }</span>
      <span className="created">created { createdAgo } ago</span>
    </label>
    <button className="icon icon-edit"></button>
    <button className="icon icon-destroy"
    onClick={onDeleted}></button>
  </div>
  <input type="text" className="edit" placeholder="Editing task"></input>
  </li>
  
      )
  }
}


