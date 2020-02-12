import React from 'react'

class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            prog: 'tick'
        }

    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })

            if ((this.state.count % 2 === 0) && (this.state.count < 8))
                this.setState({ prog: 'tick' })
            else if ((this.state.count % 2 !== 0) && (this.state.count < 8))
                this.setState({ prog: 'tock' })
            else {
                this.setState({ prog: 'BOOM!!!!' })
                clearInterval(this.interval)
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return (<div>
            <p>{this.state.prog}</p>
        </div>)
    }
}

export default Bomb