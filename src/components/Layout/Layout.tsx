import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Landing from "../../pages/Landing/Landing.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Authentication from "../../pages/Authentication/Authentication.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>,
    },
    {
        path: "authentication",
        element: <Authentication/>,
    }
]);


export default function Layout () {
    return <section className={styles.Layout}>
        <header>
            <Navbar/>
        </header>
        <main>
            <RouterProvider router={router}/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </section>
}