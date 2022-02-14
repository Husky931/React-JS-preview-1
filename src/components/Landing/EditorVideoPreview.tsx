const EditorVideoPreview: React.FC = () => {
  return (
    <>
      <video className="w-[90%] mx-auto mt-32" style={{ boxShadow: "0 0 0 4px #aeddff1a" }} muted playsInline autoPlay loop>
        <source src="video_preview.mp4" type="video/mp4" />
        Sorry, your browser doesn't support this videos.
      </video>
    </>
  )
}

export default EditorVideoPreview
