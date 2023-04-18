import React from "react";
import Card from 'react-bootstrap/Card';

const ItemDetail = ({item}) => {
    return (
            <div className="row" id="itemdetail">
                <Card style={{ width: '14rem'}}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title className="color-letra">{item.nombre}</Card.Title>
                <Card.Text className="color-letra">{item.rol}</Card.Text>
                <Card.Text className="color-letra">💎{item.precio}</Card.Text>
                </Card.Body>
                </Card>
            </div>
    )
}


export default ItemDetail;