import Provider from "./contexto/Provider";
import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Router2 from "./routes/Router2";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Navigate to="home" />,
    },
    {
      path: "/login",
      element: (
        <PublicRoutes>
          <Login />
        </PublicRoutes>
      ),
    },
    {
      path: "/*",
      element: (
        <PrivateRoutes>
          <Router2 />
        </PrivateRoutes>
      ),
    },
  ]);
  router.basename = "e-commerce"
  return (
    <>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
export default App;
