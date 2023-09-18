import { Inter } from 'next/font/google'
import Header from './components/header'
import Dynamicplus from "./components/dynamicplus"
import Footer from "./components/footer"
import styles from "../styles//components/main_tabber.module.css"

const inter = Inter({ subsets: ['latin'] })

function DynamicPlusPage() {
  return (
    <>
    <div className={styles.main_whole}>
    <div className={styles.main_header}>
      <Header></Header>
      </div>
      <div className={styles.main_middle}>
      <Dynamicplus></Dynamicplus>
      </div>
      <div className={styles.main_footer}>
      <Footer></Footer>
      </div>
      </div>

    </>
  )
}

export default DynamicPlusPage;

