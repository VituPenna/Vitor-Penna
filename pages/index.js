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
        <h1 className={styles.title}>Hi, I‘m Vitor Penna,<br></br> a Brazilian fullstack developer!</h1>
      </main>
      <h1 className={styles.grid}>I have experience in: </h1>
    
    <h2 className={styles.sec}>Node.js</h2>
    <h2 className={styles.sec}>Reactjs</h2>
    <h2 className={styles.sec}>React Native</h2>
    <h2 className={styles.sec}>JavaScript</h2>
    <h2 className={styles.sec}>Expo</h2>
    <h2 className={styles.sec}>Next.js</h2>
    <h2 className={styles.sec}>HTML5</h2>
    <h2 className={styles.sec}>CSS</h2>
    <h1 className={styles.grid}>Works: </h1>
    
        <h1 className={styles.title2}>Android Application: </h1>
        
        <a href="https://play.google.com/store/apps/details?id=com.VDv.ClaudioCrachasPlacas&hl=en_US&gl=US" className={styles.sec2}>Cláudio Crachás & Placas</a>
         <h1 className={styles.grid}>Contact: </h1>
         <a href="https://linkedin.com/in/vitorpenna"className={styles.sec2}>Linkedin</a>
         <h2 className={styles.sec}>WhatsApp: +55 (71) 988427565</h2>
              
    </div>
   
  )
  
}
