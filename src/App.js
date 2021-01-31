import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Drew', age: 31 },
      { name: 'Rachel', age: 28 },
      { name: 'Steve', age: 55 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Rachel', age: 29 },
        { name: 'Steve', age: 60 }
      ]
    });
  };

  nameChangedHandler = (event) =>
  {
    this.setState({
      persons: [
        { name: 'Drew', age: 32 },
        { name: event.target.value, age: 29 },
        { name: 'Steve', age: 60 }
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Drew!')}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Sushi
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name
        </button>
          {persons}
      </div>
    );
  
  }
}

export default App;
