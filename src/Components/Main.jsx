import React, { Component } from 'react';
import BalanceMain from './BalanceMain';
import ExpenseMain from './ExpenseMain';

class Main extends Component {
    constructor(){
        super()
        this.state={
            
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


                <BalanceMain />
            </div>
        );
    }
}

export default Main;

// -----Project Tasks
// A main component for the app ................................................[COMPLETED]
// A div or component that displays the "Total Balance" ........................[COMPLETED]
// A user input for "Total Balance" ............................................[COMPLETED]
// An expense component that shows "Total Expenses" and each expense ...........[COMPLETED]
// Inputs for "Expense Name" and "Expense Amount" ..............................[COMPLETED]
// Add button for expenses .....................................................[COMPLETED]
// The "Total Balance" is affected/reduced by the addition of an expense .......[]
// The "Total Expense" is increased by the addition of an expense ..............[COMPLETED]
    // NOTE: May have to create own API so balance and expense can interact with each other

// *******************Update the comments when you get a chance**************************

// -----Stretch Goals
// A visual, such as a pie chart ...............................................[]
// Local storage so users can save information and revisit at a later time .....[]
// Ability to add several budget pages and flip through each of them ...........[]