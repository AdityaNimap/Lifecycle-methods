import React, { Component } from 'react'
import './App.css'
import LifecycleA from './components/LifecycleA';
import Unmount from './components/Unmount';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <LifecycleA/>
        <Unmount/>
      </div>
    )
  }
}
export default App;