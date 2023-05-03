import {Component} from 'react'

import logo from './logo.svg';
import './App.css';   //logo spin

class App extends Component {
  constructor(){
    super();

    this.state={
      monsters: [],
      searchField:''
    };
    console.log('constructor');
  }

  componentDidMount(){
    console.log('componentDidMound');
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


  onSearchChange=(event)=>{       //optimization
    const searchField=event.target.value.toLocaleLowerCase();

    this.setState(()=>{
      return {searchField};
    })
  }

  render(){
    console.log('render');

    const { monsters, searchField } =this.state;    //optimization
    const { onSearchChange } = this;

    const filteredMonster=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField); //in the render out of
    });

    return (
      <div className="App">
      <input 
        className='search-box' 
        type='search' 
        placeholder='search monsters' 
        onChange={onSearchChange}/>
        {
          filteredMonster.map((monster)=>{  //iterate
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
