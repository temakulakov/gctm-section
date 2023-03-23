import React, {useRef} from 'react';
import styles from "./Header.module.scss";
import Logo from "../Logo/logo.png";
import {useInView} from "framer-motion";
import logo from "../Logo/logo.png";
import styless from "../Logo/Logo.module.scss";

interface HeaderProps {

};

const Header = ({}: HeaderProps) => {
    const refHeader = useRef(null);
    const isInView = useInView(refHeader, { once: true });

    const [language, setLanguage] = React.useState(true);

    return <div className={styles.root} ref={refHeader} style={{
        transform: isInView ? "none" : "translateY(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
    }}>
        <ol className={styles.list}>
            <li className={styles.element}><a>Подробнее</a></li>
            <li className={styles.element}><a>Билеты & визит</a></li>
            <li className={styles.element}><a>Коллекция</a></li>
            {/*<li className={styles.element}><a>О нас</a></li>*/}
            <li className={styles.element}><a>Интернет-магазин</a></li>
            <li className={styles.element}><a>Онлайн-музей</a></li>
            <li className={styles.element} onClick={() => setLanguage(!language)}>
                <a style={{fontWeight: 400, transition: ".5s all"}}>{ language ? <><b>RU |</b> EN</> : <>RU <b>| EN</b></> }</a>
            </li>
            <li className={styles.element}>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.70833" cy="6.70833" r="6.70833" transform="matrix(-1 0 0 1 19.1667 3.83334)"
                            stroke="#222222" strokeWidth="2"/>
                    <path d="M3.83331 19.1667L6.70831 16.2917" stroke="#222222" strokeWidth="2"
                          strokeLinecap="round"/>
                </svg>
            </li>
        </ol>

        <div className={styless.root}  style={{
            // transform: isInView ? "none" : "translateY(-20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>

            <p className={styless.text}>Бахрушинский музей</p>
            <img alt={"logo"} src={Logo} className={styless.logo}/>
        </div>


    </div>
};

export default Header;