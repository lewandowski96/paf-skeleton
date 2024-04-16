import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./styles/navbar.css";
import Recipe from "./pages/Recipe";
import "./styles/recipe.css";
import BreakfastPage from "./components/BreakfastPage";
import DinnerPage from "./components/DinnerPage";
import LunchPage from "./components/LunchPage";
import HealthyDinks from "./components/HealthyDinks";
import FreshfruitPage from "./components/FreshfruitPage";
import Diettips from "./components/Diettips";
import "./styles/breakfast.css";

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
            <Route
              path="/recipe"
              element={user ? <Recipe/> : <Navigate to="/recipe" />}  
            />
            <Route path="/breakfast" 
            element={user ? <BreakfastPage/> : <Navigate to="/breckfast" />}/>
            <Route path="/lunch" 
            element={user ? <LunchPage/> : <Navigate to="/lunch" />}/>
            <Route path="/dinner" 
            element={user ? <DinnerPage/> : <Navigate to="/dinner" />}/>
            <Route path="/healthydrinks" 
            element={user ? <HealthyDinks/> : <Navigate to="/healthydrinks" />}/>
            <Route path="/freshfruits" 
            element={user ? <FreshfruitPage/> : <Navigate to="/freshfruits" />}/>
            <Route path="/diettips" 
            element={user ? <Diettips/> : <Navigate to="/diettips" />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
