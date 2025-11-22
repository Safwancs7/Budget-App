export default function AddExpense({ addExpense }) {
  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(e.target)

    addExpense({
      title: data.get("title"),
      amount: Number(data.get("amount")),
      category: data.get("category"),
      date: data.get("date"),
    })

    e.target.reset()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 flex flex-col gap-4"
    >
      <h2 className="text-lg font-semibold">Add Expense</h2>

      <input name="title" placeholder="Expense name" className="input" required />
      <input name="amount" type="number" placeholder="Amount ₹" className="input" required />

      <select name="category" className="input">
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Bills</option>
        <option>Other</option>
      </select>

      <input name="date" type="date" className="input" required />

      <button className="bg-indigo-700 text-white py-2 rounded-xl hover:scale-105 transition">
        Add Expense
      </button>
    </form>
  )
}
