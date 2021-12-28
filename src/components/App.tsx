import React, {Component} from 'react';
import * as ReactDOM from 'react-dom';
const ipcRenderer = window.require('electron').ipcRenderer;

const dstyle = {
    width: "100vw",
    height: "100vh"
}

class Application extends Component<{}, {x: number, y: number}> {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

/*
  sendUpdate = (data) => {
    ipcRenderer.send('maintToRenderer', data)
  }
*/

  getMouseCoord() {
    ipcRenderer.on('maintToRenderer', (e, data) => {
      this.setState({ x: data.x, y: data.y });
    })
  }

  render() {
    this.getMouseCoord();
    const { x , y } = this.state;
    return <div style={dstyle}>
      <h1> Mouse coordinates: { x } { y }</h1>
    </div>;
  }
}


ReactDOM.render(<Application />, document.getElementById("core"));