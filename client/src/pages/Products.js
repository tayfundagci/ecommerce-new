import React from 'react'
import BootstrapCard from '../components/BootstrapCard'
import { useQuery } from '@tanstack/react-query'
import { fetchProductList } from '../api'

function Products() {

    const { isLoading, error, data } = useQuery(['products'], fetchProductList);
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='row justify-content-center'>
            {
                data.map((item, key) => <BootstrapCard key={key} item={item} />)
            }
        </div>
    )
}

export default Products