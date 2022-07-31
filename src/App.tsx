import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Auth from "./containers/Auth";
import Admin from "./containers/Admin";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;