import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
// components
import NavBar from '@/components/NavBar'
// images
import down_arrow from '@/public/icons/downwardArrow.png'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title"  content="Assignment #1 - Home Page" />
        <meta property="og:description"  content="BCIT Digital Design and Development Diploma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* icon */}
        <link rel="icon" type="/image/png" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <NavBar/>
        <div>
          <div className={styles.main__content}>
            <h1>An investment in knowledge pays the best interest.</h1>
            <hr/>
            <p>
              Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
            </p>
            <div className={styles.main__content_buttons}>
              <a>
                <button>More About Us</button>
              </a>
              <a>
                <button>Contact Us</button>
              </a>
            </div>
          </div>
          <a>
            <span>
              <Image
                src={down_arrow}
                alt={"down_arrow"}
                className={styles.down_arrow}
                height={40}
                width={"auto"}
              />
            </span>
          </a>
        </div>
      </main>
    </>
  )
}
