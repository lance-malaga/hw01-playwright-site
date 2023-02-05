import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.css'
// assets
import down_arrow from '@/public/icons/downwardArrow.png'
import up_arrow from '@/public/icons/upwardArrow.png'

export default function NavArrows({
    linkArrowUp = "",
    linkArrowDown = "",
}) {
    return (
        <div className={styles.nav_arrows}>
            { linkArrowUp && (
                <Link href={linkArrowUp}>
                    <span>
                        <Image
                            src={up_arrow}
                            alt={"up_arrow"}
                            height={40}
                            width={"auto"}
                        />
                    </span>
                </Link>
            )}
            {
                linkArrowDown && (
                    <Link href={linkArrowDown}>
                        <span>
                            <Image
                                src={down_arrow}
                                alt={"down_arrow"}
                                height={40}
                                width={"auto"}
                            />
                        </span>
                    </Link>
                )
            }
        </div>
    )
}