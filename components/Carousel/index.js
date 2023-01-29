import Image from 'next/image'
import styles from './styles.module.css'
// assets
import left_arrow from '@/public/icons/leftArrow.png'
import right_arrow from '@/public/icons/rightArrow.png'

export default function Carousel({
    
}) {
    return (
        <div className={styles.carousel}>

            <Image
                src={left_arrow}
                alt={"left_arrow"}
                height={30}
                width={"auto"}
            />
            <Image
                src={right_arrow}
                alt={"right_arrow"}
                height={30}
                width={"auto"}
            />
        </div>
    )
}