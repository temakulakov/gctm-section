import React, {useRef} from 'react';
import styles from "./Logo.module.scss";
import logo from "./logo.png";
import {useInView} from "framer-motion";

interface LogoProps {
    isInView: boolean;
};

const Logo = ({ isInView }: LogoProps) => {
    const ref = useRef(null);
    return <div className={styles.root} ref={ref} style={{
            transform: isInView ? "none" : "translateY(-20px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
        <p className={styles.text}>Бахрушинский музей</p>
        <img alt={"logo"} src={logo} className={styles.logo}/>
    </div>
};

export default Logo;