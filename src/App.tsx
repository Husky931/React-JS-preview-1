import Navigation from "./components/Navigation"
import LandingPage from "./components/Landing"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/index"
import { useUser } from "./state/useUser"

const App: React.FC = () => {
  const [user, setUser] = useUser()
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <>
                <Home />
              </>
            ) : (
              <>
                <Navigation />
                <LandingPage />
              </>
            )
          }
        />
      </Routes>
    </>
  )
}

export default App
