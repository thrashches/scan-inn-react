import styles from "./CarouselItem.module.scss";


type CarouselItemProps = {
    icon: string,
    text: string,
}
export default function CarouselItem(props: CarouselItemProps) {
    const {text, icon} = props;

    return <div className={styles.CarouselItem}>
        <img src={icon} alt="Иконка"/>
        <p>{text}</p>
    </div>
}