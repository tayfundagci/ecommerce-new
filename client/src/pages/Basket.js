import React from 'react'
import { ToastContainer } from 'react-toastify';
import BootstrapCardWithoutMoment from '../components/BootstrapCardWithoutMoment';
import OrderModal from '../components/OrderModal';
import { useBasket } from "../contexts/BasketContext"

function Basket() {
    const { items } = useBasket()
    const total = items.reduce((acc, obj) => acc + obj.price, 0)
    return (
        <div>
            <ToastContainer theme='light' style={{ marginTop: "120px" }} />
            {items.length < 1 && <div className='alert alert-warning'>There is no product in your basket</div>}
            {items.length > 0 && (
                <>
                    <div className='text-center h4'>Total: {total} TL <OrderModal /> </div>
                    <div className='row justify-content-center'>
                        {
                            items.map((item) => (
                                <BootstrapCardWithoutMoment key={item._id} item={item} />
                            ))
                        }
                    </div>

                </>
            )}
        </div>
    )
}

export default Basket