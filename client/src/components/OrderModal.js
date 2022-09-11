import { useRef, useState } from 'react'
import { postOrder } from '../api';
import { useBasket } from '../contexts/BasketContext';
import { toast } from 'react-toastify';

function OrderModal() {
    const { items, emptyBasket } = useBasket();
    const [address, setAdress] = useState('');

    const handleSubmitForm = async () => {
        const itemIds = items.map((item) => item._id);
        const input = {
            address,
            items: JSON.stringify(itemIds)
        }
        const response = await postOrder(input);
        emptyBasket();
        toast.success('Order succesfull', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            pauseOnHover: true,
            draggable: true,
        });
        console.log(response);
    }

    return (
        <div className='text-dark'>
            <button type="button" className="btn btn-primary pl-5 pr-5" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Order</button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content w-100">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Order</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="recipient-name" placeholder='Address' value={address} onChange={(e) => setAdress(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSubmitForm}>Save</button>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}

export default OrderModal