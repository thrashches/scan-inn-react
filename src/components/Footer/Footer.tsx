import styles from "./Footer.module.scss";


export default function Footer() {
    return <div className={styles.Footer__wrapper}>
        <div className={styles.Footer}>
            <a className={styles.Footer__logo} href={'#'}></a>
            <div className={styles.address__info}>
                <p>г. Москва, Цветной б-р, 40
                    <br/>+7 495 771 21 11
                    <br/>info@skan.ru</p>
                <p>Copyright. 2022</p>
            </div>
        </div>
    </div>
}