import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return <div className="App">
      Dit staat in de App Component!<br />
      En dit is variabel: <b>{this.props.soortnaam}</b>
    </div>
  }
}

export default App;
