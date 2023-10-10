import React, { useState } from "react";
import './ExpensesForm.css'

const ExpensesForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate,  setEnteredDate] = useState('');

//    const [userInput, setUserInput] =  useState({
//         enteredTitle: '',
//         enteredAmount: '',
//         enteredDate: '',

//     });

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setEnteredTitle({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
        // setEnteredTitle((prevState) =>{
        //     return {...prevState, enteredTitle: event.target.value };
        // });
    }

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
        //console.log(event.target.value)
        // setEnteredAmount({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
        // setEnteredAmount((prevState) =>{
        //     return {...prevState, enteredAmount: event.target.value };
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // console.log(event.target.value);
        // setEnteredDate({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
        // setEnteredDate((prevState) =>{
        //     return {...prevState, enteredDate: event.target.value};
        // });
    }

    const inputChangeHandler = (identifier, event) =>{
        if(identifier === 'title'){
            setEnteredTitle(value);
        }
        else if(identifier === 'date'){
            setEnteredAmount(value);
        }else{
            setEnteredAmount(value);
        }
    }

    return(
    <form className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={(event) => inputChangeHandler('title' ,event.target.value)} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={(event) => inputChangeHandler('amount' ,event.target.value)}/>
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2020-01-01" max="2024-01-01" onChange={(event) => inputChangeHandler('date' ,event.target.value)}/>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>
    </form>
    );
}

export default ExpensesForm;