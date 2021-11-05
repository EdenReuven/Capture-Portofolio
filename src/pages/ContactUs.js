import react from "react";
//animation
import { motion } from "framer-motion";
import {pageAnimation} from "../animation";

const ContactUs =() => {
    return(
        <motion.div style={{background: "#fff"}} variants={pageAnimation} initial="hidden" animate ="show" exit="exit">
            <h1>Contact Us</h1>
        </motion.div>
    );

};

export default ContactUs;