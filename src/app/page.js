import Button from "../components/ui/Button"
import { ArrowNarrowRightIcon } from "@heroicons/react/outline"
export default function IndexPage() {
  return (
    <div className="container mx-auto lg:w-1/3 md:w-auto sm:w-full min-h-screen mt-8 ">
      <div className="flex flex-col justify-center space-y-4">
        <div>
          <div className="bg-zinc-600  py-4 rounded-lg text-center font-semibold text-lg">
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
          <h1 className="font-semibold underline  decoration-4 decoration-zinc-600 text-xl">
            Development
          </h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            beatae eius dicta corrupti sunt temporibus cupiditate? Corrupti,
            natus distinctio quia sapiente quaerat culpa magnam modi ab maxime!
            Necessitatibus, quae esse! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Ex modi quasi odio hic reiciendis dolores
            architecto esse quod pariatur fugiat soluta atque excepturi in
            assumenda, odit qui voluptatibus cumque obcaecati?
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Button icon={ArrowNarrowRightIcon}>Portfolio</Button>
      </div>
    </div>
  )
}
