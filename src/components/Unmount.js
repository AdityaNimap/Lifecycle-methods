import React, { Component } from 'react'
import Child from './Child';

class Unmount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         show:true
      }
    }
    
  render() {
    return (
      <div>
        <br/>
        <br/>
        {
            this.state.show ? <Child/> : <h1>Child Component Removed</h1>
        }
        <button onClick={()=>this.setState({show:!this.state.show})}> Toggle Child Component</button>
      </div>
    )
  }
}
export default Unmount;