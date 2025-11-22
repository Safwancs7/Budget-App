import { Wallet } from "lucide-react"

export default function Navbar() {
  return (
    <div className="w-full backdrop-blur-md bg-white/70 shadow-sm py-4 px-8 flex justify-between items-center">
      <div className="flex items-center gap-2 text-xl font-bold">
        <Wallet className="text-indigo-700" />
        PennyPilot
      </div>

      <p className="text-gray-500 text-sm">Track. Save. Win.</p>
    </div>
  )
}
