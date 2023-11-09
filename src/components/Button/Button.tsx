import styles from "./Button.module.scss";


type ButtonProps = {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: "aqua" | "purple" | "grey";
    wide?: boolean;
    disabled?: boolean;
}


export default function Button(props: ButtonProps) {
    const {text, onClick, color, disabled} = props;
    const colorMapping = {
        aqua: styles.Button__aqua,
        purple: styles.Button__purple,
        grey: styles.Button__grey,
    }

    return <button
        className={`${styles.Button} ${color ? colorMapping[color] : styles.Button__aqua}`}
        style={{
            width: props.wide ? "100%" : "",
        }}
        onClick={onClick}
        disabled={disabled}
    >{text}</button>
}