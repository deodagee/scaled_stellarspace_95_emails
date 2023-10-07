import { Inter } from 'next/font/google'
import Header from '../components/header'
import HostgatorVercel from "../components/info/hostgatorvercel.js"
import Footer from "../components/footer"
import styles from "../../styles/components/info/applicationinterfaces.module.css"
const inter = Inter({ subsets: ['latin'] })

function Apis() {
  return (
    <>
    <div className={styles.front_end_apis_page}>
    <div className={styles.front_end_apis_page_wrapper}>
    <div className={styles.front_end_apis_page_header}>
      <Header></Header>
      </div>
      <div className={styles.front_end_apis_page_body}>
      <HostgatorVercel></HostgatorVercel>
      </div>
      <div className={styles.front_end_apis_page_footer}>
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
}

export default Apis;

