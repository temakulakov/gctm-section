import React, {useRef} from "react";
import styles from "./Menu.module.scss";
import Card from "../Card/Card";
import Description from "../Description/Description";
import cardOne from "./photo_2023-03-20 19.18.47.jpeg"
import cardThree from "./photo_2023-03-20 19.19.16.jpeg"
import cardTwo from "./photo_2023-03-20 19.19.23.jpeg"
import cardFour from "./photo_2023-03-20 19.26.37.jpeg"
import FadeInWhenVisible from "../Features/FadeInWhenVisible";
import {useInView} from "framer-motion";

interface MenuProps {

};

const Menu = ({}: MenuProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className={styles.root} >
                <div className={styles.root} ref={ref} style={{
                    transform: isInView ? "none" : "translateX(200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <Card src={cardOne} button={"Узнать больше"} tag={"Юбилей"} header={"140 лет вдохновения"}
                          text={"В 2024 году Театральный музей имени А. А. Бахрушина отмечает свое 140- летие специальными выставками и праздничной программой. Присоединяйтесь к прзднику  и отметьте его вместе с нами!"}/>
                    <Card src={cardThree} header={"Шедевры Российского театра"} tag={"Выставка"}
                          button={"Открыть большее"}
                          text={"Исследуйте знаменитые шедевры Винсента Ван Гога в постоянной экспозиции музея."}/>
                    <Card src={cardTwo} header={"Шедевры Российского театра"} tag={"Выставка"}
                          button={"Открыть большее"}
                          text={"Исследуйте знаменитые шедевры Винсента Ван Гога в постоянной экспозиции музея."}/>
                    <Card src={cardFour} button={"Узнать больше"} tag={"Юбилей"} header={"140 лет вдохновения"}
                          text={"В 2024 году Театральный музей имени А. А. Бахрушина отмечает свое 140- летие специальными выставками и праздничной программой. Присоединяйтесь к прзднику  и отметьте его вместе с нами!"}/>
                </div>
                <Description/>
        </div>
    );
};

export default Menu;