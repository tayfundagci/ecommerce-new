import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import { Link } from "react-router-dom"
import { useBasket } from "../contexts/BasketContext"

function BootstrapCard({ item }) {

    const { addToBasket, items } = useBasket();
    const findBasketItem = items.find((basket_item) => basket_item._id === item._id)


    return (
        <Card id="cardd" className='text-center border-white m-2 p-2 text-white' style={{ width: '18rem', backgroundColor: "#282c35" }}>
            <Link to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
                <Card.Img variant="top" src={item.photos} className='p-1' style={{ maxHeight: "200px" }} loading="lazy" />
            </Link>
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    <span>{`${item.price} TL`}</span>
                </Card.Text>
                <Button className={findBasketItem ? "btn btn-warning" : "btn btn-primary"} onClick={() => addToBasket(item, findBasketItem)}  >
                    {
                        findBasketItem ? 'Remove from basket' : 'Add to basket'
                    }
                </Button>
            </Card.Body>
        </Card>
    );
}

export default BootstrapCard