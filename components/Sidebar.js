import Link from 'next/link'
import styles from "../styles/sidebar.module.css"

 const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li className={`${styles.icons} ${styles.github}`}>
                    <Link href="https://github.com/marcos-gonzales">
                        <a target="_blank"><i className={`fa-brands fa-github`}></i></a></Link>
                </li>
                <li className={`${styles.icons} ${styles.linkedin}`}>
                    <Link href="https://www.linkedin.com/in/marcos-gonzales-319425b2/">
                        <a target="_blank"><i className="fa-brands fa-linkedin"></i></a></Link>
                </li>
                <li className={`${styles.icons} ${styles.twitter}`}>
                    <Link href="https://twitter.com/marrky_marrk">
                        <a target="_blank"><i className="fa-brands fa-twitter"></i></a></Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;