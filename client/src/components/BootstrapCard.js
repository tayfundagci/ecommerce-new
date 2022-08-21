import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import moment from "moment";
import { Link } from "react-router-dom"

function BootstrapCard({ item }) {
    return (
        <Link to={`/product/${item._id}`} style={{ textDecoration: "none" }}>
            <Card id="cardd" className='text-center border-white m-2 p-2 text-white' style={{ width: '18rem', backgroundColor: "#282c35" }}>
                <Card.Img variant="top" src={item.photos} className='p-1' style={{ maxHeight: "200px" }} loading="lazy" />
                <Card.Body>
                    <Card.Text>{moment(item.createdAt).format("DD/MM/YYYY")}</Card.Text>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        <span>{`${item.price} TL`}</span>
                    </Card.Text>
                    <Button className='border-secondary' style={{ backgroundColor: "#282c32" }} >Add to basket</Button>
                </Card.Body>
            </Card>
        </Link>
    );
}

export default BootstrapCard