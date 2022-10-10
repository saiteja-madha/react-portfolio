import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { SocialIcon } from "react-social-icons";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { motion } from "framer-motion";

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const handleNavClick = () => setMobileNav(!mobileNav);

    return (
        <div className="sticky top-0 h-[60px] m-w-7xl mx-auto flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            {/* logo placeholder */}
            <div className="hidden md:flex"></div>

            {/* Social Icons */}
            <motion.div
                initial={{
                    x: -100,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="md:hidden flex flex-row items-center"
            >
                <SocialIcon url="https://www.linkedin.com/in/saiteja-madha/" target="_blank" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://github.com/saiteja-madha" target="_blank" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="mailto:contact@saitejamadha.me" target="_blank" network="email" fgColor="gray" bgColor="transparent" />
                <BsFillPersonLinesFill
                    className="mx-3"
                    cursor="pointer"
                    size={25}
                    color="gray"
                    href="https://saitejamadha.me/resume-latest.pdf"
                    target="_blank"
                />
            </motion.div>

            {/* menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="hero" containerId="app" smooth={true} duration={100}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" containerId="app" scrolling="smooth" smooth={true} duration={100}>
                        About
                    </Link>
                </li>
            </ul>

            {/* hamburger*/}
            <motion.div
                initial={{
                    x: 100,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                onClick={handleNavClick}
                className="md:hidden z-10 px-4"
            >
                {!mobileNav ? (
                    <FaBars className="hover:fill-white" size={20} cursor="pointer" color="gray" />
                ) : (
                    <FaTimes className="hover:fill-white" size={20} cursor="pointer" color="gray" />
                )}
            </motion.div>

            {/* mobile menu*/}
            <ul className={!mobileNav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleNavClick} containerId="app" to="hero" smooth={true} duration={100}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    {" "}
                    <Link onClick={handleNavClick} containerId="app" to="about" smooth={true} duration={100}>
                        About
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
