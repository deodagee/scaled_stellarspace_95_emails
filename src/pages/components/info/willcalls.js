import { Inter } from 'next/font/google'
import Header from '../components/header'
import WillCalls from "../components/info/willcalls.js"
import Footer from "../components/footer"
import styles from "../../styles/components/info/willcalls.module.css"
const inter = Inter({ subsets: ['latin'] })

function WillCallsPage() {
  return (
    <>
    <div className={styles.front_end_apis_page}>
    <div className={styles.front_end_apis_page_wrapper}>
    <div className={styles.front_end_apis_page_header}>
      <Header></Header>
      </div>
      <div className={styles.front_end_apis_page_body}>
      <WillCalls></WillCalls>
      </div>
      <div className={styles.front_end_apis_page_footer}>
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
}

export default WillCallsPage;



