import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* METHOD THREE OF ADDING CONDITIONAL STATMENTS WHEN VIEWING DATA */
  // let expenseContent = (
  //   <h2 style={{ color: "white", textAlign: "center" }}>No expenses found</h2>
  // );

  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* METHOD ONE OF ADDING CONDITIONAL STATMENTS WHEN VIEWING DATA */}
      {/* {filteredExpenses.length === 0 && (
        <h2 style={{ color: "white", textAlign: "center" }}>
          No expenses found
        </h2>
      )}
      {filteredExpenses.length === 0 ? (
        <h2 style={{ color: "white", textAlign: "center" }}>
          No expenses found
        </h2>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* METHOD TWO OF ADDING CONDITIONAL STATMENTS WHEN VIEWING DATA */}
      {/* {filteredExpenses.length === 0 && (
        <h2 style={{ color: "white", textAlign: "center" }}>
          No expenses found
        </h2>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* METHOD THREE OF ADDING CONDITIONAL STATMENTS WHEN VIEWING DATA */}
      {/* {expenseContent} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
