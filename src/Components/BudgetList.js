import React from 'react';

import classes from './BudgetList.module.css';

const BudgetList = ({onRemoveBudgetClick,BudgetDetails}) => {
	return(
		<div className={classes.budgetItem}>
			<span className={classes.budgetTitle}>{BudgetDetails.name}</span>
			<span className={classes.budgetAmount}>${BudgetDetails.amount}</span>
			<button onClick={() => onRemoveBudgetClick(BudgetDetails.id, BudgetDetails.amount)} className={classes.closeBtn}>X</button>
		</div>
	)
};

export default BudgetList;