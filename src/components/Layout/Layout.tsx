import styles from "./Layout.module.scss";
import Navbar from "../Navbar/Navbar.tsx";
import Footer from "../Footer/Footer.tsx";
import Landing from "../../pages/Landing/Landing.tsx";


export default function Layout () {
    return <section className={styles.Layout}>
        <header>
            <Navbar/>
        </header>
        <main>
            <Landing/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </section>
}