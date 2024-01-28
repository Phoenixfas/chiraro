'use client'
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const variant1 = {
    visible: { opacity: 1, x: 0, transition: { duration: .5 } },
    hidden: { opacity: 0, x: -100, transition: { duration: .5 } }
}
const variant2 = {
    visible: { opacity: 1, x: 0, transition: { duration: .5, delay: .3 } },
    hidden: { opacity: 0, x: 100, transition: { duration: .5, delay: .3 } }
}

export default function SEO() {

    const ref = useRef(null)
    const isInView = useInView(ref, { margin: "0px 0px -200px 0px", once: true})
    const controls = useAnimationControls()

    useEffect(() => {
        controls.start(isInView ? "visible" : "hidden")
      }, [isInView, controls]);

  return (
    <div ref={ref} className="w-full xl:mt-5 overflow-hidden flex flex-col md:flex-row gap-3 md:gap-10 px-5 xl:px-40 lg:px-20 md:px-10 pb-5">
        <motion.div variants={variant1} animate={controls}  className="flex-1 md:flex-[.8] flex justify-center md:justify-end">
            <Image className="w-2/3 md:w-[450px] h-[200px] md:h-[350px] object-contain " src="/images/seo.svg" alt="search engine optimization" width={500} height={500} />
        </motion.div>
        <motion.div variants={variant2} animate={controls}  className="flex-1 flex flex-col gap-[20px] text-center md:text-start items-center md:items-start">
            <h2 className="text-lg md:text-[1.5rem]">GROW TRAFFIC & INCREASE REVENUE</h2>
            <h1 className="text-4xl md:text-[3rem] md:leading-[3.5rem] font-bold">Appear On the Front Page of Google!</h1>
            <p className="text-[1rem] md:text-[1.2rem] mb-5">We offer professional SEO services that help websites increase their organic search score drastically in order to compete for the highest rankings — even when it comes to highly competitive keywords.</p>
            <Link href="/about" className="text-xl w-fit px-10 py-4 bg-[linear-gradient(to_bottom,#01BAEF,#192655)] rounded-full duration-300 hover:shadow-[0_5px_15px_#01BAEF]">Learn more about us</Link>
        </motion.div>
    </div>
  )
}
