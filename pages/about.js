import Image from "next/image";
import styles from "@/styles/About.module.css"
// components
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import NavArrows from "@/components/NavArrows";
import Carousel from "@/components/Carousel";

export default function About() {
    return (
        <>
            <Header
                title='About'
                meta_content='Assignment #1 - About Us Page'
            />
            <div className={styles.about_page}>
                <NavBar/>
                <main>
                    <div className={styles.main__content}>
                        <h1>About Us</h1>
                        <div className={styles.about_us__content}>
                            <p>
                                We are proud to deliver an education that goes beyond textbooks and classrooms.
                            </p>
                            <p>
                                Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.
                            </p>
                            <p>
                                Through close collaboration with industry, our network of alumni and partners continue to achieve global success.
                            </p>
                            <h2>Information Sessions</h2>
                            <p>
                                Information sessions are a simple way to figure out the next step along your career path.
                                Learn more about the programs that interest you.
                            </p>
                            <h3>Big Info</h3>
                            <p>
                                Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing, and health to engineering, trades, and applied sciences.
                            </p>
                            <p>
                                If you missed our fall event the next Big Info is scheduled to return on February 15, 2023.
                            </p>
                            <h2>Campus Tours</h2>
                            <p>
                                Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.
                            </p>
                        </div>
                        <Carousel/>
                        <h1>Departments</h1>
                        <ul className={`${styles.about_us__content} ${styles.departments}`}>
                            <li>Applied & Natural Sciences</li> 
                            <li>Business & MediaSciences</li>
                            <li>Computing & ITSciences</li>
                            <li>EngineerinSciences</li>
                            <li>Health SciencesSciences</li>
                            <li>Trades & Apprenticeships</li>
                        </ul>
                    </div>
                </main>
                <NavArrows linkArrowUp="/" linkArrowDown="/contact" />
            </div>
        </>
    )
}