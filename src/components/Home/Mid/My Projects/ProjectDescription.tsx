import MoreVertIcon from "@mui/icons-material/MoreVert"

const ProjectDescription: React.FC = ({ title, technology, lastUpdated }) => {
  return (
    <>
      <li className="text-white w-full flex flex-row justify-between mb-10 border-b-2 border-[#1b2333]">
        <div className="flex items-center w-1/2">
          <img src="react-2.png" className="w-10 h-10" />
          <p>{title}</p>
        </div>

        <p className="flex items-center flex-1">{technology}</p>
        <p className="flex items-center flex-1">{lastUpdated}</p>
        <div className="cursor-pointer flex justify-center items-center">
          <MoreVertIcon />
        </div>
      </li>
    </>
  )
}

export default ProjectDescription
