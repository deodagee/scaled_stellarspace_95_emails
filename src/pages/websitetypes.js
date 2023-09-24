import { Inter } from 'next/font/google'
import Header from './components/header'
import WebsTypes from "./components/info/websitetypes"
import Footer from "./components/footer"

const inter = Inter({ subsets: ['latin'] })

function WebsiteTypes() {
  return (
    <>
      <Header></Header>
      <WebsTypes></WebsTypes>
      <Footer></Footer>
    </>
  )
}

export default WebsiteTypes;

