import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, newFilteredYear] = useState("2020");

  const filterHandler = (year) => {
    newFilteredYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onAddFilter={filterHandler} />
        <ExpenseItem
          title={props.zeExpenses[0].title}
          amount={props.zeExpenses[0].amount}
          date={props.zeExpenses[0].date}
        />
        <ExpenseItem
          title={props.zeExpenses[1].title}
          amount={props.zeExpenses[1].amount}
          date={props.zeExpenses[1].date}
        />
        <ExpenseItem
          title={props.zeExpenses[2].title}
          amount={props.zeExpenses[2].amount}
          date={props.zeExpenses[2].date}
        />
        <ExpenseItem
          title={props.zeExpenses[3].title}
          amount={props.zeExpenses[3].amount}
          date={props.zeExpenses[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
