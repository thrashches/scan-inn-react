import styles from "./BurgerMenu.module.scss";
import {AnimatePresence, motion} from "framer-motion";
import Close from "../Close/Close.tsx";
import Button from "../Button/Button.tsx";

type BurgerMenuProps = {
    isOpen: boolean;
    onClick: () => void;
}
export default function BurgerMenu(props: BurgerMenuProps) {
    const {isOpen, onClick} = props;

    return <AnimatePresence>
        {isOpen &&
            <motion.nav
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
                exit={{opacity: 0}}
                className={styles.Navbar__mobile}
            >
                <div className={styles.Navbar__mobile__header}>
                    <a className={styles.Navbar__logo__mobile} href={"#"}></a>
                    <Close onClick={onClick}/>
                </div>
                <AnimatePresence>
                    {
                        isOpen && <motion.div
                            initial={{height: 0}}
                            animate={{height: "auto"}}
                            transition={{duration: 0.5}}
                            exit={{height: 0}}
                            className={styles.Navbar__collapse}
                        >
                            <div className={styles.Navbar__links__mobile}>
                                <ul>
                                    <li><a href="#">Главная</a></li>
                                    <li><a href="#">Тарифы</a></li>
                                    <li><a href="#">FAQ</a></li>
                                </ul>
                            </div>
                            <div>
                                <div className={styles.BurgerMenu__footer}>
                                    <div><a href="#" className={styles.register}>Зарегистрироваться</a></div>
                                    <Button text={"Войти"} onClick={() => {}}/>
                                </div>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </motion.nav>}
    </AnimatePresence>
}