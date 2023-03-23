import React, {useRef} from "react";
import styles from "./Title.module.scss";
import Link from "../Link/Link";
import {useInView} from "framer-motion";

interface TitleProps {

};

const Title = ({}: TitleProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
    <div className={styles.root} ref={ref} style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
        <div className={styles.text}>
            <h1>Откройте для себя коллекцию Бахрушина Алексея Александровича</h1>
            <p>Добро пожаловать в теотральный музей имени Бахрушина! Планируйте свой визит, бронируйте билеты
                онлайн.</p>
        </div>
        <div className={styles.links}>
            <Link text={"Поддержите музей"}/>
            <Link text={"Забронируйте билеты"}/>
        </div>
    </div>
    );
};

export default Title;