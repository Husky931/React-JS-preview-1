import { AppBar, Toolbar, Button } from "@mui/material"
import { useEffect, useState } from "react"
import GitHubIcon from "@mui/icons-material/GitHub"
import { useUser } from "../state/useUser"

const Navigation: React.FC = () => {
  const [user, setUser] = useUser()
  const [navbarColor, setNavbarColor] = useState(user ? "#1f1e24" : "transparent")
  useEffect(() => {
    console.log(user)
    user === false &&
      window.addEventListener("scroll", () => {
        setNavbarColor(window.scrollY > 100 ? "#1f1e24" : "transparent")
      })
  }, [window.scrollY])
  return (
    <AppBar position="sticky" style={{ backgroundColor: navbarColor }} className="w-full">
      <Toolbar className="w-full flex justify-between bg-transparent">
        <div className="flex justify-start items-center">
          {!user && (
            <div className="w-32 mr-20 flex content-center justify-center">
              <img src="logo.png" className="w-auto h-auto my-auto" />
            </div>
          )}

          <Button className="text-white font-bold mx-1">Docs</Button>
          <Button className="text-white font-bold mx-1">Showcase</Button>
          <Button className="text-white font-bold mx-1">Community</Button>
        </div>
        <div>
          <Button variant="outlined" startIcon={<GitHubIcon />} className="text-white font-bold">
            SIGN IN
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
