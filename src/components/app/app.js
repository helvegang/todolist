import React, { Component } from 'react';  
/* В РЕНДЕР ПИСАТЬ НАДО ИМЕННО РЕАКТ ЭЛЕМЕНТ, ТО ЕСТЬ КОМПОНЕНТ ИЛИ ТЕГ ОБЕРНУТЫЙ В < >/ */
import Header from '../header';
import TaskList from '../task-list';

import NewTaskForm from '../new-task-form';

import Footer from '../footer'; 

import './app.css';

  
export default class App extends Component {
  maxId = 100;
  artr = 123;
  
  state = {
    todoData: [
      this.createTodoItem('Drink coffee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ],
    filterData: [],
    
    isFilter: 0  /* значение isFilter: 0 означает что фильтры задач не включены (ALL) */
  
  };

  createTodoItem(label) {
    return {
      label,
      done: false,
      checkedBox: false,
      id: this.maxId++,
      dateCreate: new Date()
    }
  }
  deleteItem = (id) => {
    this.setState(({ todoData, filterData, isFilter }) => {
      if (isFilter === 0) {
        const idx = todoData.findIndex((el) => el.id === id);

      const newArray =      [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      };
      } else if (isFilter > 0) {
        const idx = filterData.findIndex((el) => el.id === id);
        const todoInd = todoData.findIndex((el) => el.id === id);
        const newArray = [...filterData.slice(0, idx), ...filterData.slice(idx + 1)];
        const newArray2 = [...todoData.slice(0, todoInd), ...todoData.slice(todoInd + 1)];
        return {
          todoData: newArray2,
          filterData: newArray
          
        };
      }
      
    });
  };

  addItem = (text) => {

    const newItem = this.createTodoItem(text);

    this.setState(({ todoData, filterData, isFilter }) => {
      if (isFilter === 0) {
      const newArrTodo = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArrTodo
      };
    }
    else if (isFilter === 1) {
      const newArrTodo = [
        ...todoData,
        newItem
      ];

  
      const newArrFilter = [
        ...filterData,
        newItem
      ];

      return {
        todoData: newArrTodo,
        filterData: newArrFilter
      };
    }
    else if (isFilter === 2) {
      const newArrTodo = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArrTodo
      };
    }
    });
  };

  onToggleDone = (id) => {
    
    this.setState( ({ todoData, filterData, isFilter }) => {
      
      if (isFilter === 0) {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = { ...oldItem, done: !oldItem.done, checkedBox: !oldItem.checkedBox};

      const newArray = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    }
    else if (isFilter === 1) {
      
      const idx = filterData.findIndex((el) => el.id === id);
      const todoInd = todoData.findIndex((el) => el.id === id);


      const todoOldItem = todoData[todoInd];


      const todoNewItem = { ...todoOldItem, done: !todoOldItem.done, checkedBox: !todoOldItem.checkedBox};

   
      const newArray = [...filterData.slice(0, idx), ...filterData.slice(idx + 1)];
      const todoNewArray = [
        ...todoData.slice(0, todoInd),
        todoNewItem,
        ...todoData.slice(todoInd + 1)
      ];

      return {
        todoData: todoNewArray,
        filterData: newArray
      };
    

    }
    else if (isFilter === 2) {

      
      const idx = filterData.findIndex((el) => el.id === id);
      const todoInd = todoData.findIndex((el) => el.id === id);

    
      const todoOldItem = todoData[todoInd];

     
      const todoNewItem = { ...todoOldItem, done: !todoOldItem.done, checkedBox: !todoOldItem.checkedBox};

  
      const newArray = [...filterData.slice(0, idx), ...filterData.slice(idx + 1)];
      const todoNewArray = [
        ...todoData.slice(0, todoInd),
        todoNewItem,
        ...todoData.slice(todoInd + 1)
      ];

      return {
        todoData: todoNewArray,
        filterData: newArray
      };
 
    }
    });
    
  }

  filterDone = () => {
    this.setState(({ todoData}) => {
      const completedArray = todoData.filter((el) => el.done);  
      return {
        filterData: completedArray,
        isFilter: 2  /* значение isFilter: 2 означает, что включен фильтр задач completed*/
      };
    });
  }
  filterActive = () => {
    this.setState(({ todoData}) => {
      const completedArray = todoData.filter((el) => !el.done);  
      return {
        filterData: completedArray,
        isFilter: 1 /* значение isFilter: 1 означает, что включен фильтр задач active*/
      };
    });
  }
  filterAll = () => {
    this.setState(() => {
      return {
        isFilter: 0
      };
    });
  }
  clearCompleted = () => {

    this.setState(({ todoData, filterData }) => {
      const clearTodoArray = todoData.filter((el) => !el.done);
      const clearNewArray = filterData.filter((el) => !el.done);  
      return {
        todoData: clearTodoArray,
        filterData: clearNewArray
      };
    });
  }

  render() {


    const { todoData, filterData, isFilter } = this.state;
    const todoCount = todoData.length - todoData.filter((el) => el.done).length;
    
    let renderData;
    if (this.state.isFilter === 0) {
      renderData = todoData
    }
    else if (this.state.isFilter > 0) {
      renderData = filterData
    };

    
    return (
      <div className='todoapp'>
        <Header />
      <NewTaskForm onItemAdded={this.addItem}/>
      <TaskList 
      todos={renderData}
      onDeleted={ this.deleteItem }
      onToggleDone={this.onToggleDone}/>
      
      <Footer leftItem={todoCount} filterDone={this.filterDone} filterActive={this.filterActive} 
      filterAll={this.filterAll} clearCompleted={this.clearCompleted} isFilter={isFilter}/>
      </div>
  );
  };
 
};
