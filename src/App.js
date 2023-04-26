import {Component} from 'react'

import logo from './logo.svg';
import './App.css';   //logo spin

class App extends Component {
  constructor(){
    super();
    this.state={
      monsters:[
      {
        name: 'Linda',
        id: '123eae123'
      },
      {
        name: 'Frank',
        id: '123ea23'
      },
      {
        name: 'Jacky',
        id: '1ae123'
      },
      {
        name: 'Andrei',
        id: '1asd3'
      }
    ]
    };
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{  //iterate
            return <div key={monster.id}>
            <h1>{monster.name}</h1>
            </div>;
          })
        }
      </div>
    );
  }
}

export default App;
