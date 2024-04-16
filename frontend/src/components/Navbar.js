import React, { useEffect } from "react";
import {
  BiSearchAlt2,
  BiSolidBell,
  BiSolidBox,
  BiSolidHome,
  BiSolidLocationPlus,
  BiSolidMessageRoundedDetail,
} from "react-icons/bi";
import { AiFillAlert } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUser } from "../store/actions/user.action";
import { logout } from "../store/slices/user.slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (
      sessionStorage.getItem("Authorization") &&
      sessionStorage.getItem("userId")
    ) {
      if (!user.isLogin) {
        dispatch(getUser(sessionStorage.getItem("userId")));
      }
    }

    // console.log("is Logged in", user);

    // if (!sessionStorage.getItem("Authorization")) {
    //   navigate("/login");
    // }
  }, [dispatch, user.isLogin, navigate]);

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1 className="logo">FitZtyle</h1>
          <p className="logo--icon">Your Fitness Journal</p>
        </Link>
        <div className="content--header">
          <div className="header--activity">
            <div className="search-box">
              <input type="text" placeholder="Search anything here.." />
              <BiSearchAlt2 className="icon1" />
            </div>
            <div className="home">
              <BiSolidHome className="icon" />
            </div>
            <div className="recipe">
              <Link to="/recipe">
              <AiFillAlert  className="icon" />
              </Link>
            </div>
            <div className="message">
              <BiSolidMessageRoundedDetail className="icon" />
            </div>
            <div className="location">
              <BiSolidLocationPlus className="icon" />
            </div>
            <div className="search-jobbox">
              <BiSolidBox className="icon" />
            </div>
            <div className="notify">
              <BiSolidBell className="icon" />
            </div>
          </div>
        </div>
        <nav>
          {user.isLogin && (
            <div>
              <Link to="/profile">{user?.user?.username} - Profile</Link>
              <button
                onClick={() => {
                  dispatch(logout());
                }}
              >
                LOGOUT
              </button>
            </div>
          )}
          {!user.isLogin && (
            <div>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
