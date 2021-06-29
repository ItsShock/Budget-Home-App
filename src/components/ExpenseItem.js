import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: "DELETE_EXPENSE",
            payload: props.id,
        })
    }

    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span className="fs-3">{props.name}</span>
            <div>
                <span class='badge bg-primary fs-5'>${props.cost}</span>
                <TiDelete className="ms-5" size='3.5em' onClick={handleDeleteExpense}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;