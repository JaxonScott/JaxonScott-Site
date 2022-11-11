import Image from "next/image"

export default function Card({ title, subTitle, image }) {
  return (
    <div className="flex flex-col text-center hover:bg-slate-600 hover:bg-opacity-20  w-80" >
      <div className="mx-auto ">
        <Image
          src={image}
          alt="image of something"
          width={300}
          height={250}
          className='rounded-lg border-2 border-zinc-700'
          
        />
      </div>
      <div className=" mx-auto">
        <div className="font-bold text-xl">{title}</div>
        <div className="text-slate-400">{subTitle}</div>
      </div>
    </div>
  )
}
