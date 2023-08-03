import React, { useContext } from 'react';
import { AppContext} from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const updateBudget = (val) => {
        const newBudget = val;
        if (newBudget < totalExpenses) {
            alert("Budget cannot be less than mount spent so far");
            return;
        } else if (newBudget > 20000) {
            alert("Budget cannot exceed £20,000");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}<input type="number" step="10" min={totalExpenses} max="20000" value={budget} onChange={(e) => updateBudget(e.target.value)}/></span>
        </div>
    );
};

export default Budget;