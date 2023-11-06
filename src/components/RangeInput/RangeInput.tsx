import styles from "./RangeInput.module.scss";
import Input from "../Input/Input.tsx";


type RangeInputProps = {
    label?: string;
    fromName: string;
    fromType: string;
    toName: string;
    toType: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RangeInput(props: RangeInputProps) {
    const {label, fromName, fromType, toName, toType, onChange} = props;
    return <div className={styles.RangeInput}>
        {label && <label>{label}</label>}
        <div className={styles.RangeInput__inputs}>
            <Input name={fromName} onChange={onChange} type={fromType} wide/>
            <Input name={toName} onChange={onChange} type={toType} wide/>
        </div>
    </div>
}