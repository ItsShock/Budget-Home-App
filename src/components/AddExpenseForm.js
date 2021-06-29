import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';


const AddExpenseForm = () => {
    const { dispatch } = useContext(AppContext)
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className='col-sm text-center'>
                    <label for='name'>Name</label>
                    <input 
                        required='required'
                        type='text'
                        className='form-control-lg'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </div>
                <div className='col-sm text-center'>
                    <label for='cost'>Cost</label>
                    <input 
                        required="required"
                        type='text'
                        className='form-control-lg'
                        id='cost'
                        value={cost}
                        onChange={(e) => setCost(e.target.value)}
                    ></input>
                </div>
                <div className='col-sm fs-4 d-flex align-items-end'>
                    <button type='submit' className='btn btn-primary btn-lg'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}

export default AddExpenseForm;