import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import Expense from './components/Expense';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import { AppProvider } from './context/AppContext';
import './App.css';

const App = () => {
  return(
    <AppProvider>
      <div className='mt-4 ms-4 me-4 border border-5 rounded p-5 border border-secondary'>
      <div className='container'>
        <h1 className='text-center mt-2 mb-5 fs-1'>Home Budget App</h1>
        <div className='row mt-3'>
          <div className='col-sm fs-4'>
            <Budget />
          </div>
          <div className='col-sm fs-4'>
            <Remaining />
          </div>
          <div className='col-sm fs-4'>
            <Expense />
          </div>
        </div>
        <h3 className='mt-3 text-center fs-1'>Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3 text-center fs-1'>Add Expense</h3>
        <div className="mt-3 fs-4">
          <div className='col-sm d-flex justify-content-center'>
            <AddExpenseForm />
          </div>
        </div>
      </div>
      </div>
    </AppProvider>
  );
}

export default App;