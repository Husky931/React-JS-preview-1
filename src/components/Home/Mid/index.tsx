import Title from "./Title"
import TemplateCard from "./TemplateCard"
import MyProjects from "./My Projects"
import Navigation from "../../Navigation"

const Mid: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#16151a] max-w-[1350px] xl:mx-auto ">
      <Navigation />
      <Title />
      <div className="w-full flex flex-col lg:flex-row lg:justify-center mt-10 px-4">
        <TemplateCard title="React" img="react-2.png" />
        <TemplateCard title="Vue" img="vue-2.png" />
        <TemplateCard title="Svelte" img="svelte-2.png" />
      </div>
      <MyProjects />
    </div>
  )
}

export default Mid
