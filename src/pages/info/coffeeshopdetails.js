import { Inter } from 'next/font/google'
import Header from '../components/header'
import Coffeeshopdetailspage from "../components/info/coffeeshopdetails"
import Footer from "../components/footer"
import styles from "../../styles/components/info/chatappdetails.module.css"
const inter = Inter({ subsets: ['latin'] })

function Coffeeshopdetails() {
  return (
    <>
    <div className={styles.front_end_apis_page}>
    <div className={styles.front_end_apis_page_wrapper}>
    <div className={styles.front_end_apis_page_header}>
      <Header></Header>
      </div>
      <div className={styles.front_end_apis_page_body}>
      <Coffeeshopdetailspage></Coffeeshopdetailspage>
      </div>
      <div className={styles.front_end_apis_page_footer}>
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
}

export default Coffeeshopdetails;



