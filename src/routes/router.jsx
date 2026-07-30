import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/sobre",
            element: <About />
        }
    ]
  }
]);

export default router;