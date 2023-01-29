import Head from "next/head"

export default function Header({
    title = "",
    metaContent = "",
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title"  content={metaContent} />
            <meta property="og:description"  content="BCIT Digital Design and Development Diploma" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="/image/png" href="/favicon.png" />
        </Head>
    )
}