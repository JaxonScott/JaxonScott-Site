export default function Button({ children, icon: Icon }) {
  return (
    <button className=" text-lg bg-amber-300 px-3  text-slate-600 py-2 rounded-md text-center flex hover:bg-zinc-700 hover:text-amber-300 transition group">
      {children}
      {Icon && <Icon className="w-4 h-4 mt-1.5 ml-1" />}
    </button>
  )
}
