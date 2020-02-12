import React, { Component } from 'react'

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinning: true,
            output: "you're safe!"
        }

        this.spinnerClick = this.spinnerClick.bind(this)
    }

    spinnerClick() {
        // console.log(this.state.spinning)
        console.log(Object.entries(this.state))
        this.state.spinning = true
        // console.log(this.state.spinning)
        console.log(Object.entries(this.state))

        this.timeout = setTimeout(() => {
            console.log("waited")
            console.log(this.state.spinning)
            let rand = Math.ceil(Math.random() * 8)
            this.setState = ({
                chamber: rand,
                spinning: false
            })
            // this.state.chamber = rand
            // this.state.spinning = false
            console.log(this.state.chamber)
        }, 2000)
    }

    componentDidMount() {
        console.log(this.state.output)
        if (this.state.spinning === true) {
            this.setState = ({
                output: "spinning the chamber and pulling the trigger! ..."
            })
            // this.state.output = "spinning the chamber and pulling the trigger! ..."
            console.log(this.state.output)
            console.log("first")
        }
        else if (this.state.chamber === this.props.bulletInChamber) {
            this.setState = ({
                output: "BANG!!!!"
            })
            // this.state.output = "BANG!!!!"
            console.log("second")
        }
        else {
            this.setState = ({
                output: "you're safe!"
            })
            // this.state.output = "you're safe!"
            console.log("third")
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {

        return (<div>
            <p>{this.state.output}</p>
            <button onClick={this.spinnerClick}>Pull the trigger!</button>
        </div>)

    }
}

export default RouletteGun