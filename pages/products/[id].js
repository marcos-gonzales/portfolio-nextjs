import * as contentful from "contentful";
import { useRouter} from 'next/router';

const client = contentful.createClient({
    space: 'n4wpdz8fihx7',
    accessToken: 'RPmhWKiBqQdPLnYhjDT1tr1RCnzZVawVyTaOMZ99ezs',
});

const Product = (props) => {
    const router = useRouter();
    const { id } = router.query;

    console.log(props.products)
    return (
        <div>
            hello {id}
            {/*props {props}*/}
        </div>
    )
}

export default Product