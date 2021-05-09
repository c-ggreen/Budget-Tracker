import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

class ExpenseMain extends Component {
    constructor(props){
        super(props)
        this.state={

            expenseName: 'Name',

            // I have set the expenseAmount state equal to the prop for expense given by "Main" component
            expenseAmount: this.props.expense
        }
    }
    render() {
        return (
            <div className="expenseMain">
                <h1>Total Expenses: <span className="expenseAmount">${this.props.expense}</span></h1>


                
                {/* For each "ExpenseItem" I am giving it a prop of name and amount that is tied to the state */}
                <ExpenseItem 
                expenseName={this.state.expenseName}
                expenseAmount={this.state.expenseAmount}/>
            </div>
        );
    }
}

export default ExpenseMain;