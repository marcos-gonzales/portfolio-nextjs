import * as contentful from "contentful";
import Image from 'next/image'
import styles from "../../styles/projects.module.css"

const client = contentful.createClient({
    space: 'n4wpdz8fihx7',
    accessToken: 'RPmhWKiBqQdPLnYhjDT1tr1RCnzZVawVyTaOMZ99ezs',
});

export default function Products(props) {
    return (
        <div style={{display: 'flex', gap: '2em'}}>
            {props.products.map((product, index) => (
                <div key={index}>
                    <h1 className={styles.title}>{product.fields.heading}</h1>
                    <h2>{product.fields.subheading}</h2>
                    <Image
                        src={'http:' + product.fields.image.fields.file.url}
                        height={500}
                        width={500}
                        title={props.images[index].fields.title}
                        alt={props.images[index].fields.title}/>
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
            images: [...images.items]
        }, // will be passed to the page component as props
    }
}
