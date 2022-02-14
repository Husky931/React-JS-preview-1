import SearchBar from "material-ui-search-bar"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import ProjectDescription from "./ProjectDescription"

const MyProjects: React.FC = () => {
  return (
    <div className="w-full mt-10 px-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-end">
          <h1 className="text-white text-3xl font-bold">My projects: </h1>
          <div className="mt-5 flex lg:mt-0">
            <p className="text-white font-bold mx-1 inline-block cursor-pointer">All</p>
            <p className="text-white font-bold mx-1 underline inline-block cursor-pointer">Solo</p>
            <p className="text-white font-bold inline-block cursor-pointer">Team</p>
          </div>
        </div>
        <div className="flex items-center flex-col lg:flex-row lg:justify-center lg:items-center">
          <div className="flex mx-8">
            <p className="text-white font-bold">Sort By:</p>
            <p className="text-white font-bold ml-2">Date</p>
            <ArrowDropDownIcon className="text-white" />
          </div>
          <div>
            <SearchBar value="sd" className="w-56 h-[35px]  mt-5 lg:mt-0" />
          </div>
        </div>
      </div>
      <ol className="mt-10 text-white font-bold  text-xl">
        <ProjectDescription title="Fitness app" technology="React" lastUpdated="3 days ago" />
        <ProjectDescription title="Walking app" technology="Angular" lastUpdated="1 day ago" />
        <ProjectDescription title="Metaverse" technology="React" lastUpdated="3 weeks ago" />
        <ProjectDescription title="Longer title then usual" technology="React" lastUpdated="3 days ago" />
        <ProjectDescription title="Fitness app" technology="React" lastUpdated="3 days ago" />
        <ProjectDescription title="Fitness app" technology="React" lastUpdated="3 days ago" />
        <ProjectDescription title="Fitness app" technology="React" lastUpdated="3 days ago" />
      </ol>
    </div>
  )
}

export default MyProjects
