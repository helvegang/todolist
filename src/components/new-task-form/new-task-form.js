import React, { Component } from "react";
import PropTypes from 'prop-types';
import './new-task-form.css';

export default class NewTaskForm extends Component {
  static defaultProps = {
    onItemAdded: () => {},
  };

  static propTypes = {
    onItemAdded: PropTypes.func,
  };
  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    }
    )
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: ''
    });
  };
    render() {
      const placeholderText =  'What needs to be done?';
      return (
            <form onSubmit={this.onSubmit}>
              <input className="new-todo" placeholder={placeholderText} autoFocus
              onChange={this.onLabelChange}
              value={this.state.label}
            /></form>
            
    
        )
      };
    }
  
