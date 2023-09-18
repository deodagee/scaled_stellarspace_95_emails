import { Inter } from 'next/font/google'
import Header from './components/header'
import Static from "./components/static"
import Footer from "./components/footer"
import styles from "../styles//components/main_tabber.module.css"

const inter = Inter({ subsets: ['latin'] })

function StaticPage() {
  return (
    <>
    <div className={styles.main_whole}>
    <div className={styles.main_header}>
      <Header></Header>
      </div>
      <div className={styles.main_static}>
      <Static></Static>
      </div>
      <div className={styles.main_footer}>
      <Footer></Footer>
      </div>
      </div>

    </>
  )
}

export default StaticPage;

