import styles from "./Select.module.scss";


type SelectProps = {
    name: string;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    placeholder?: string;
    wide?: boolean;
    items?: [];
}

export default function Select (props: SelectProps) {
    const {name, label, onChange, placeholder, items} = props
    return <div
        className={styles.Input}
        style={{
            width: props.wide ? "100%" : "",
        }}
    >
        {label && <label htmlFor="">{label}</label>}
        <select
            className={styles.Select}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
        >
            <option>Любая</option>
        </select>
    </div>
}