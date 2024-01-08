import { Route, Routes } from "react-router-dom"
import { ComboCreate } from "./pages/ComboCreate" 
import { Dashboard } from "./pages/Dashboard"
import { CreateAccount } from "./pages/CreateAccount" 
import { LogIn } from "./pages/LogIn" 
import MainPage from "./pages/MainPage"

function App() {
    return (

        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/create-combo" element={<ComboCreate />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/CreateAccount" element={<CreateAccount />} />
            <Route path="/LogIn" element={<LogIn />} />
        </Routes>
    )
}

export default App
