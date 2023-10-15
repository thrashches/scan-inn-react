import styles from "./Burger.module.scss";


type BurgerProps = {
    onClick: () => void;
}
export default function Burger (props: BurgerProps) {
    const { onClick } = props;
    return <div className={styles.Burger}>
        <button className={styles.Burger__btn} onClick={onClick}></button>
    </div>
}