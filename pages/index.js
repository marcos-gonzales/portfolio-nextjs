import * as contentful from "contentful";
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/projects.module.css";
import {InView} from 'react-intersection-observer';

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});



export default function Projects(props) {
    let isMobile = true;

    if (typeof window !== "undefined") {
        var width = window.innerWidth;
        width <= 600 ? isMobile = true : isMobile = false;
    }
    console.log(props)

    return (
        <div id="projects" className={styles.container}>
            {props.products.map((project, index) => (
                <div key={index} className={styles.project}>
                        <div>
                            <Link href={project.fields.projectUrl}>
                                <a target="_blank">
                                    {isMobile ?
                                        <video
                                            height="350px"
                                            width="560"
                                            className={`${styles.videos} ${index === 0 ? styles.first : ''}`}
                                            // onMouseOver={(e) => e.target.play()}
                                            // onMouseLeave={(e) => e.target.pause()}
                                            autoPlay={true}
                                            loop={true}
                                            playsInline={true}>
                                            <source src={'https:' + project.fields.image.fields.file.url} type="video/mp4"/>
                                        </video> :
                                        <video
                                            height="350px"
                                            width="560"
                                            className={`${styles.videos} ${styles.videoAnimation} ${index === 0 ? styles.first : ''}`}
                                            onMouseOver={(e) => e.target.play()}
                                            onMouseLeave={(e) => e.target.pause()}
                                            loop={true}
                                            playsInline={true}>
                                            <source src={'https:' + project.fields.image.fields.file.url} type="video/mp4"/>
                                        </video>
                                    }

                                </a>
                            </Link>
                        </div>

                    <InView triggerOnce={true}>
                        {({inView, ref}) => (
                            <div className={`${styles.projectInformation} ${inView ? styles.animation : ''}`} ref={ref}>
                                <h1 className={styles.heading}>{project.fields.heading}</h1>
                                <div>
                                    <h2 className={styles.subheading}>{project.fields.subHeading}</h2>
                                    <div className={styles.subheadingContainer}>
                                        {project.fields.subHeading.includes('Laravel') ?
                                            <Image src="/logo-laravel.svg" className={styles.laravel} height="30"
                                                   width="30" style={{color: 'white'}} alt="Laravel"></Image> : ''}
                                        {project.fields.subHeading.includes('Vue') ?
                                            <Image src="/logo-vue.svg" className={styles.vue} height="30" width="30"
                                                   style={{color: 'white'}} alt="Vue.js"></Image> : ''}
                                        {project.fields.subHeading.includes('React') ?
                                            <Image src="/logo-react.svg" className={styles.react} height="30" width="30"
                                                   style={{color: 'white'}} alt="React"></Image> : ''}
                                        {project.fields.subHeading.includes('Node') ?
                                            <Image src="/logo-nodejs.svg" className={styles.node} height="30" width="30"
                                                   style={{color: 'white'}} alt="Node.js"></Image> : ''}
                                        {project.fields.subHeading.includes('Javascript') ?
                                            <Image src="/logo-javascript.svg" className={styles.js} height="30"
                                                   width="30" style={{color: 'white'}} alt="Javascript"></Image> : ''}
                                        {project.fields.subHeading.includes('Mysql') ?
                                            <Image src="/mysql-icon.svg" className={styles.mysql} height="30" width="30"
                                                   style={{color: 'white'}} alt="Javascript"></Image> : ''}
                                    </div>

                                </div>
                                <div>
                                    <p className={styles.description}>{project.fields.description}</p>
                                </div>
                            </div>
                        )}
                    </InView>

                </div>
            ))}
        </div>
    )
}

export async function getStaticProps(context) {
    const images = await client.getAssets()
    const products = await client.getEntries()

    return {
        props: {
            products: [...products.items],
            images: [...images.items],
        }, // will be passed to the page component as props
    }
}
