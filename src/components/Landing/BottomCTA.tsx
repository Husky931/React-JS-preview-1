import { Button } from "@mui/material"

const BottomCTA = () => {
  return (
    <div className="flex justify-center flex-col items-center mt-24 mb-5">
      <h1 className="text-white text-6xl font-bold mb-5">Code Directly</h1>
      <h1 className="text-white text-6xl font-bold">In Your Browser</h1>
      <Button className="bg-[#6769e2] shadow-main text-white whitespace-nowrap mx-auto mt-14 font-bold w-[400px] py-6 text-lg" size="large">
        OPEN EDITOR
      </Button>
    </div>
  )
}

export default BottomCTA
