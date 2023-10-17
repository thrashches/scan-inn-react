import styles from "./Landing.module.scss";
import Button from "../../components/Button/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../../components/CarouselItem/CarouselItem.tsx";
import Man from "../../assets/img/svg/Man.svg?react";
import time from "/img/png/carousel/time.png";
import search from "/img/png/carousel/search.png";
import guard from "/img/png/carousel/guard.png";
import {CarouselLeftArrow, CarouselRightArrow} from "../../components/CarouselArrows/CarouselArrows.tsx";
import {ITariff} from "../../data/types.ts";
import TariffCard from "../../components/TariffCard/TariffCard.tsx";


export default function Landing() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const tariffs: ITariff[] = [
        {
            name: "Beginner",
            description: "Для небольшого исследования",
            price: 799,
            oldPrice: 1200,
            creditCondition: "или 150 ₽/мес. при рассрочке на 24 мес.",
            icon: time,
            color: "#FFB64F",
            features: [
                "Фича 1",
                "Фича 2",
                "Фича 3",
            ]
        },
        {
            name: "Pro",
            description: "Для HR и фрилансеров",
            price: 100,
            oldPrice: 200,
            creditCondition: "Кредитная условия тарифа 2",
            icon: search,
            color: "#7CE3E1",
            features: [
                "Фича 1",
                "Фича 2",
                "Фича 3",
            ]
        },
        {
            name: "Business",
            description: "Для корпоративных клиентов",
            price: 100,
            oldPrice: 200,
            creditCondition: "Кредитная условия тарифа 3",
            icon: guard,
            color: "#000000",
            features: [
                "Фича 1",
                "Фича 2",
                "Фича 3",
            ]
        }
    ]

    return <div className={styles.Landing}>
        <section className={styles.Landing__headSection}>
            <div className={styles.Landing__headSection__textWrapper}>
                <h1 className={styles.Landing__headSection__header}>сервис по поиску публикаций <br/>
                    о компании <br/>
                    по его ИНН</h1>
                <p className={styles.textRegular} style={{maxWidth: "70%"}}>
                    Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
                </p>
                <div className={styles.ButtonWrapper}>
                    <Button text={"Запросить данные"} onClick={() => {
                    }} color={"purple"}/>
                </div>
            </div>
            <div className={styles.Landing__headSection__pictureWrapper}>
                <img className={styles.Landing__headSection__picture} src="/img/png/landing/header.png"
                     alt="Логотип"/>
            </div>

        </section>

        <section className={styles.Landing__Section}>
            <div>
                <h2 className={styles.sectionHeader}>Почему именно мы</h2>
            </div>
            <div style={{ width: "100%", position: "relative"}}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    customLeftArrow={<CarouselLeftArrow/>}
                    customRightArrow={<CarouselRightArrow/>}
                    className={styles.Carousel}>
                    <CarouselItem
                        text={"Высокая и оперативная скорость обработки заявки"}
                        icon={time}/>
                    <CarouselItem
                        text={"Огромная комплексная база данных, обеспечивающая объективный ответ на запрос"}
                        icon={search}/>
                    <CarouselItem
                        text={"Защита конфеденциальных сведений, " +
                            "не подлежащих разглашению по федеральному законодательству"}
                        icon={guard}/>
                    <CarouselItem
                        text={"Быстрый и удобный анализ"}
                        icon={time}/>
                </Carousel>
            </div>
        </section>
        <section className={styles.Man__wrapper} style={{ overflow: "hidden"}}>
            <Man className={styles.Man__svg}/>
        </section>
        <section className={styles.Landing__tariffSection}>
            <div><h2 className={styles.sectionHeader}>Наши тарифы</h2></div>
            <div className={styles.Landing__tariffSection__tariffs}>
                {tariffs.map((tariff, index) => {
                    return <TariffCard key={index} tariff={tariff} current={false}/>
                })}
            </div>
        </section>
    </div>
}