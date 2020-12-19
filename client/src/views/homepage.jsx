import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import ScrollReveal from 'scrollreveal';
import axios from 'axios';
const TestPage = props => {
    const { scrollYProgress } = useViewportScroll()
    const [content, setContent] = useState("Innovate")
    const [contentClass, setContentClass] = useState("first_content_word")
    const [showArrow, setArrowVisibility] = useState(false)
    const scaleAnim = useTransform(scrollYProgress, [0, 0.33], [1, 1.5])
    const yPosAnim = useTransform(scrollYProgress, [0, 0.33], [0, -0])
    const yPosAnim2 = useTransform(scrollYProgress, [0.33, 0.67], [-10, 5])
    const yPosAnim3 = useTransform(scrollYProgress, [0.67, 1], [0, 5])
    const opacity = useTransform(scrollYProgress, [0, 0.33, 0.331], [0.8, 1, 0])
    const opacity2 = useTransform(scrollYProgress, [0.33, 0.67, 0.671], [0, 1, 0])
    const opacity3 = useTransform(scrollYProgress, [0.671, 1, 1], [0,1, 0])
    const contents = [
        {
            contentClass:"first_content_word",
            content:"Incubate."
        },
        {
            contentClass:"content-2",
            content:"Innovate."
        },
        {
            contentClass:"content-3",
            content:"Involve."
        },
        {
            contentClass:"content-4",
            content:"setup."
        },
        {
            contentClass:"content-5",
            content:"motivate."
        },
        {
            contentClass:"content-5",
            content:"focus."
        },
        {
            contentClass:"content-5",
            content:"energise."
        },
        {
            contentClass:"content-5",
            content:"staminize."
        },
        {
            contentClass:"content-5",
            content:"entrepreneur."
        },
        {
            contentClass:"content-5",
            content:"power up."
        },
        {
            contentClass:"last_content_word",
            content:"get ready."
        },
        {
            contentClass:"content-2",
            content:"Innovate."
        },
        {
            contentClass:"content-3",
            content:"Involve."
        },
        {
            contentClass:"content-4",
            content:"entrepreneur."
        },
        {
            contentClass:"content-5",
            content:"motivate."
        },
        {
            contentClass:"content-5",
            content:"focus."
        },
        {
            contentClass:"content-5",
            content:"energise."
        },
        {
            contentClass:"content-5",
            content:"staminize."
        },
        {
            contentClass:"content-5",
            content:"spirits."
        },
        {
            contentClass:"content-5",
            content:"power up."
        },
        {
            contentClass:"last_content_word",
            content:"get ready."
        },
    ]
    const showArrowVisibility = () => { setArrowVisibility(true) }
    useEffect(() => {
        // const {data} = await axios.get('http://localhost:4444/upload/img')
        // setGallery(data)
        ScrollReveal().reveal(".content", { scale:8, duration:1000 })
        ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        for(let i=0;i<contents.length;i++) {
            setTimeout(() => {
                setContent(contents[i].content)
                setContentClass(contents[i].contentClass)
            }, 100*i)
            ScrollReveal().reveal(".last_content_word", { afterReveal:showArrowVisibility })
        }
    }, []);
    return (
        <div className="container-fluid landingPage p-0" style={{height:"150vh"}}> 
            <div className="row m-0">
                <div className="col-md-12 d-flex justify-content-center">
                <motion.div className="" >
                <motion.h1 style={{ y:yPosAnim}} className="content landingPage_content_heading"><span className={contentClass}>{content}</span></motion.h1>
                
            </motion.div>  
                </div>
            </div> 
            <div className="row m-0">
                <div className="col-md-12 d-flex justify-content-center">
                    { showArrow && <i className=" fa fa-2x fa-arrow-down"></i> } 
                </div>
            </div>     
        </div>
    );
}


export default TestPage