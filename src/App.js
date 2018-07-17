import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// function Hello (props){
//   return <h2>{props.title}</h2>
// }

// const Hello = (props) => <h2>{props.title}</h2>

// class Hello extends Component {
//   render () {
//     return <h2>{this.props.title}</h2>
//   }
// }

// class Text extends Component{
//   render(){
//     return <div>
//       <p>{this.props.text}</p>
//       <p>{this.props.num}</p>
//       <p>{this.props.boolean}</p>
//     </div>
//   }
// }
// JSON.stringify()
class Title extends Component{
  render (){
    return <h1>{this.props.text}</h1>

  }
}

// Title.defaultProps= {
//   text: 'Titulo por defecto'
// }


class Contador extends Component{
  constructor (props){
    super(props)
    this.state = {contador: this.props.contadorinicial}
    setInterval(() => {
      this.setState({ contador: this.state.contador+1})
    },1000)
  }
  render (){
    return <Contadornum numero = {this.state.contador}/>
  }
}

class Contadornum extends Component{
  render (){
    return <span>{this.props.numero}</span>
  }
}
Contador.defaultProps = {
  contadorinicial: 0
}
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text='Mi titulo'/>
          {/* <Hello title='Hello from props'/> */}
          </header>
          <Contador contadorinicial={0}/>
          {/* <Text num={2} text='Texto en string' boolean={false}/>  */}

      </div>
    );
  }
}

export default App;