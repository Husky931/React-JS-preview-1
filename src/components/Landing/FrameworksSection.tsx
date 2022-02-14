import { useWindowSize } from "@lincode/hooks"

const FrameworksSection: React.FC = () => {
  const [windowWidth] = useWindowSize()

  return (
    <div className="w-full mx-auto mt-24 flex flex-col justify-center content-center">
      <div className="w-auto">
        <h1 className="text-left text-white text-xl font-bold m-2 underline">One click and develop</h1>
      </div>
      <ul className="w-full flex flex-wrap items-start my-2.5">
        <li className="m-2 hover:bg-[#6769e2] hover:shadow-main" style={{ width: windowWidth < 1024 ? "30%" : "23%", boxShadow: "0 0 0 2px #aeddff1a" }}>
          <a href="#" className="p-3 flex items-stretch">
            <img src="react-2.png" className="w-14" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-white font-semibold text-sm">React</div>
              <div className="text-primary-p-color font-semibold text-xs">Typescriot</div>
            </div>
          </a>
        </li>
        <li className="m-2 hover:bg-[#6769e2] hover:shadow-main" style={{ width: windowWidth < 1024 ? "30%" : "23%", boxShadow: "0 0 0 2px #aeddff1a" }}>
          <a href="#" className="p-3 flex items-stretch">
            <img src="react-2.png" className="w-14" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-white font-semibold text-sm">Vue</div>
              <div className="text-primary-p-color font-semibold text-xs">Javascript</div>
            </div>
          </a>
        </li>
        <li className="m-2 hover:bg-[#6769e2] hover:shadow-main" style={{ width: windowWidth < 1024 ? "30%" : "23%", boxShadow: "0 0 0 2px #aeddff1a" }}>
          <a href="#" className="p-3 flex items-stretch">
            <img src="react-2.png" className="w-14" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-white font-semibold text-sm">Svelte</div>
              <div className="text-primary-p-color font-semibold text-xs">JS/TS</div>
            </div>
          </a>
        </li>
        <li className="m-2 hover:bg-[#6769e2] hover:shadow-main" style={{ width: windowWidth < 1024 ? "30%" : "23%", boxShadow: "0 0 0 2px #aeddff1a" }}>
          <a href="#" className="p-3 flex items-stretch">
            <img src="react-2.png" className="w-14" />
            <div className="flex flex-col justify-center items-start">
              <div className="text-white font-semibold text-sm">NEXT.JS</div>
              <div className="text-primary-p-color font-semibold text-xs">NODE.JS</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default FrameworksSection
