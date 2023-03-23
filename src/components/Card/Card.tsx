import React from "react";
import styles from "./Card.module.scss";

interface CardProps {
    src?: string;
    tag?: string;
    header: string;
    text: string;
    button: string;
};

const Card = ({ src, tag, header, text, button }: CardProps) => {
    const [hover, setHover] = React.useState(false);
    return (
        <div className={styles.root} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={src} className={styles.background} style={ hover ? {transform: "scale(1.05)"} : {}}/>
            <div className={styles.desciption}>
                <p>{tag}</p>
                <h2>{header}</h2>
                <p>{text}</p>
                <div className={styles.arrowBlock}>
                    <b>{button}</b>
                    <svg style={hover ? {transform: "translate(5px, 0px) translateY(1px)"} : {}} width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 7L13.7071 6.29289L14.4142 7L13.7071 7.70711L13 7ZM1 8C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6V8ZM7.70711 0.292893L13.7071 6.29289L12.2929 7.70711L6.29289 1.70711L7.70711 0.292893ZM13.7071 7.70711L7.70711 13.7071L6.29289 12.2929L12.2929 6.29289L13.7071 7.70711ZM13 8L1 8V6L13 6V8Z" fill="white"/>
                    </svg>
                </div>

            </div>
        </div>
    );
};

export default Card;