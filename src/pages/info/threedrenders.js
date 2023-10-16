import { Inter } from 'next/font/google'
import Header from '../components/header'
import Threedrenderspage from "../components/info/threedrenders.js"
import Footer from "../components/footer"
import styles from "../../styles/components/info/faq.module.css"
const inter = Inter({ subsets: ['latin'] })

function threedrenders() {
  return (
    <>
    <div className={styles.front_end_apis_page}>
    <div className={styles.front_end_apis_page_wrapper}>
    <div className={styles.front_end_apis_page_header}>
      <Header></Header>
      </div>
      <div className={styles.front_end_apis_page_body}>
      <Threedrenderspage></Threedrenderspage>
      </div>
      <div className={styles.front_end_apis_page_footer}>
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
}

export default threedrenders;

