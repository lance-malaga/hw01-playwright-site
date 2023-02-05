import { useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
// assets
import menu_icon from '@/public/icons/menu-icon.png'
import grad_hat_icon from '@/public/icons/graduation-hat.png'
import menu from '@/public/background-images/menuBackground.png'
import Link from 'next/link'

export default function NavBar () {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <Image
                    src={menu_icon}
                    alt={"menu_icon"}
                    height={35}
                    width={"auto"}
                    onClick={() => setShowMenu(true)}
                />
                <Image
                    src={grad_hat_icon}
                    alt={"grad_hat_icon"}
                    height={35}
                    width={"auto"}
                />
            </nav>
            {showMenu && (
                <div className={styles.menu}>
                    <Image
                        src={menu}
                        alt={'menu-background'}
                        width={"auto"}
                        height={300}
                    />
                    <div>
                        <h1 onClick={() => setShowMenu(false)}>X</h1>
                        <ul>
                            <li>
                                <Link href='/'> Home </Link>
                            </li>
                            <li>
                                <Link href='/about'> About </Link>
                            </li>
                            <li>
                                <Link href='/contact'> Contact </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}