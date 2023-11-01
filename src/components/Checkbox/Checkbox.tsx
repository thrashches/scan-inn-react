import styles from "./Checkbox.module.scss";


type CheckboxProps = {
    name: string;
    label: string;

}

export default function Checkbox(props: CheckboxProps) {
    const {name, label} = props;

    return <div className={styles.Checkbox}>
        <label>
            <input type={'checkbox'} name={name}/>
            {label}
        </label>

    </div>
}