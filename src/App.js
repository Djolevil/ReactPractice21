import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modaslIsOpen: false 
  }

  showModal = () => {
    this.setState({ modaslIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modaslIsOpen: false });
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.modaslIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modaslIsOpen} />
        <button className='Button' onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
