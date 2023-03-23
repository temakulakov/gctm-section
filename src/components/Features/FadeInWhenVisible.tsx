import React from "react";
import { motion } from "framer-motion";

interface FadeInWhenVisibleProps {
    children: string | JSX.Element | JSX.Element[];
    type?: string;
};

const FadeInWhenVisible = ({ children }: FadeInWhenVisibleProps) => {
    return <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
        }}
    >
        {children}
    </motion.div>
};

export default FadeInWhenVisible;

