export default function SocailButton({ label, icon: Icon }) {
  return (
    <button className="flex bg-transparent text-amber-300 text-lg rounded-lg font-semibold hover:bg-zinc-700 w-auto px-1.5 py-1.5 hover:bg-opacity-25">
      <span className="mt-1 mr-1 text-xl">
        <Icon />
      </span>
      {label}
    </button>
  )
}
