import { Inter } from 'next/font/google'
import Header from './components/header'
import Dynamic from "./components/dynamic"
import Footer from "./components/footer"
import styles from "../styles//components/main_tabber.module.css"

const inter = Inter({ subsets: ['latin'] })

function DynamicPage() {
  return (
    <>
    <div className={styles.main_whole}>
    <div className={styles.main_header}>
      <Header></Header>
      </div>
      <div className={styles.main_middle}>
      <Dynamic></Dynamic>
      </div>
      <div className={styles.main_footer}>
      <Footer></Footer>
      </div>
      </div>

    </>
  )
}

export default DynamicPage;

