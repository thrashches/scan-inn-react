import styles from "./SignInNav.module.scss";
import {useNavigate} from "react-router-dom";


export default function SignInNav() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/authentication');
    };


    return <div className={styles.SignInNav}>
        <div><a href="#" className={styles.register}>Зарегистрироваться</a></div>
        <div className={styles.separator}></div>
        <div>
            <button className={styles.btn} onClick={handleLoginClick}>Войти</button>
        </div>
    </div>
}