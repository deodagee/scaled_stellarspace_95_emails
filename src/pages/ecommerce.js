import { Inter } from 'next/font/google'
import Header from './components/header'
import Ecommerce from "./components/ecommerce"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

function EcommercePage() {
  return (
    <>

      <Header></Header>
      <Ecommerce></Ecommerce>
      <Footer></Footer>
    </>
  )
}

export default EcommercePage;

