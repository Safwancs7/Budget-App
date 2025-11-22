import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts"

// Only ONE color palette (keep app clean)
const COLORS = ["#4F46E5", "#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE"]

export default function CategoryChart({ expenses }) {

  // Group expenses by category
  const categoryData = expenses.reduce((acc, curr) => {
    const found = acc.find((item) => item.name === curr.category)

    if (found) {
      found.value += Number(curr.amount)
    } else {
      acc.push({ name: curr.category, value: Number(curr.amount) })
    }

    return acc
  }, [])

  if (categoryData.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow">
        <p className="text-gray-500 text-sm">No data for chart</p>
      </div>
    )
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow mt-6 h-64">
      <p className="text-center font-semibold mb-2">Spending by Category</p>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={categoryData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            label
          >
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
