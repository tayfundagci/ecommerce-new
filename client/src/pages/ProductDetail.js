import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct } from '../api';
import moment from 'moment';
import ImageGallery from 'react-image-gallery';
import { useBasket } from '../contexts/BasketContext';

function ProductDetail() {

    const { addToBasket, items } = useBasket();
    const { product_id } = useParams();
    const findBasketItem = items.find((item) => item._id === product_id)

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
            <div>
                <button className={findBasketItem ? "btn btn-warning" : "btn btn-success"} onClick={() => addToBasket(data, findBasketItem)}>
                    {findBasketItem ? 'Remove from basket' : 'Add to basket'}
                </button>
            </div>
            <div style={{ margin: "20px 0" }}>
                <ImageGallery items={images} />
            </div>

        </div>
    )
}

export default ProductDetail