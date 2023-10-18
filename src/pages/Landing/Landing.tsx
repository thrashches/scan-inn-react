import styles from "./Landing.module.scss";
import Button from "../../components/Button/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselItem from "../../components/CarouselItem/CarouselItem.tsx";
import Man from "../../assets/img/svg/Man.svg?react";
import time from "/img/png/carousel/time.png";
import search from "/img/png/carousel/search.png";
import guard from "/img/png/carousel/guard.png";
import lamp from "/img/svg/tariffs/lamp.svg";
import onion from "/img/svg/tariffs/onion.svg";
import laptop from "/img/svg/tariffs/laptop.svg";
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
            breakpoint: { max: 3000, min: 1200 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1200, min: 960 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 960, min: 0 },
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
            icon: lamp,
            color: "#FFB64F",
            features: [
                "Безлимитная история запросов",
                "Безопасная сделка",
                "Поддержка 24/7",
            ]
        },
        {
            name: "Pro",
            description: "Для HR и фрилансеров",
            price: 1299,
            oldPrice: 2600,
            creditCondition: "Кредитная условия тарифа 2",
            icon: onion,
            color: "#7CE3E1",
            features: [
                "Все пункты тарифа Beginner",
                "Экспорт истории",
                "Рекомендации по приоритетам",
            ]
        },
        {
            name: "Business",
            description: "Для корпоративных клиентов",
            price: 2379,
            oldPrice: 3700,
            creditCondition: "Кредитная условия тарифа 3",
            icon: laptop,
            color: "#000000",
            features: [
                "Все пункты тарифа Pro",
                "Безлимитное количество запросов",
                "Приоритетная поддержка",
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