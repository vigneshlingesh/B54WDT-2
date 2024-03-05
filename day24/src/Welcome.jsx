import React, { Component } from 'react'

export class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {greetings: "hello"}
    }

  render() {
    return (
      <h1>{this.state.greetings},{this.props.name}</h1>
    )
  }
}

export default Welcome

