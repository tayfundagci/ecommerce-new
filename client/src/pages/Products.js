import React from 'react'
import BootstrapCard from '../components/BootstrapCard'
import { useInfiniteQuery } from '@tanstack/react-query'
import { fetchProductList } from '../api'

function Products() {

    const { data, error, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery(['products'], fetchProductList, {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 12;
            if (!morePagesExist) {
                return;
            }
            return allGroups.length + 1;
        },
    });
    if (status === "loading") return 'Loading...'
    if (status === "error") return 'An error has occurred: ' + error.message

    return (
        <React.Fragment>
            <div className='row justify-content-center'>
                protected routes
                {/* {
                    data.pages.map((group, i) => (
                        <React.Fragment key={i}>
                            {
                                group.map((item) => (
                                    <BootstrapCard key={item._id} item={item} />
                                ))
                            }
                        </React.Fragment>
                    ))
                } */}
            </div>

            {/* <div className='row justify-content-center m-5'>
                <button className='btn btn-primary' onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage} >
                    {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
                </button>
            </div> */}
        </React.Fragment>
    )
}

export default Products