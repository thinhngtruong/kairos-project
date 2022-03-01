import {ROUTES} from "config";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                {ROUTES.map((route) => (
                    <Route
                        key={route.name}
                        path={route.path}
                        element={route.component}
                    />
                ))}
            </Routes>
        </Router>
    );
}

export default App;
