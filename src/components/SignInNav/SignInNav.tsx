import styles from "./SignInNav.module.scss";


export default function SignInNav () {
    return <div className={styles.SignInNav}>
        <div><a href="#" className={styles.register}>Зарегистрироваться</a></div>
        <div className={styles.separator}></div>
        <div>
            <button className={styles.btn}>Войти</button>
        </div>
    </div>
}