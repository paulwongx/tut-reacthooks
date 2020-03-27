import React, { Component } from 'react'

// Old Method: Mount on init only via componentDidMount()
class ClassMouse extends Component {
  constructor(props) {
    super(props)

    this.state = {
      x: 0,
      y: 0
    }
  }

  logMousePosition = e => {
    this.setState({x: e.clientX, y:e.clientY})
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.logMousePosition) // event listener setup only once
  }

  componentWillUnmount() { // removes listener when element is hidden
    window.removeEventListener('mousemove', this.logMousePosition)
  }

  render() {
    return (
      <div>
        X - {this.state.x} Y - {this.state.y}
      </div>
    )
  }
}

export default ClassMouse
