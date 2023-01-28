import Image from 'next/image'
import styles from './styles.module.css'
// assets
import menu_icon from '@/public/icons/menu-icon.png'
import grad_hat_icon from '@/public/icons/graduation-hat.png'

export default function NavBar () {
    return (
        <>
            <nav className={styles.navbar}>
                <Image
                    src={menu_icon}
                    alt={"menu_icon"}
                    height={35}
                    width={"auto"}
                />
                <Image
                    src={grad_hat_icon}
                    alt={"grad_hat_icon"}
                    height={35}
                    width={"auto"}
                />
            </nav>
        </>
    )
}