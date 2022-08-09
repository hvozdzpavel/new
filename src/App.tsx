import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Auth from "./containers/Auth";
import Admin from "./containers/Admin";
import OperationsList from "./containers/OperationsList";
import User from "./containers/User";
import {Provider} from "react-redux";
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Auth />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="User" element={<User />} />
                        <Route path="OperationsList" element={<OperationsList/>} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;