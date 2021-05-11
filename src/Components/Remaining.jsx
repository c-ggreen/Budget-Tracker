import React, { Component } from 'react';

class Remaining extends Component {
    render() {
        return (
            <div className="remain" >
                <h1>Remaining Balance: ${this.props.balance - this.props.expense}</h1>
            </div>
        );
    }
}

export default Remaining;