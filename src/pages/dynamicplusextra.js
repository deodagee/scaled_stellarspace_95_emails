import { Inter } from 'next/font/google'
import Header from './components/header'
import DynamicPlusExtra from "./components/dynamicplusextra"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

function EcommercePage() {
  return (
    <>

      <Header></Header>
      <DynamicPlusExtra></DynamicPlusExtra>
      <Footer></Footer>
    </>
  )
}

export default EcommercePage;

