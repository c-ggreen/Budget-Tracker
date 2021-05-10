import React, { Component } from 'react';
import ExpenseItem from './ExpenseItem';


class ExpenseMain extends Component {
    constructor(props){
        super(props)
        this.state={
            expenseName: '',
            expenseAmount: '',
            expenseArray:[],
            totalExpense: 0
        }
    }

    // The function responsible for altering the state of the expenseName
    changeName = (event) =>{
        this.setState({
            expenseName: event.target.value
        })
    }

    // The function responsible for altering the state of the expenseAmount
    changeAmount = (event) =>{
        this.setState({
            expenseAmount: event.target.value
        })
    }

    // The function responsible for adding the inputs to an empty array in the form of an object so that they can be later mapped to the DOM
    addExpense = () =>{
        // Creating a new variable that is equal to the empty array in this.state
        let newArray = this.state.expenseArray
        
        // Creating an object that sets the expenseName and expenseAmount equal to the current values in this.state
        const expenseObject ={
            expenseName: this.state.expenseName,
            // Makes the entered value an integer instead of a string, this is needed when accessing the totalExpense function later on so that it will treat it as a number and add up instead of a string and concatenate. Ex. "5+3" is 8, instead of "53".
            expenseAmount: parseInt(this.state.expenseAmount)
        }

        // Pushing the object with the current values into the the newArray variable
        newArray.push(expenseObject)

        // Setting the state of the original array in this.state to the newArray that now holds the updated values
        this.setState({
            expenseArray: newArray,
        })

        // Calling the totalExpense function inside the addExpense function so that it fires whenever the Add Button is clicked
        this.totalExpense()
    }

    // The function responsible for adding up all the expenseAmount values
    totalExpense = () =>{

        let expenseArray = this.state.expenseArray
        
        let total = expenseArray.reduce((acc,cValue) => acc + cValue.expenseAmount, 0)

        this.setState({
            totalExpense: parseInt(total)
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
            <div className="expenseMain" >
                <h1>Total Expenses: <span className="totalExpense">${this.state.totalExpense}</span></h1>

            {/* The input field for the Expense Name */}
            <input 
                className="balanceInput"
                type="text" 
                placeholder="Expense Name"
                onChange={this.changeName}
                value={this.state.expenseName}

                // makes it so that when user clicks on input field again it resets it to an empty input
                onFocus={this.onFocusName}
            />

            {/* The input field for the Expense Amount */}
            <input 
                className="balanceInput"
                type="number" 
                placeholder="Expense Amount"
                onChange={this.changeAmount}
                value={this.state.expenseAmount}

                // makes it so that when user clicks on input field again it resets it to an empty input
                onFocus={this.onFocusAmount}
            />

            {/* The button that carries out the addExpense function that adds the new expense object to the array, which in turn renders it onto the DOM */}
            <button onClick={()=>{this.addExpense()}}>Add Expense</button>

            {/* I am rendering an "ExpenseItem" component by adding an item to an empty array. For each "ExpenseItem" I am giving it a prop of name and amount that is tied to the state */}
            {this.state.expenseArray.map((item,i)=>{
                    
                return <ExpenseItem key={i}
                expenseName={item.expenseName}
                expenseAmount={item.expenseAmount}
                />

            })}
            </div>
        );
    }
}

export default ExpenseMain;