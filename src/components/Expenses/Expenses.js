import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
  );
};

export default Expenses;
