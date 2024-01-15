import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage"
import LoginPage from "./pages/loginPage"
import ProfilePage from "./pages/loginPage"
import { useMemo } from "react"
import { useSelector } from "react-redux/"
import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { themeSettings } from "./theme"

function App() {

  //grabbing the mode from state
  const mode = useSelector((state) => state.mode)
  //only rerenders the theme when mode state is changed
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div >
  );
}

export default App;
