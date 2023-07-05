import Provider from "./contexto/Provider";
import MainRouter from "./routes/MainRouter";
import { useContext } from "react";
import Contexto from "./contexto/Contexto";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Router2 from "./routes/Router2";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "e-commerce/login",
      element: (
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      ),
    },
    {
      path: "e-commerce/*",
      element: (
        <PrivateRoutes>
          <Router2 />
        </PrivateRoutes>
      ),
    },
  ]);

  return (
    <>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
export default App;
