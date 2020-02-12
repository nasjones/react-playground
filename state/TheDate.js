import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        // console.log('constructor');
        super(props)
        this.state = {
            datetime: new Date()
        };
    }

    componentDidMount() {
        // console.log('component mounted');
        this.interval = setInterval(() => {
            // console.log('interval set');
            this.setState({ datetime: new Date() })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        // console.log('render');

        return (
            <div>{this.state.datetime.toLocaleString()}</div>
        )
    }
}

export default TheDate