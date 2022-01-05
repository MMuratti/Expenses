import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

function Expenses(props) {

  return (
    <div>
      <ExpenseItem
        title={props.expensesItem[0].title}
        amount={props.expensesItem[0].amount}
        date={props.expensesItem[0].date}
      />
      <ExpenseItem
        title={props.expensesItem[1].title}
        amount={props.expensesItem[1].amount}
        date={props.expensesItem[1].date}
      />
      <ExpenseItem
        title={props.expensesItem[2].title}
        amount={props.expensesItem[2].amount}
        date={props.expensesItem[2].date}
      />
      <ExpenseItem
        title={props.expensesItem[3].title}
        amount={props.expensesItem[3].amount}
        date={props.expensesItem[3].date}
      />
    </div>
  );
}
export default Expenses;
