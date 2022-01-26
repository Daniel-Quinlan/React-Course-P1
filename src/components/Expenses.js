import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.expensesNew[0].title}
        amount={props.expensesNew[0].amount}
        date={props.expensesNew[0].date}
      />
      <ExpenseItem
        title={props.expensesNew[1].title}
        amount={props.expensesNew[1].amount}
        date={props.expensesNew[1].date}
      />
      <ExpenseItem
        title={props.expensesNew[2].title}
        amount={props.expensesNew[2].amount}
        date={props.expensesNew[2].date}
      />
      <ExpenseItem
        title={props.expensesNew[3].title}
        amount={props.expensesNew[3].amount}
        date={props.expensesNew[3].date}
      />
    </div>
  );
}
export default Expenses;
