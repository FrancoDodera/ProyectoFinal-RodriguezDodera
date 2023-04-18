import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none" >
            <div className="separdor">
            <Card style={{ width: '14rem'}}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
                <Card.Title className="color-letra">{item.nombre}</Card.Title>
                <Card.Text className="color-letra">💎{item.precio}</Card.Text>
            </Card.Body>
            </Card>
            </div>
        </Link>
        
    )
}

export default Item;