import React, {useRef} from 'react';
import styles from './App.module.scss';
import Title from "./components/Title/Title";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import BottomMenu from "./components/BottomMenu/BottomMenu";
import {motion, useInView, useScroll} from "framer-motion";
import FadeInWhenVisible from "./components/Features/FadeInWhenVisible";

function App() {

    const backgroundsHEX = {
        0: "#B282AE",
        0.2: "#8A638F",
        0.7: "#CF79A6y",
    }

    const {scrollXProgress} = useScroll();

    const [scrollX, setScrollX] = React.useState(scrollXProgress.get());

    React.useEffect(() => {
        const unsubscribe = scrollXProgress.onChange(setScrollX);
        return unsubscribe;
    })

    React.useEffect(() => {
        console.log(scrollX);

    }, [scrollX]);

    React.useEffect(() => {
        function transformScroll(event: { deltaY: any; currentTarget: { scrollLeft: any; }; deltaX: any; preventDefault: () => void; }) {
            if (!event.deltaY) {
                return;
            }
            event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
        }

        var element = document.scrollingElement || document.documentElement;
        // @ts-ignore
        element.addEventListener('wheel', transformScroll, {passive: false});

        return () => {
            // @ts-ignore
            element.removeEventListener('wheel', transformScroll, {passive: false})
        };
    }, []);

    const scrollBackgroundColor = (scroll: number): number => {
        if (scroll >= 0 && scroll < 0.2) {
            return 0;
        }
        if (scroll >= 0.2 && scroll < 0.7) {
            return 0.2;
        }
        if (scroll >= 0.7) {
            return 0.7;
        }
        return 0;
    }



    return (
        <motion.div className={styles.root}
            //@ts-ignore
                    style={{backgroundColor: backgroundsHEX[scrollBackgroundColor(scrollX)]}}
        >
                <Header/>
            <div style={{width: `90px`, height: `90px`, position: "fixed", top: "0px",
                right: "0px", margin: "10px 10px 0 0", zIndex: "0", display: "flex", alignItems: "flex-end"}}>
                <div style={{width: "100%", height: `${scrollX * 100}%`, backgroundColor: "white"}}></div>
            </div>


            <div className={styles.content}>
                <FadeInWhenVisible>
                    <Title/>
                </FadeInWhenVisible>
                <Menu/>
            </div>
            <BottomMenu scrollX={scrollX}/>
        </motion.div>
    );
}

export default App;
