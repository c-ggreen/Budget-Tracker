import React, { Component } from 'react';
import BalanceMain from './BalanceMain';
import ExpenseMain from './ExpenseMain';

class Main extends Component {
    constructor(){
        super()
        this.state={
            balance: 0,
            expense: 0,
        }
    }

    render() {
        return (
            <div className="main">
                <header>
                    <h1>
                        Budget Tracker
                    </h1>
                </header>

                
                <BalanceMain balance={this.state.balance}/>
                <ExpenseMain expense={this.state.expense}/>
            </div>
        );
    }
}

export default Main;

// -----Project Tasks
// A main component for the app ................................................[COMPLETED]
// A div or component that displays the "Total Balance" ........................[COMPLETED]
// A user input for "Total Balance" ............................................[]
// An expense component that shows "Total Expenses" and each expense ...........[COMPLETED]
// Inputs for "Expense Name" and "Expense Amount" ..............................[]
// Add button for expenses .....................................................[]
// The "Total Balance" is affected/reduced by the addition of an expense........[]

// -----Stretch Goals
// A visual, such as a pie chart ...............................................[]
// Local storage so users can save information and revisit at a later time .....[]
// Ability to add several budget pages and flip through each of them ...........[]