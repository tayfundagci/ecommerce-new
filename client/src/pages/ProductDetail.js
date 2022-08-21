import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct } from '../api';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';

function ProductDetail() {

    const { product_id } = useParams();
    const { isLoading, error, data } = useQuery(["product", product_id], () => fetchProduct(product_id))
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message
    console.log(data);

    const images = data.photos.map((url) => ({ original: url }))

    return (
        <div className='text-center'>
            <h4>{data.title}</h4>
            <p>{moment(data.createdAt).format("DD/MM/YYYY")}</p>
            <p>{data.description}</p>
            <div><button className='btn btn-primary'>Add to basket</button></div>
            <div style={{ margin: "20px 0" }}>
                <ImageGallery items={images} />
            </div>

        </div>
    )
}

export default ProductDetail