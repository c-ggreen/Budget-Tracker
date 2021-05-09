import React, { Component } from 'react';

class BalanceMain extends Component {
    constructor(){
        super()
        this.state={
            balance: '',
        }
        console.log(this.state.balance)
    }

    changeBalance = (input) =>{
      
        // Note: I put a goddamn equal sign here for setState which broke my code and I couldn't figure it out for the longest time fuck this fucking syntax I hate it.
        this.setState({
            balance: input
        })
    }


    render() {
        return (
            <div className="balanceMain">

                <input 
                        className="balanceInput"
                        type="number" 
                        placeholder="Enter Balance"
                        onChange={
                            (event)=>{
                                this.changeBalance(event.target.value)
                            }
                        }
                        value={this.state.balance}
                />


                <h1>Current Balance</h1>

                {/* The Total balance that is being called from the parent component "Main" via props */}
                <h1 className="balanceAmount">${this.state.balance}</h1>
            </div>
        );
    }
}

export default BalanceMain;