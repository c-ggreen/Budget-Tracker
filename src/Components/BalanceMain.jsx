import React, { Component } from 'react';
import ExpenseMain from './ExpenseMain';

class BalanceMain extends Component {
    constructor(){
        super()
        this.state={
            balance: '',
        }
    }

    // The function responsible for altering the state of the balance.
    changeBalance = (event) =>{
        // Note: I put an equal sign here for setState which broke my code and I couldn't figure it out for the longest time.
        this.setState({
            balance: event.target.value
        })
    }

    // This function is used in the input fields so that when a user clicks on the field (focuses) it resets the value in the field, making it blank so the user doesn't have to manually delete the value.
    onFocus = () =>{
        this.setState({
            balance:''
        })
    }


    render() {
        return (
            <div className="balanceMain">
                <div className="balanceContent">
                    {/* The input field for the budget balance */}
                    <input 
                        className="balanceInput"
                        type="number" 
                        placeholder="Enter Balance"
                        onChange={this.changeBalance}
                        value={this.state.balance}

                        // makes it so that when user clicks on input field again it resets it to an empty input
                        onFocus={this.onFocus}
                    />


                    <h1>Budget</h1>

                    {/* The Total balance that is being called from the parent component "Main" via props */}
                    <h1 className="balanceAmount">${this.state.balance}</h1>
                </div>

                <ExpenseMain/>
            </div>
        );
    }
}

export default BalanceMain;