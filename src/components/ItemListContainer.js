import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayCampeones from "./json/arrayCampeones.json"
import ItemList from "./ItemList"



const ItemListContainer = () => {
    const [item, setItem] = useState([])
    const {id} = useParams ();

    useEffect(() => {
        const  promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayCampeones.filter(item => item.rol === id) : arrayCampeones)
            },2000)
        });

        promesa.then((data) => {
            setItem(data)

        })
    },[id]);

    return (
        <div className="container">
            <div className="row">
                <ItemList item={item} />
            </div>
        </div>       
    )
}

export default ItemListContainer;