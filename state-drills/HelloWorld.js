import React from 'react'

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'world'
        }
        this.worldClick = this.worldClick.bind(this)
        this.friendClick = this.friendClick.bind(this)
        this.reactClick = this.reactClick.bind(this)
    }

    friendClick() {
        this.setState({ who: 'friend' })
    }

    worldClick() {
        this.setState({ who: 'world' })
    }

    reactClick() {
        this.setState({ who: 'React' })
    }

    render() {
        return (<div>
            <p>Hello, {this.state.who}!</p>
            <button id="friend" onClick={this.friendClick}>friend</button>
            <button id="world" onClick={this.worldClick}>world</button>
            <button id="react" onClick={this.reactClick}>react</button>
        </div>)
    }
}

export default HelloWorld;