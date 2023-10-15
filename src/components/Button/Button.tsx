import styles from "./Button.module.scss";


type ButtonProps = {
    text: string;
    onClick: () => void;
    color?: "aqua" | "purple" | "grey";
}


export default function Button(props: ButtonProps) {
    const {text, onClick, color} = props;
    const colorMapping = {
        aqua: styles.Button__aqua,
        purple: styles.Button__purple,
        grey: styles.Button__grey,
    }

    return <button className={`${styles.Button} ${color ? colorMapping[color] : styles.Button__aqua}`}
                   onClick={onClick}>{text}</button>
}