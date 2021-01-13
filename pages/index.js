import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitor Penna</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hi, I‘m Vitor Penna, a Brazilian fullstack developer!</h1>
      </main>
      <div className={styles.grid}>
      I have experience in:
    </div>
    <h2 className={styles.sec}>Node.js</h2>
    <h2 className={styles.sec}>Reactjs</h2>
    <h2 className={styles.sec}>React Native</h2>
    <h2 className={styles.sec}>JavaScript</h2>
    <h2 className={styles.sec}>Expo</h2>
    <h2 className={styles.sec}>Next.js</h2>
    <h2 className={styles.sec}>CSS</h2>
    <h1 className={styles.grid}>Works: </h1>
        <h1 className={styles.title2}>Android Application: </h1>
        <Link href="https://play.google.com/store/apps/details?id=com.VDv.ClaudioCrachasPlacas&hl=en_US&gl=US">
          <button className={styles.sec2}>  Cláudio Crachás & Placas  </button>
          </Link>
        
    </div>
    
  )
  
}
