import styles from "./Authentication.module.scss";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import Key from "../../assets/img/svg/Key.svg?react";
import Lock from "../../assets/img/svg/Lock.svg?react";
import {useAuth} from "../../hooks/auth.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


export default function Authentication() {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [navigate, isAuthenticated]);

    return <div className={styles.Authentication}>
        <div className={styles.headerWrapper}>
            <h1 className={styles.header}>Для оформления подписки
                на тариф, необходимо авторизоваться.</h1>
        </div>
        <div className={styles.pictureWrapper}>
            <Key className={styles.picture}/>
        </div>
        <div className={styles.Authentication__FormCard__wrapper}>
            <div className={styles.Authentication__FormCard}>
                <Lock className={styles.Lock}/>
                <div className={styles.FormCard__tabs}>
                    <div className={`${styles.FormCard__tabs__tab} ${styles.FormCard__tabs__tab__active}`}>Войти</div>
                    <div className={styles.FormCard__tabs__tab}>Зарегистрироваться</div>
                </div>
                <div>
                    <LoginForm/>
                </div>
            </div>
        </div>

    </div>
}