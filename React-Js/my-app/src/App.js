import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Preview from './Preview';
import Speed from './Speed.js'
import './main.css'; // Tell webpack that Button.js uses these styles
import getText from './getText.js'

const initialState = {
    text: getText(),
    userInput:'',
    symbols:0,
    sec:0,
    started:false,
    finished:false,
}

class App extends Component {
  state = initialState;
  render() {
    return(
      <div className="container mb-5 bg-green">
        <h3 className="p-3 text-center">Typing Speed Check</h3>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Preview text={this.state.text} userInput={this.state.userInput}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <textarea value={this.state.userInput} onChange={this.onUserInputChange} readOnly={this.state.finished} name="" id="" className="form-control mb-3 mt-5" placeholder="Start Typing">
            </textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 offset-md-3">
            <Speed sec={this.state.sec} symbols={this.state.symbols}/>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 offset-md-3">
            <button className="btn btn-primary" onClick={this.onRestart}>Restart</button>
          </div>
        </div>
      </div>
    )
  }

  onRestart = () => {
    this.setState(initialState);
  }

  onUserInputChange = (e) =>{
    const v = e.target.value;
    this.setTimer()
    this.setState({
      userInput:v,
      symbols: this.CountCorrectSymbols(v)
    });
    this.onFinish();

  }

  setTimer(){
    if(!this.state.started){
      this.setState({started:true});
      this.interval= setInterval(()=>{
        this.setState(prevProps =>{
          return {sec: prevProps.sec + 1}
        })
      },1000)
    }
  }

  CountCorrectSymbols(userInput){
    const text = this.state.text.replace(' ','');//remove extra space by repacing it with empty char
    return userInput.replace(' ','').split('').filter((s,i)=> s === text[i]).length;
  }

  onFinish(userInput){
    if(userInput === this.state.text){
      clearInterval(this.interval);
      this.setState({
        finished:true,
      })
    }
  }
}

// function App(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Start React Js Projects <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React to {props.purpose}
//         </a>
//       </header>
//     </div>
//   );
// }



export default App;
