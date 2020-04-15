/*import React , {Component} from 'react';
import './App.css';

class Board extends Component{
  render(){
    var color = 0;
    var squares = []
    for(let i = 0; i < 64; i++){
      if(i%16===0){
        squares.push(<div className="square-yellow">{i}</div>);
        color=0;
      }
      else if (i%8 === 0){
        squares.push(<div className="square-orange">{i}</div>);
        color =1;
      }
      else if (color ===1){
        squares.push(<div className="square-yellow">{i}</div>);
        color=0;
      }
      else{
        squares.push(<div className="square-orange">{i}</div>);
        color =1;
      }
    }
    return(
      <div className="board">{squares}</div> 
    );
  }
}

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     newNumber: 0
  //   }
  // }

  render(){
    
    return (
      <div className="App">
      <Board/>
      </div>
    );  
  }
  
}
export default App; */
import React , {Component} from 'react';
import './App.css';

class Board extends Component{
  render(){
    var color = 0;
    var squares = []
    for(let i = 0; i < 64; i++){
      if(i%16===0){
        squares.push(<div className="square-yellow">{i}</div>);
        color=0;
      }
      else if (i%8 === 0){
        squares.push(<div className="square-orange">{i}</div>);
        color =1;
      }
      else if (color ===1){
        squares.push(<div className="square-yellow">{i}</div>);
        color=0;
      }
      else{
        squares.push(<div className="square-orange">{i}</div>);
        color =1;
      }
    }
    return(
      <div className="board">{squares}</div> 
    );
  }
}

class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state={
  //     newNumber: 0
  //   }
  // }

  render(){
    
    return (
      <div className="App">
      <Board/>
      </div>
    );  
  }
  
}
export default App;

