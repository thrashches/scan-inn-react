import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";

import {Outlet} from "react-router-dom";


export default function Layout() {
    return <section className={styles.Layout}>
        <header>
            <Navbar/>
        </header>
        <main>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </section>
}