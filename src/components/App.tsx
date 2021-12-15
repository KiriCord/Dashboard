import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';

const coord = {
    width: "100vw",
    height: "100vh"
}

class Application extends Component<{}, {x: number, y: number}> {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  _onMouseMove(e) {
    this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  }
  render() {
    const { x , y } = this.state;
    return <div style={coord} onMouseMove={this._onMouseMove.bind(this)}>
      <h1> Mouse coordinates: { x } { y }</h1>
    </div>;
  }
}


ReactDOM.render(<Application />, document.body);