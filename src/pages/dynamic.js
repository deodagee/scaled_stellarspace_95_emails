import { Inter } from 'next/font/google'
import Header from './components/header'
import Dynamic from "./components/dynamic"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

function DynamicPage() {
  return (
    <>
      <Header></Header>
      <Dynamic></Dynamic>
      <Footer></Footer>
    </>
  )
}

export default DynamicPage;

