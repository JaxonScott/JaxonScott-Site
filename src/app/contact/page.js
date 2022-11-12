import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"
import SocailButton from "../../components/ui/SocailButton"

export default function ContactPage() {
  return (
    <div className=" container mx-auto lg:w-1/3 md:w-auto sm:w-full  mt-8">
      <div className="flex flex-col">
        <div>
          <p className="text-slate-300">
            You can set up a{" "}
            <span className="text-amber-300 ">consultation</span> here or{" "}
            <span className="text-amber-300">email</span> me at
            jaxon.scott137@gmail.com
          </p>
        </div>
      </div>
      <div>
        <div className="mt-4">
          <h1 className="font-bold text-2xl decoration-4 decoration-amber-300 underline">
            Socails
          </h1>
        </div>
        <div className="flex flex-col text-lg space-y-1 text-amber-300 mt-2">
          <div className="space-y-1">
            <SocailButton label="JaxonScott" icon={AiFillGithub} />
            <SocailButton label="Jaxoncodes" icon={AiFillInstagram} />
            <SocailButton label="Jaxoncodes" icon={AiOutlineTwitter} />
          </div>
        </div>
      </div>
    </div>
  )
}
