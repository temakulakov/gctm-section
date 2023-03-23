import React, {useEffect, useRef} from "react";
import styles from "./BottomMenu.module.scss";
import {motion, useInView} from "framer-motion";

interface BottomMenuProps {
    scrollX: number;
};

const BottomMenu = ({scrollX}: BottomMenuProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return <div className={styles.root} ref={ref}>
        <div className={styles.content}>
            <p
                style={scrollX > 0.2 ? {
                    color: "rgba(0, 0, 0, 0)", transform: isInView ? "none" : "translateX(20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                } : { transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s", color: "black", transform: isInView ? "none" : "translateX(20px)",
                    opacity: isInView ? 1 : 0,}}>Прокрутите далее</p>
            <div className={styles.scrolling}>

                <svg className={styles.arrow}
                     style={scrollX >= 0.1 ? {
                         fill: "rgba(0, 0, 0, 0)",transform: isInView ? "none" : "translateX(20px)",
                         opacity: isInView ? 1 : 0,
                         transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                     } : {fillOpacity: 0.5, transform: isInView ? "none" : "translateX(20px)",
                         opacity: isInView ? 1 : 0,
                         transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
                     width="18" height="16" viewBox="0 0 18 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 8L1.93934 6.93934L0.87868 8L1.93934 9.06066L3 8ZM16 9.5C16.8284 9.5 17.5 8.82843 17.5 8C17.5 7.17157 16.8284 6.5 16 6.5V9.5ZM7.93934 0.93934L1.93934 6.93934L4.06066 9.06066L10.0607 3.06066L7.93934 0.93934ZM1.93934 9.06066L7.93934 15.0607L10.0607 12.9393L4.06066 6.93934L1.93934 9.06066ZM3 9.5H16V6.5H3V9.5Z"
                        fill="#222222"/>
                </svg>


                <svg  width="254" height="3" viewBox="0 0 254 3" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
                    <path d="M2 1.50002L252 1.5" stroke="black" strokeWidth="3" strokeLinecap="round"
                          strokeDasharray="8 8"/>
                </svg>


                <motion.div style={{
                    position: "absolute",
                    height: "3px",
                    width: `${248 * scrollX}px`,
                    backgroundColor: "black",
                    borderRadius: "2px",
                    transform: "translateX(35px)",
                }}>
                </motion.div>
                <svg style={scrollX <= 0.9 ? {
                    transform: isInView ? "none" : "translateX(-20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                    fill: "rgba(0, 0, 0, 0)"
                } : {fillOpacity: 0.5, transform: isInView ? "none" : "translateY(-20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}} className={styles.arrow} width="18" height="16" viewBox="0 0 18 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 8L16.0607 9.06066L17.1213 8L16.0607 6.93934L15 8ZM2 6.5C1.17157 6.5 0.5 7.17157 0.5 8C0.5 8.82843 1.17157 9.5 2 9.5L2 6.5ZM10.0607 15.0607L16.0607 9.06066L13.9393 6.93934L7.93934 12.9393L10.0607 15.0607ZM16.0607 6.93934L10.0607 0.93934L7.93934 3.06066L13.9393 9.06066L16.0607 6.93934ZM15 6.5L2 6.5L2 9.5L15 9.5L15 6.5Z"
                        fill="#222222"/>
                </svg>
            </div>
        </div>
    </div>
};

export default BottomMenu;