import styles from "./TariffCard.module.scss";
import {ITariff} from "../../data/types.ts";


type TariffCardProps = {
    tariff: ITariff,
    current: boolean,
}


export default function TariffCard(props: TariffCardProps) {
    const {tariff, current} = props;

    return <div
        className={`${styles.TariffCard} ${current && styles.current}`}
        style={{
            borderColor: current ? tariff.color: "none"
        }}
    >
        <div className={styles.TariffCard__header}
            style={{
                backgroundColor: tariff.color
            }}
        >
            <div>
                <h3 className={styles.TariffCard__header__title}>{tariff.name}</h3>
                <p className={styles.TariffCard__text}>{tariff.description}</p>
            </div>
            <div>
                <img src={tariff.icon} alt={tariff.name}/>
            </div>
        </div>

        <div className={styles.TariffCard__body}>
            <div className={styles.TariffCard__body__priceWrapper}>
                <p className={styles.TariffCard__body__price}>{tariff.price} ₽</p>
                <p className={styles.TariffCard__body__oldPrice}>{tariff.oldPrice} ₽</p>
            </div>
            <div>
                <p className={styles.TariffCard__text}>{tariff.creditCondition}</p>
            </div>
            <div>
                <ul>
                    {tariff.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
}