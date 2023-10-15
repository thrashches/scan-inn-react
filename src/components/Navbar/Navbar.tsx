import styles from "./Navbar.module.scss";
import SignInNav from "../SignInNav/SignInNav.tsx";
import Burger from "../Burger/Burger.tsx";
import {useState} from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return <>
        <BurgerMenu onClick={toggleNav} isOpen={isOpen}/>
        <nav className={styles.Navbar}>
            <div>
                <a className={styles.Navbar__logo} href={"#"}>
                </a>
            </div>
            <div className={styles.Navbar__links}>
                <ul>
                    <li><a href="#">Главная</a></li>
                    <li><a href="#">Тарифы</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div className={styles.Navbar__right}>
                <SignInNav/>
            </div>
            <Burger onClick={toggleNav}/>
        </nav>
    </>
}