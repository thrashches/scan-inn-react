import styles from "./Checkbox.module.scss";


type CheckboxProps = {
    name: string;
    label: string;

}

export default function Checkbox(props: CheckboxProps) {
    const {name, label} = props;

    return <div className={styles.Checkbox}>
        <label className={styles.Checkbox__label}>
            <input className={styles.Checkbox__input} type={'checkbox'} name={name}/>
            <span className={styles.Checkbox__fake}></span>
            <span className={styles.Checkbox__text}>{label}</span>
        </label>

    </div>
}