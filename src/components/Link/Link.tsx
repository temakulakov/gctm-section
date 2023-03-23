import React from "react";
import styles from "./Link.module.scss";

interface LinkProps {
    text?: string;
};

const Link = ({text}: LinkProps) => {
    const [hover, setHover] = React.useState(false);
    return <div className={styles.link} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <svg style={hover ? {transform: "translate(-10px, 0px)"} : {}} className={styles.arrow} width="20" height="13" viewBox="0 0 20 13"
             xmlns="http://www.w3.org/2000/svg">
            <path
                d="M13 7L13.7071 6.29289L14.4142 7L13.7071 7.70711L13 7ZM1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6V8ZM7.70711 0.292893L13.7071 6.29289L12.2929 7.70711L6.29289 1.70711L7.70711 0.292893ZM13.7071 7.70711L7.70711 13.7071L6.29289 12.2929L12.2929 6.29289L13.7071 7.70711ZM13 8H1V6H13V8Z"
                fill="black"/>
        </svg>
        <a className={styles.text}>{text}</a>
    </div>
};

export default Link;