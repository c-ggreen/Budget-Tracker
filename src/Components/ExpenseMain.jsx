import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';

class ExpenseMain extends Component {
    constructor(props){
        super(props)
        this.state={
            expenseName: '',
            expenseAmount: '',
            expenseArray:[]
        }
    }

    changeName = (event) =>{
        this.setState({
            expenseName: event.target.value
        })
    }

    changeAmount = (event) =>{
        this.setState({
            expenseAmount: event.target.value
        })
    }

    addExpense = () =>{
        let newArray = this.state.expenseArray
        
        const expenseObject ={
            expenseName: this.state.expenseName,
            expenseAmount: this.state.expenseAmount
        }

        newArray.push(expenseObject)

        this.setState({
            expenseArray: newArray
        })
    }

    onFocusName = () =>{
        this.setState({
            expenseName:'',
        })
    }
    onFocusAmount = () =>{
        this.setState({
            expenseAmount:''
        })
    }


    render() {
        return (
            <div className="expenseMain">
                <h1>Total Expenses: <span className="expenseAmount">${this.state.expenseAmount}</span></h1>

            <input 
                    className="balanceInput"
                    type="text" 
                    placeholder="Expense Name"
                    onChange={this.changeName}
                    value={this.state.expenseName}

                    // makes it so that when user clicks on input field again it resets it to an empty input
                    onFocus={this.onFocusName}
            />

            <input 
                    className="balanceInput"
                    type="number" 
                    placeholder="Expense Amount"
                    onChange={this.changeAmount}
                    value={this.state.expenseAmount}

                    // makes it so that when user clicks on input field again it resets it to an empty input
                    onFocus={this.onFocusAmount}
            />

            <button onClick={()=>{this.addExpense()}}>Add Expense</button>

                
            {/* For each "ExpenseItem" I am giving it a prop of name and amount that is tied to the state */}

            {this.state.expenseArray.map((item,i)=>{
                    
                return <ExpenseItem 
                expenseName={item.expenseName}
                expenseAmount={item.expenseAmount}
                />

            })}
            </div>
        );
    }
}

export default ExpenseMain;