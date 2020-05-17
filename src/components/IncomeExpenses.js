import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const positiveAmounts = transactions.filter(transaction => transaction.amount>0);
    const negativeAmounts = transactions.filter(transaction => transaction.amount<0);
    const positiveTotal = positiveAmounts.reduce((acc, item)=>(acc+item.amount),0);
    const negativeTotal = negativeAmounts.reduce((acc, item)=>(acc+item.amount),0);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
    <p className="money plus">+${positiveTotal}</p>
            </div>
            <div>
                <h4>Expense</h4>
    <p className="money minus">-${negativeTotal}</p>
            </div>
        </div>
    )
}
