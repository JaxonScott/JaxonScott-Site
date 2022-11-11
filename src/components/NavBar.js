import Link from "next/link"
import { CodeIcon } from "@heroicons/react/outline"
import { AiFillGithub } from "react-icons/ai"
export default function NavBar() {
  return (
    <div className=" flex p-5 bg-opacity-50  px-auto backdrop-blur-md sticky top-0 h-full ">
      <div className="flex space-x-4 mx-auto">
        <Link href="/">
          <div className="font-bold text-lg flex group">Jaxon Scott</div>
        </Link>
        <Link href="/contact">
          <div className="hover:bg-zinc-500 hover:bg-opacity-10 px-2 rounded-md transition">
            Contact
          </div>
        </Link>
        <a href="https://github.com/JaxonScott" target="_blank">
          <div className="hover:bg-zinc-500 hover:bg-opacity-10 px-2 rounded-md transition flex">
            Code
            <span className="mt-1 ml-1 text-md">
              <AiFillGithub />
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}
