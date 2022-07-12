import styles from "../styles/about.module.css"

const About = () => {
    return (
        <>
            <video className={styles.video} autoPlay={true} loop={true} muted={true}>
                <source src="video.mp4" type="video/ogg"/>
            </video>
            <h1 className={styles.about}>Hi, I&apos;m Marcos.</h1>
            <h1 className={styles.about2}>I&aposm a&nbsp;<span className={styles.coloredText}>Software Engineer.</span></h1>
            <h2 className={styles.about3}>Below are some of the projects i&aposve worked on.</h2>
        </>
    )
}

export default About