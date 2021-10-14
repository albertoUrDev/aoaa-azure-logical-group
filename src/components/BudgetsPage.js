import React from 'react';
import BudgetsList from './BudgetsList';
  
const BudgetsPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        //alignItems: 'Right',
        //height: '100vh'
      }}
    >
      <h1>Budget Groups</h1>
      <BudgetsList/>
    </div>
  );
};
  
export default BudgetsPage;