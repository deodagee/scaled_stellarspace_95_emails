import { Inter } from 'next/font/google'
import Header from '../components/header'
import Graphlines from "../components/info/graphlines"
import Footer from "../components/footer"
import styles from "../../styles/components/info/graphlines.module.css"
const inter = Inter({ subsets: ['latin'] })

function GraphlinesMain() {
  return (
    <>
    <div className={styles.front_end_apis_page}>
    <div className={styles.front_end_apis_page_wrapper}>
    <div className={styles.front_end_apis_page_header}>
      <Header></Header>
      </div>
      <div className={styles.front_end_apis_page_body}>
      <Graphlines></Graphlines>
      </div>
      <div className={styles.front_end_apis_page_footer}>
      <Footer></Footer>
      </div>
      </div>
      </div>
    </>
  )
}

export default GraphlinesMain;



