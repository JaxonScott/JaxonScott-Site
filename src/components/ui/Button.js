export default function Button({ children, icon: Icon }) {
  return (
    <button className=" text-lg bg-amber-300 px-3  text-slate-700 py-2 rounded-md text-center flex hover:bg-amber-400 hover:text-slate-800 transition">
      {children}
      {Icon && <Icon className="w-4 h-4 mt-2 ml-1" />}
    </button>
  )
}
