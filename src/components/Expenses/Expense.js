import React, { useState } from "react";
import "./Expense.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expense = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  //const [allExpenseItems, setallExpenseItems] = useState(props.items);
  const filteredAllExpenseItems = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);
  const storeFilterDate = (data) => {
    setfilteredYear(data);
    //setallExpenseItems(filteredAllExpenseItems);
    console.log(data);
  };
  
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onDateSelect={storeFilterDate} />
        <ExpensesChart expenses = {filteredAllExpenseItems}/>
        <ExpensesList items = {filteredAllExpenseItems}/>
      </Card>
    </div>
  );
};

export default Expense;
