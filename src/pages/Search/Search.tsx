import styles from "./Search.module.scss";
import Document from "../../assets/img/svg/Document.svg?react";
import Folders from "../../assets/img/svg/Folders.svg?react";
import Rocket from "../../assets/img/svg/Rocket.svg?react";
import Input from "../../components/Input/Input.tsx";
import Checkbox from "../../components/Checkbox/Checkbox.tsx";
import RangeInput from "../../components/RangeInput/RangeInput.tsx";
import Button from "../../components/Button/Button.tsx";
import Select from "../../components/Select/Select.tsx";


export default function Search() {
    return <div className={styles.Search}>
        <section className={styles.Search__header}>
            <h2 className={`${styles.header} ${styles.header__secondary}`}>Найдите необходимые данные в пару
                кликов.</h2>
            <div className={styles.header__text__wrapper}>
                <p className={styles.header__text}>Задайте параметры поиска.
                    Чем больше заполните, тем точнее поиск</p>
                <Document className={styles.Document}/>
            </div>
        </section>
        <section className={styles.Search__body}>
            <div className={styles.Search__card}>
                <div className={styles.Search__card__body}>
                    <div className={styles.column}>
                        <Input
                            name={"inn"}
                            label={"ИНН Компании *"}
                            placeholder={"10 цифр"}
                            onChange={() => {
                            }}
                            type={"text"}
                        />
                        <Input
                            name={"tone"}
                            label={"Тональность"}
                            placeholder={"Введите тональность"}
                            onChange={() => {
                            }}
                            type={"text"}
                        />
                        <Select
                            name={"tone"}
                            label={"Тональность"}
                            onChange={() => {}}/>
                        <Input
                            name={"quantity"}
                            label={"Количество документов в выдаче *"}
                            placeholder={"От 1 до 1000"}
                            onChange={() => {
                            }}
                            type={"text"}
                        />
                    </div>
                    <div className={styles.column}>
                        <div className={styles.checkbox__wrapper}>
                            <Checkbox name={"full"} label={"Признак максимальной полноты"}/>
                            <Checkbox name={"full"} label={"Упоминания в бизнес-контексте"}/>
                            <Checkbox name={"full"} label={"Главная роль в публикации"}/>
                            <Checkbox name={"full"} label={"Публикации только с риск-факторами"}/>
                            <Checkbox name={"full"} label={"Включать технические новости рынков"}/>
                            <Checkbox name={"full"} label={"Включать анонсы и календари"}/>
                            <Checkbox name={"full"} label={"Включать сводки новостей"}/>
                        </div>
                    </div>
                </div>

                <div className={styles.Search__card__footer}>
                    <RangeInput
                        label={"Диапазон поиска *"}
                        fromName={"dateFrom"} fromType={"date"}
                        toName={"dateTo"} toType={"date"}
                        onChange={() => {
                        }}
                    />
                    <div className={styles.Button__wrapper}>
                        <Button
                            color={"purple"}
                            text={"Поиск"}
                            onClick={() => {
                            }}
                            wide
                        />
                        <span className={styles.textSecondary}>* Обязательные к заполнению поля</span>
                    </div>
                </div>
            </div>
            <div
                style={{
                    overflowBlock: "visible"
                }}
            >
                <Folders className={styles.Folders}/>
                <Rocket className={styles.Rocket}/>
            </div>
        </section>
    </div>
}