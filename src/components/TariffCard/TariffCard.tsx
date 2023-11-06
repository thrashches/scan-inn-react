import styles from "./TariffCard.module.scss";
import {ITariff} from "../../data/types.ts";
import Button from "../Button/Button.tsx";


type TariffCardProps = {
    tariff: ITariff,
    current: boolean,
}


const calculateBrightness = (color: string) => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000;
};

const CurrentBadge = () => {
    return <div className={styles.CurrentBadge}>Текущий тариф</div>
}

export default function TariffCard(props: TariffCardProps) {
    const {tariff, current} = props;
    // console.log(calculateBrightness(tariff.color))
    return <div
        className={`${styles.TariffCard} ${current && styles.current}`}
        style={{
            borderColor: current ? tariff.color : "none",
            borderStyle: current ? "solid" : "none",
        }}
    >
        <div className={styles.TariffCard__header}
             style={{
                 backgroundColor: tariff.color,
                 color: calculateBrightness(tariff.color) > 130 ? "#000000" : "#ffffff"
             }}
        >
            <div>
                <h3 className={styles.TariffCard__header__title}>{tariff.name}</h3>
                <p className={styles.TariffCard__text}>{tariff.description}</p>
            </div>
            <div>
                <img className={styles.TariffCard__icon} src={tariff.icon} alt={tariff.name}/>
            </div>
        </div>

        <div className={styles.TariffCard__body}>
            {current && <CurrentBadge/>}
            <div>
                <div className={styles.TariffCard__body__priceWrapper}>
                    <p className={styles.TariffCard__body__price}>{tariff.price} ₽</p>
                    <p className={styles.TariffCard__body__oldPrice}>{tariff.oldPrice} ₽</p>
                </div>
                <div>
                    <p className={styles.TariffCard__text}>{tariff.creditCondition}</p>
                </div>
            </div>
            <div>
                <p className={styles.featureHeader}>В тариф входит:</p>
                <ul className={styles.featureList}>
                    {tariff.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            <div className={styles.TariffCard__footer}>
                <Button
                    text={"Подробнее"} onClick={() => {
                }}
                    color={"purple"}
                    wide
                />
            </div>
        </div>
    </div>
}