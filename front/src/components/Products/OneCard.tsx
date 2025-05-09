import React from "react";

import IProduct from "../../interfaces/index";

export const OneCard: React.FC<IProduct> = ({id, name, description, price, stock, images}) => {
    return (
        <div>
            <h3>{id}</h3>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <p>{stock}</p>
            <img src={images} alt="Producto aleatorio"  width={400} height={300}></img>
        </div>
    )
}

export default OneCard;