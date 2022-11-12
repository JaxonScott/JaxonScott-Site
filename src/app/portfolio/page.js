import Card from "../../components/ui/Card"
import Github from "../../../public/github.png"

export default function PortfolioPage() {
  return (
    <div className="container mx-auto  w-full md:w-2/3 lg:w-1/2 ">
      <div className="mb-10 mt-8 flex flex-col space-y-1">
        <div>
          <p className="indent-4 text-slate-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            asperiores atque <span className="text-amber-300">github</span>{" "}
            architecto fugiat aspernatur velit dicta, quae, accusantium
            exercitationem repudiandae animi omnis? Laboriosam vel autem nostrum
            odio! Dolorum, velit. Lorem ipsum dolor sit, amet.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
        <div>
          <Card
            image={Github}
            title="A portfolio card"
            subTitle="subtitle "
          />
        </div>
        <div>
          <Card
            image={Github}
            title="A portfolio card"
            subTitle="subtitle "
          />
        </div>
        <div>
          <Card
            image={Github}
            title="A portfolio card"
            subTitle="subtitle "
          />
        </div>
      </div>
    </div>
  )
}
