import styles from "./LoginForm.module.scss";
import Input from "../Input/Input.tsx";
import Button from "../Button/Button.tsx";
import Google from "../../assets/img/svg/buttons/Google.svg?react";
import Facebook from "../../assets/img/svg/buttons/Facebook.svg?react";
import Yandex from "../../assets/img/svg/buttons/Yandex.svg?react";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setToken} from "../../store/auth.ts";

interface ILoginFormData {
    login: string,
    password: string,
}

export default function LoginForm() {
    const [formData, setFormData] = useState<ILoginFormData>({
        login: "",
        password: "",
    });
    const [formError, setFormError] = useState<string|null>(null);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const dispatch = useDispatch();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormError(null);
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();
        fetch("https://gateway.scan-interfax.ru/api/v1/account/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    return response.json().then((data) => {
                        throw new Error(data.message);
                    });
                }
            })
            .then((data) => {
                dispatch(setToken(data));
            })
            .catch((error) => {
                setFormError(error.message);
                setFormData({...formData, password: ""});
                console.error("err", error.message);
            });
    }

    useEffect(() => {
        console.log("formData", formData);
        if (formData.login && formData.password) {
            setSubmitDisabled(false);
        } else {
            setSubmitDisabled(true);
        }
    }, [formData])

    return <form className={styles.LoginForm}>
        <Input name={"login"} label={"Логин или номер телефона:"}
               onChange={handleChange} type={"text"} value={formData.login} />
        <Input name={"password"} label={"Пароль:"}
               onChange={handleChange} type={"password"} value={formData.password} />
        <div className={styles.Button__wrapper}>
            {formError && <p className={styles.error}>{formError}</p>}
            <Button
                text={"Войти"}
                color={"purple"}
                onClick={handleSubmit}
                disabled={submitDisabled}
                wide/>
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