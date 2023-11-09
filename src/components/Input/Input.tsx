import styles from "./Input.module.scss";


type InputProps = {
    name: string;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: string;
    value?: string;
    wide?: boolean;
};

export default function Input(props: InputProps) {
    const {name, label, onChange, placeholder, type, value, wide} = props;
    return <div
        className={styles.Input}
        style={{
            width: wide ? "100%" : "",
        }}
    >
        {label && <label htmlFor="">{label}</label>}
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>
}