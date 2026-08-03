import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Layout from "../layout/Layout";
import About from "../pages/About/About";
import OrgaosSociais from "../pages/About/OrgaosSociais";
import Membros from "../pages/Membros/Membros"
import PAIE from "../pages/Paie/Paie";
import Galeria from "../pages/Galeria/Galeria";
import Noticias from "../pages/Noticias/Noticias";
import Eventos from "../pages/Eventos/Eventos";
import Contacto from "../pages/Contacto/Contacto"

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <App />
        },
        {
            path: "/sobre-nos",
            element: <About />
        },
        {
          path: "/orgaos-sociais",
          element: <OrgaosSociais />
        },
        {
          path: "/associados",
          element: <Membros />
        },
        {
          path: "/paie",
          element: <PAIE />
        },
        {
          path: "/eventos",
          element: <Eventos />
        },
        {
          path:"/noticias",
          element: <Noticias />
        },
        {
          path: "/galeria",
          element: <Galeria />
        },
        {
          path: "/contactos",
          element: <Contacto />
        }
    ]
  }
]);

export default router;