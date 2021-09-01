


// function App() {
//   return <Habits/>;
// }

import React, { Component } from 'react'
import './app.css';
import Habits from './components/habits';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        {id: 1, name: 'Reading', count:0},
        {id: 2, name: 'Running', count:0},
        {id: 3,name: 'Coding', count:0},
    ]
};

handleIncrement = (habit) => {
  // const habits = [...this.state.habits];
  // const index = habits.indexOf(habit);
  // habits[index].count++;
  const habits = this.state.habits.map(item => {
    if (item.id === habit.id) {
      return {...habit, count: habit.count + 1} //props로 전달되는 객체안의 참조를 끊고 새롭게 연결함... ㄸㄸ 존나어렵다
    } 
    return item;
  })
  this.setState({ habits: habits});

};
  // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 한다.

handleDecrement = (habit) => {
  // console.log(`handleDecrement ${habit.name}`)
  // const habits = [...this.state.habits];
  // const index = habits.indexOf(habit);
  // const count = habits[index].count--;
  // habits[index].count = count < 0 ? 0 : count;

  const habits = this.state.habits.map(item => {
    if (item.id === habit.id) {
      return {...habit, count: habit.count -1 < 0 ? 0 : habit.count -1 }
    }
    return item;
  })
  this.setState({ habits });

};
  // state 오브젝트 안에 있는 count를 증가 한 뒤 state를 업데이트 한다.

handleDelete = (habit) => {
  console.log(`handleDelete ${habit.name}`)
  const habits = this.state.habits.filter(item => item.id !== habit.id);
  this.setState({ habits});
};

handleAdd = name => {
  const habits = [...this.state.habits, {id: Date.now(), name: name, count:0}];
  this.setState({habits});
}

handleReset = () => {
  const habits = this.state.habits.map(habit => {
    if (habit.count !==0) {
      return { ...habit, count: 0}
    }
    return habit;
  });
  this.setState({habits})
}

  render() {
    return (
      <>
    <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
    <Habits
    habits={this.state.habits}
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onDelete={this.handleDelete}
    onAdd={this.handleAdd}
    onReset={this.handleReset}
    />
    </>
    );
  }
}


export default App;
