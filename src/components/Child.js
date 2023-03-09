import React, { Component } from 'react'

class Child extends Component {
    componentWillUnmount(){
        console.log('componentWillUnmount called')
    }
  render() {
    return (
      <div>
        Child Component
      </div>
    )
  }
}
export default Child;