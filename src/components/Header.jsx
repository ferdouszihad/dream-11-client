import { NavLink } from "react-router-dom";
import {
  HiBars3BottomRight,
  HiBarsArrowUp,
  HiSun,
  HiMoon,
} from "react-icons/hi2";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { ThemeContext } from "../contexts/ThemeProvider";

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, lightMode, theme, setTheme } = useContext(ThemeContext);

  const menu = (
    <ul className="flex gap-2 flex-col w- full lg:flex-row lg:gap-5">
      <div>
        {theme == "light" && (
          <div onClick={darkMode} className="bg-stone-100 p-3">
            <HiMoon></HiMoon>
          </div>
        )}
        {theme == "dark" && (
          <div onClick={lightMode} className="bg-stone-100 p-3">
            <HiSun></HiSun>
          </div>
        )}
      </div>
      <li>
        <NavLink onClick={() => setIsMenu(false)} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink onClick={() => setIsMenu(false)} to="/my-dream-11">
          My Dream 11
        </NavLink>
      </li>

      <li>
        <NavLink onClick={() => setIsMenu(false)} to="/add-player">
          Add Player
        </NavLink>
      </li>

      {!user && (
        <li>
          <NavLink onClick={() => setIsMenu(false)} to="/login">
            Login
          </NavLink>
        </li>
      )}
    </ul>
  );

  const profile = (
    <div className="flex items-center gap-2">
      <div className="bg-stone-300 p-2 rounded-lg shadow">
        {user?.credit} 🪙
      </div>
      <div
        className="tooltip tooltip-left tooltip-accent"
        data-tip={`HEllo 😎${user?.displayName}`}
      >
        {" "}
        {user?.photoURL && (
          <img
            src={user?.photoURL}
            alt=""
            className=" max-w-[40px] border bg-opacity-75  border-green-400 p-[2px] rounded-full"
          />
        )}
      </div>

      <button onClick={logOut} className="btn btn-accent btn-sm text-white">
        Log Out
      </button>
    </div>
  );

  return (
    <div className=" ">
      <div className="w-11/12 relative  mx-auto py-5 flex items-center justify-between">
        {/* logo  */}
        <div className="logo inline-flex items-center gap-2">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="hidden lg:block">🏏DREAM11</span>
          </h2>
        </div>
        <div className=" hidden lg:block ">{menu}</div>
        {user && user?.email && <div className="">{profile}</div>}

        <div
          className={`lg:hidden z-50 animate__animated ${
            isMenu
              ? "animate__fadeInUp"
              : isClicked
              ? "animate__fadeOutUp"
              : "hidden"
          }   absolute w-11/12 top-full  backdrop-blur`}
        >
          <div className="menu-sm">{menu}</div>
        </div>

        <div className="lg:hidden">
          {isMenu ? (
            <HiBarsArrowUp
              onClick={() => setIsMenu(false)}
              className="text-3xl cursor-pointer"
            ></HiBarsArrowUp>
          ) : (
            <HiBars3BottomRight
              onClick={() => {
                setIsMenu(true);
                setIsClicked(true);
              }}
              className="text-3xl cursor-pointer"
            ></HiBars3BottomRight>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
