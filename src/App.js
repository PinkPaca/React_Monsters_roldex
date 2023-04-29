import {Component} from 'react'

import logo from './logo.svg';
import './App.css';   //logo spin

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => 
    response.json())//promise
    .then((users)=>this.setState(()=>{
      return {monsters:users}
    },
    ()=>{
      console.log(this.state);
    }
    ));
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
