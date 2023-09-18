import { Inter } from 'next/font/google'
import Header from './components/header'
import Body from "./components/body"
import Footer from "./components/footer"
import styles from "../styles/components/index.module.css"

const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <>

    <div className={styles.main_whole}>
      <Header></Header>

      <div className={styles.body_index}>
      <Body></Body>
      </div>
      <Footer></Footer>
      </div>

    </>
  )
}

export default Home;

