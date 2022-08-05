import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Auth from "./containers/Auth";
import Admin from "./containers/Admin";
import OperationsList from "./containers/OperationsList";
import User from "./containers/User";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Auth />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="User" element={<User />} />
                    <Route path="OperationsList" element={<OperationsList/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;