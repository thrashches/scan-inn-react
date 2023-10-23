import styles from "./LoginForm.module.scss";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import Google from "../../assets/img/svg/buttons/Google.svg?react";
import Facebook from "../../assets/img/svg/buttons/Facebook.svg?react";
import Yandex from "../../assets/img/svg/buttons/Yandex.svg?react";


export default function LoginForm() {
    return <form className={styles.LoginForm}>
        <Input name={"login"} label={"Логин или номер телефона:"} onChange={() => {
        }} type={"text"}/>
        <Input name={"password"} label={"Пароль:"} onChange={() => {
        }} type={"password"}/>
        <div className={styles.Button__wrapper}>
            <Button text={"Войти"} color={"purple"} onClick={() => {
            }}/>
            <a href="#">Восстановить пароль</a>
        </div>

        <div className={styles.SocialButtons__wrapper}>
            <p className={styles.textSecondary}>Войти через:</p>
            <div className={styles.SocialButtons}>
                <Google className={styles.SocialButton}/>
                <Facebook className={styles.SocialButton}/>
                <Yandex className={styles.SocialButton}/>
            </div>
        </div>
    </form>
}