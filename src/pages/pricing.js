import Header from './components/header'
import Footer from "./components/footer"
import Pricing from "./components/pricing"
import styles from "../styles/components/index.module.css"


function PricingPage () {
  return (
    <>
    <div className={styles.main_whole}>
    <Header></Header>
    <Pricing></Pricing>
    <Footer></Footer>
    </div>
    </>
    )
}

export default PricingPage;

 