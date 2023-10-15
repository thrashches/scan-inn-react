import styles from "./Close.module.scss";

type CloseProps = {
    onClick: () => void;
}

export default function Close (props: CloseProps) {
    const { onClick } = props;

    return <div className={styles.Close}>
        <button className={styles.Close__btn} onClick={onClick}></button>
    </div>
}