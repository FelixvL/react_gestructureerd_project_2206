import { Component } from 'react';

class Opteller extends Component {
    constructor(props) {
        super(props);
        this.state = {getal: 0};
    }
  render() {
    return <div>
        Wij springen in deze opteller met {this.props.spronggetal}
        Huidig getal: {this.state.getal}
    </div>
  }
  componentDidMount() {
    this.optelInterval = setInterval(
      () => this.eenErbij(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.optelInterval);
  }
  eenErbij() {
    //console.log(this.state.getal);
    this.setState({    
      getal: (this.state.getal + this.props.spronggetal)
    });
  }
}

export default Opteller;