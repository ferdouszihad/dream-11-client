import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "animate.css";
import AuthProvider from "./contexts/AuthProvider.jsx";

import "aos/dist/aos.css"; // You can also use <link> for styles
import ThemeProvider from "./contexts/ThemeProvider.jsx";
// ..

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
