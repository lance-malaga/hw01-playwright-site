import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import downArrow from '@/public/icons/downwardArrow.png'

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
        <link rel="icon" href="../public/favicon.png" />
        {/* fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head>
      <main className={styles.main}>
        <h1>An investment in knowledge pays the best interest.</h1>
        <p>
          Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.
        </p>
        <a>
          <button>More About Us</button>
        </a>
        <a>
          <button>Contact Us</button>
        </a>
      </main>
      <a>
        <span>
          <Image
            src={downArrow}
            alt={downArrow}
            height={50}
            width={"auto"}
          />
        </span>
      </a>
    </>
  )
}
