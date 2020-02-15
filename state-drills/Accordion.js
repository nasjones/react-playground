import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [
            {
                title: 'Section 1',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                index: 1
            },
            {
                title: 'Section 2',
                content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
                index: 2
            },
            {
                title: 'Section 3',
                content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
                index: 3
            },
        ]
    };

    state = {
        activeP: 0
    }

    renderButtons() {
        return this.props.sections.map((section) => (
            <li key={section.index}>
                <button onClick={() => this.handleButtonClick(section.index)}>{section.title}</button>
                <br />
                {this.renderContent(section)}
            </li>
        ))
    }

    handleButtonClick(change) {
        this.setState({
            activeP: change
        })
    }

    renderContent(section) {
        let output = ""
        if (section.index === this.state.activeP)
            output = section.content
        return output
    }
    render() {
        return (
            <div>
                <p>Accordion goes here</p>
                <ul>
                    {this.renderButtons()}
                </ul>
            </div>
        )
    }
}
export default Accordion