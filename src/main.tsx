import ReactDOM from "react-dom"
import "./App.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline"

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
