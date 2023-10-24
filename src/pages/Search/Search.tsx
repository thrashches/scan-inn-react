import styles from "./Search.module.scss";
import Document from "../../assets/img/svg/Document.svg?react";
import Folders from "../../assets/img/svg/Folders.svg?react";
import Rocket from "../../assets/img/svg/Rocket.svg?react";


export default function Search () {
    return <div className={styles.Search}>
        <section className={styles.Search__header}>
            <h2 className={`${styles.header} ${styles.header__secondary}`}>Найдите необходимые данные в пару кликов.</h2>
            <p className={styles.textRegular}>Задайте параметры поиска.
                Чем больше заполните, тем точнее поиск</p>
            <Document className={styles.Document}/>
        </section>

    </div>
}