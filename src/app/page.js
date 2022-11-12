import Link from "next/link"
import Button from "../components/ui/Button"
import { FiChevronRight } from "react-icons/fi"
export default function IndexPage() {
  return (
    <div className="container sm:px-4 mx-auto md:w-5/8 lg:w-1/3">
      <div className="flex flex-col justify-center space-y-4">
        <div>
          <div className="bg-zinc-600 bg-opacity-50 py-4 rounded-lg text-center font-semibold text-lg">
            Hi 👋 , im a full stack developer from Canada!
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl">
            Jaxon Scott <br />{" "}
            <span className="font-normal text-">Developer / Photographer</span>{" "}
          </h1>
        </div>
      </div>
      <div className="mt-8">
        <div>
          <h1 className="font-semibold underline  decoration-4 decoration-amber-300 text-xl">
            Development
          </h1>
        </div>
        <div>
          <p className="indent-4 mt-1 text-slate-300">
            Hey, I'm Jaxon. I'm a full-stack developer based out of Ontario,
            Canada. My passion has always been with all things technology, which
            naturally led me into the world of software and writing code. I
            enjoy building projects that solve real-world problems for myself
            and others, as well as helping businesses by building their dream
            sites and software. On top of my passion for code, I also love cars.
            Which got me into automotive{" "}
            <span className="text-amber-300">photography</span>. I thoroughly
            enjoy being able to capture the cars that we all dream of one day
            owning. You can see some of my projects and photo work here:{" "}
            <span className="text-amber-300">Portfolio</span>
          </p>
        </div>
      </div>
      <Link href="/portfolio">
        <div className="flex justify-center mt-4">
          <Button icon={FiChevronRight}>Portfolio</Button>
        </div>
      </Link>
    </div>
  )
}
