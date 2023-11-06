import styles from "./Input.module.scss";


type InputProps = {
    name: string;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: string;
    wide?: boolean;
};

export default function Input(props: InputProps) {
    const {name, label, onChange, placeholder, type} = props;
    return <div
        className={styles.Input}
        style={{
            width: props.wide ? "100%" : "",
        }}
    >
        {label && <label htmlFor="">{label}</label>}
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
}