import React from 'react';
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {

    const navigate = useNavigate();

    const handleDetail = ()=> {
    console.log("Dirigete Hacia el Detail");
    navigate(`/detail/${product.id}`)
    }

    return (
    <div style={
        {
        width: '200px',
        height: '240px',
        margin: '20px',
        backgroundColor: 'lightblue',
        border: 0,
        padding: '30px',
        fontSize: '25px',
        boxShadow: '3px 4px 9px 2px rgba(0, 0, 0, 0.85)'
        }}
        onClick={handleDetail}
    > {product.title}</div >
    )
}

export default Item