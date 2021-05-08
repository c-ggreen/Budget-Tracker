import React, { Component } from 'react';

class BalanceMain extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="balanceMain">
                <h1>Current Balance</h1>

                {/* The Total balance that is being called from the parent component "Main" via props */}
                <h1 className="balanceAmount">{this.props.balance}</h1>
            </div>
        );
    }
}

export default BalanceMain;