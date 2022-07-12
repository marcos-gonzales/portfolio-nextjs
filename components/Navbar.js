import Link from "next/link";
import styles from "../styles/nav.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <Link href="#projects" scroll={true}>Projects</Link>
            </ul>
        </nav>
    )
}

export default Navbar;