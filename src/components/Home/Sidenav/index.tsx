import Paper from "@mui/material/Paper"
import Button from "@mui/material/Button"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import Divider from "@mui/material/Divider"
import HomeIcon from "@mui/icons-material/Home"
import StickyNote2Icon from "@mui/icons-material/StickyNote2"
import SchoolIcon from "@mui/icons-material/School"
import ListItemButton from "@mui/material/ListItemButton"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"

const Sidenav: React.FC = () => {
  return (
    <div className="h-screen w-64 sticky top-0 flex flex-col justify-between bg-[#1f1e24] ">
      <div className="h-auto">
        <div className="p-3 pb-0  h-auto">
          <div className="mb-5">
            <img src="logo.png" className="w-auto h-auto my-auto" />
          </div>
          <Button variant="contained" startIcon={<AddCircleOutlineIcon />} className="w-full my-1 py-1 bg-[#6769e2] text-white rounded-md mt-3">
            NEW
          </Button>
          <ListItemButton className="my-1">
            <ListItemIcon className="text-white w-2">
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className="text-white" />
          </ListItemButton>
          <ListItemButton className="my-1">
            <ListItemIcon className="text-white">
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="My Projects" className="text-white" />
          </ListItemButton>
          <ListItemButton className="my-1">
            <ListItemIcon className="text-white">
              <StickyNote2Icon />
            </ListItemIcon>
            <ListItemText primary="Templates" className="text-white" />
          </ListItemButton>
          <ListItemButton className="my-1">
            <ListItemIcon className="text-white">
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Docs" className="text-white" />
          </ListItemButton>
        </div>
      </div>
      <ul className="p-3 mb-4">
        <li className="text-primary-p-color font-serif cursor-pointer">Blog</li>
        <li className="text-primary-p-color font-serif cursor-pointer">Docs</li>
        <li className="text-primary-p-color font-serif cursor-pointer">Discord</li>
      </ul>
    </div>
  )
}

export default Sidenav
