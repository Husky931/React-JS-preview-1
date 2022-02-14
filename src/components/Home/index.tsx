import Sidenav from "./Sidenav/index"
import Mid from "./Mid/index"

const Home: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidenav />
      <Mid />
    </div>
  )
}

export default Home
