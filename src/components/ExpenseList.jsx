import { Trash2 } from "lucide-react"

export default function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {expenses.map((e, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{e.title}</p>
            <p className="text-sm text-gray-500">{e.category}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="font-bold text-indigo-700">₹{e.amount}</p>

            <button
              onClick={() => deleteExpense(index)}
              className="text-red-500 hover:scale-110 transition"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
