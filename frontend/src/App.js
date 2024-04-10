import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/navbar.css";

function App() {
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="body">
          <Routes>
            <Route
              path="/"
              element={user.isLogin ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/signup"
              element={!user.isLogin ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/login"
              element={!user.isLogin ? <Login /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
