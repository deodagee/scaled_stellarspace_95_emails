import { Inter } from 'next/font/google'
import Header from './components/header'
import Static from "./components/static"
import Footer from "./components/footer"

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

