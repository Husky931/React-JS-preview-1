// import Navigation from "../../components/Navigation"
import TopRow from "./TopRow"
import FrameworksSection from "./FrameworksSection"
import StrongPoints from "./StrongPoints"
import EditorVideoPreview from "./EditorVideoPreview"
import BottomCTA from "./BottomCTA"
import Footer from "./Footer"

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="p-[6%] pt-4 page-wrapper">
        <TopRow />
        <FrameworksSection />
        <EditorVideoPreview />
        <StrongPoints />
        <BottomCTA />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default LandingPage
