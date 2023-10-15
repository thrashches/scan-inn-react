import styles from "./CarouselArrows.module.scss";
import {ArrowProps} from "react-multi-carousel";


export function CarouselLeftArrow (props: ArrowProps) {
    return <button className={styles.CarouselLeftArrow} onClick={props.onClick}/>
}

export function CarouselRightArrow (props: ArrowProps) {
    return <button className={styles.CarouselRightArrow} onClick={props.onClick}/>
}