import React, { Component } from 'react';

class ExpenseItem extends Component {

    render() {
        return (
            <div className="expenseItem">
                <h3>{this.props.expenseName}</h3>
                <h3>${this.props.expenseAmount}</h3>
            </div>
        );
    }
}

export default ExpenseItem;