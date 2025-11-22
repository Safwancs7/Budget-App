import { useState, useEffect } from "react"
import AddExpense from "../components/AddExpense"
import ExpenseList from "../components/ExpenseList"
import CategoryChart from "../components/CategoryChart"

export default function Dashboard() {

  // Load expenses from localStorage on first render
  const [expenses, setExpenses] = useState(() => {
    const stored = localStorage.getItem("expenses")
    return stored ? JSON.parse(stored) : []
  })

  // Monthly budget
  const [budget, setBudget] = useState(10000)

  // Save expenses to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  // Add new expense
  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev])
  }

  // Delete expense
  const deleteExpense = (index) => {
    setExpenses((prev) => prev.filter((_, i) => i !== index))
  }

  // Calculate total
  const total = expenses.reduce((acc, e) => acc + Number(e.amount), 0)

  return (
    <>
      <p className="text-center mt-4 text-sm text-gray-500">
        “Control money or it will control you.”
      </p>

      {/* Total Spent Card */}
      <div className="flex justify-center mt-4">
        <div className="bg-white shadow px-6 py-4 rounded-xl text-center">
          <p className="text-sm text-gray-500">Total Spent</p>
          <h2 className="text-2xl font-bold text-indigo-700">
            ₹ {total}
          </h2>
        </div>
      </div>

      {/* Monthly Budget Section */}
      <div className="max-w-md mx-auto mt-6 bg-white p-4 rounded-xl shadow">
        <p className="text-sm text-gray-500 mb-1">Monthly Budget</p>

        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          className="input w-full mb-3"
        />

        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
          <div
            className={`h-4 rounded-full ${total > budget ? "bg-red-500" : "bg-indigo-600"}`}
            style={{ width: `${Math.min((total / budget) * 100, 100)}%` }}
          ></div>
        </div>

        <p className="text-xs mt-2 text-right text-gray-500">
          {total} / {budget}
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid md:grid-cols-3 gap-6 p-8">

        {/* Add Expense */}
        <AddExpense addExpense={addExpense} />

        {/* Expense List + Chart */}
        <div className="md:col-span-2">
          <ExpenseList
            expenses={expenses}
            deleteExpense={deleteExpense}
          />

          <CategoryChart expenses={expenses} />
        </div>

      </div>
    </>
  )
}
