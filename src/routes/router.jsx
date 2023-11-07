import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PrivateRoute from "./SecureRoute";
import Home from "../pages/Home";
import CountryPlayers from "../pages/CountryPlayers";
import PlayerDetail from "../pages/PlayerDetail";
import MySquad from "../pages/MySquad";
import UpdatePlayer from "../pages/UpdatePlayer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/countries"),
      },
      {
        path: "/country/:countryName",
        element: <CountryPlayers></CountryPlayers>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/players?country=${params.countryName}`),
      },

      {
        path: "/player-details/:id", // { params :{playerID: 654a5af22a8c0b1b8091c0b3 }}
        element: (
          <PrivateRoute>
            <PlayerDetail></PlayerDetail>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/player/${params.id}`),
      },

      {
        path: "/my-dream-11", // { params :{playerID: 654a5af22a8c0b1b8091c0b3 }}
        element: (
          <PrivateRoute>
            <MySquad></MySquad>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-player/:id", // { params :{playerID: 654a5af22a8c0b1b8091c0b3 }}
        element: (
          <PrivateRoute>
            <UpdatePlayer></UpdatePlayer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/player/${params.id}`),
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/my-dream-11",
        element: <h2>I am Dream 11</h2>,
      },
      {
        path: "/add-player",
        element: <h2>Add-Player</h2>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <h2>Secret</h2>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
