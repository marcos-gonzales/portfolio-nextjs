import Navbar from "./Navbar";
import About from "./About";
import NewSection from "./NewSection"
import styles from "../styles/layout.module.css";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
            <div className={styles.showcase}>
                <Navbar/>
                <Sidebar />
                <About/>
                {children}
            </div>
    )
}

export default Layout