import React from "react"
import SearchIcon from "@mui/icons-material/Search"
import PostAddIcon from "@mui/icons-material/PostAdd"
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder"
import CachedIcon from "@mui/icons-material/Cached"
import SignalWifiConnectedNoInternet4Icon from "@mui/icons-material/SignalWifiConnectedNoInternet4"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"

const StrongPoints: React.FC = () => {
  return (
    <div className="w-full mx-auto mt-24">
      <h1 className="font-bold text-6xl text-gradient-3 bg-image-linear text-center my-8">Your local IDE in the cloud</h1>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-x-20 gap-y-8">
        <div className="flex flex-col align-center justify-center">
          <SearchIcon sx={{ color: "#feb453", width: "37.5px", height: "37.5px", marginBottom: "12px" }} />
          <h2 className="text-white text-xl mb-2 font-semibold">Intellisense, Project Search</h2>
          <p className="text-primary-p-color text-base font-normal">Go to Definitions, and other Visual Studio Code features just work.</p>
        </div>
        <div className="flex flex-col align-center justify-center">
          <PostAddIcon sx={{ color: "#fd5a70", width: "37.5px", height: "37.5px", marginBottom: "12px" }} />
          <h2 className="text-white text-xl mb-2 font-semibold">Import NPM packages</h2>
          <p className="text-primary-p-color text-base font-normal">Import any NPM package into your project quicker than on local.</p>
        </div>
        <div className="flex flex-col align-center justify-center">
          <CreateNewFolderIcon sx={{ color: "#69345f", width: "37.5px", height: "37.5px", marginBottom: "12px" }} />
          <h2 className="text-white text-xl mb-2 font-semibold">Import existing files & folders</h2>
          <p className="text-primary-p-color text-base font-normal">
            Drag & Drop files and folders into the editor. No more copy + pasting, uploading, or git commands.
          </p>
        </div>
        <div className="flex flex-col align-center justify-center">
          <CachedIcon sx={{ color: "#fe7c66", width: "37.5px", height: "37.5px", marginBottom: "12px" }} />
          <h2 className="text-white text-xl mb-2 font-semibold">Hot reloading as you type</h2>
          <p className="text-primary-p-color text-base font-normal">Tweak your app in real time without page reloads while preserving your app state.</p>
        </div>
        <div className="flex flex-col align-center justify-center">
          <SignalWifiConnectedNoInternet4Icon sx={{ color: "#fd007f", width: "37.5px", height: "37.5px", marginBottom: "12px" }} />
          <h2 className="text-white text-xl mb-2 font-semibold">Keep editing while offline</h2>
          <p className="text-primary-p-color text-base font-normal">Thanks to our revolutionary in-browser dev server.</p>
        </div>
        <div className="flex flex-col align-center justify-center">
          <CloudUploadIcon sx={{ color: "#f600a4", width: "37.5px", height: "37.5px", marginBottom: "12px" }} />
          <h2 className="text-white text-xl mb-2 font-semibold">Hosted app URL</h2>
          <p className="text-primary-p-color text-base font-normal">Go to Definitions, and other Visual Studio Code features just work.</p>
        </div>
      </div>
    </div>
  )
}

export default StrongPoints
