import CardMedia from "@mui/material/CardMedia"
import Box from "@mui/material/Box"

const TemplateCard: React.FC = ({ title, img }) => {
  return (
    <Box
      className="bg-[#1f1e24] border-[#4e5569] border-[1px] w-[480px] mx-auto p-4 lg:max-w-[352px] lg:mx-2 cursor-pointer"
      sx={{ boxShadow: 3, borderRadius: 2, marginBottom: "15px" }}
    >
      <div className="flex flex-row justify-between items-center mb-3">
        <h1 className="text-white text-5xl font-bold my-2">{title}</h1>
        <div className="w-auto h-auto bg-[#2b3245] rounded-md">
          <CardMedia component="img" image={img} alt="react icon" className="w-20 h-20" />
        </div>
      </div>

      <p className="text-primary-p-color text-lg font-semibold my-2">
        React is a free and open-source front-end JavaScript library for building user interfaces
      </p>
    </Box>
  )
}

export default TemplateCard
