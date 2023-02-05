import Link from 'next/link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// components
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import NavArrows from '@/components/NavArrows'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
        <Header
            title='Home'
            metaContent='Assignment #1 - Home Page'
        />
        <div className={styles.home_page}>
            <NavBar/>
            <main>
                <div className={styles.main__content}>
                    <h1>An investment in knowledge pays the best interest.</h1>
                    <p>
                        Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
                    </p>
                    <div className={styles.main__content_buttons}>
                        <Link href='/about'>
                            <button>More About Us</button>
                        </Link>
                        <Link href='/contact'>
                            <button>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </main>
            <NavArrows linkArrowDown='/about' />
        </div>
        </>
    )
}
