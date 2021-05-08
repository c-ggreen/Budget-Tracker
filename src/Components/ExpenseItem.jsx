import React, { Component } from 'react';

class ExpenseItem extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h1>
                {this.props.expenseName}.........................{this.props.expenseAmount}
                </h1>
            </div>
        );
    }
}

export default ExpenseItem;