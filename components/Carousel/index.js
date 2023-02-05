import Image from 'next/image'
import styles from './styles.module.css'
import { useState } from 'react'
import { carousel } from '@/data/data'

export default function Carousel() {

    const [carouselData, setCarouselData] = useState([...carousel]);
    const [imgIndex, setImgIndex] = useState(0);

    const nextSlide = () => {
        setImgIndex(imgIndex + 1);
        if (imgIndex == carouselData.length - 1) {
            setImgIndex(0);
        }
    }
    const prevSlide = () => {
        setImgIndex(imgIndex - 1);
        if (imgIndex == 0) {
            setImgIndex(carouselData.length-1);
        }
        console.log(imgIndex + "inside function")
    }

    return (
        <div 
            className={styles.carousel} 
            id="carouselImage"
            style={{ height: "200px", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", margin: "40px 0px" }}
        >
            <Image
                className={styles.carouselImg}
                src={carouselData[imgIndex].image}
                key={carouselData[imgIndex].id}
                alt={carouselData[imgIndex].value}
                height={200}
                width={400}
                priority
            />
            <div>
                <Image
                    src="/icons/leftArrow.png"
                    alt={"left_arrow"}
                    height={30}
                    width={40}
                    onClick={prevSlide}
                />
                <ul 
                    id="testOnImageHere"
                    style={{ backgroundColor: "rgba(16, 46, 53, 0.5)", padding: "10px", margin: "0px 50px", listStyle: "none", textAlign: "center" }}
                >
                    <li>{carouselData[imgIndex].value}</li>
                </ul>
                <Image
                    src="/icons/rightArrow.png"
                    alt={"right_arrow"}
                    height={30}
                    width={40}
                    onClick={nextSlide}
                />
            </div>
        </div>
    )
}