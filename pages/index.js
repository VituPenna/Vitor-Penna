import Head from 'next/head'
import styles from '../styles/Home.module.css'

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
    CONHECIMENTO
    </div>
    <h2 className={styles.sec}>Node.js</h2>
    <h2 className={styles.sec}>Reactjs</h2>
    <h2 className={styles.sec}>React Native</h2>
    <h2 className={styles.sec}>JavaScript</h2>
    
    </div>
    
  )
  
}
