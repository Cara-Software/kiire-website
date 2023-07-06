/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import {motion} from "framer-motion"
export const UserTab = qwikify$(() => {
    return (
        <div>
            <motion.h2
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5}}
            >
                Hallo
            </motion.h2>
        </div>
    )
})