import Image from "next/image"

export default function Card({ title, subTitle, image }) {
  return (
    <div className="flex flex-col rounded-md m-0 p-0 hover:cursor-pointer">
      <div className="mx-auto">
        <Image
          src={image}
          alt="image of something..."
          width={400}
         
          className='border object-contain border-zinc-700 rounded-xl'
        />
      </div>
      <div className="text-center">
        <h1 className="font-bold text-lg">{title}</h1>
      </div>
      <div className="text-center"><h2 className="text-md text-slate-400">{subTitle}</h2></div>
    </div>
  )
}
