import { Inter } from 'next/font/google'
import Header from './components/header'
import Static from "./components/static"
import Footer from "./components/footer"
import styles from "../styles//components/main_tabber.module.css"

const inter = Inter({ subsets: ['latin'] })

function StaticPage() {
  return (
    <>
      <Header></Header>
      <Static></Static>
      <Footer></Footer>
    </>
  )
}

export default StaticPage;

