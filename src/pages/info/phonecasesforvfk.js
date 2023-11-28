import { Inter } from 'next/font/google'
import Header from '../components/header'
import PhoneCases from "../components/info/phonecasesforvfk"
import Footer from "../components/footer"
import styles from "../../styles/components/info/phonecasesforvfk.module.css"
const inter = Inter({ subsets: ['latin'] })

function GraphLinesMain() {
  return (
    <>
    <div className={styles.front_end_apis_page}>
    <div className={styles.front_end_apis_page_wrapper}>
    <div className={styles.front_end_apis_page_header}>
      <Header></Header>
      </div>
      <div className={styles.front_end_apis_page_body}>
      <PhoneCases></PhoneCases>
      </div>
      <div className={styles.front_end_apis_page_footer}>
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
}

export default GraphLinesMain;



