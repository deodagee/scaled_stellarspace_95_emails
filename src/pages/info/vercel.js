import { Inter } from 'next/font/google'
import Header from '../components/header'
import VercelPage from "../components/info/vercel.js"
import Footer from "../components/footer"
import styles from "../../styles/components/info/threedrenders.module.css"
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
      <VercelPage></VercelPage>
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

