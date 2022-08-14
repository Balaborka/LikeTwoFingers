import { useState } from "react";

const Product = ({ product }) => { 
    const [checked, set_checked] = useState(false);

    return (
        <div key={product.id} className={checked ? 'product mainItem checkedProduct shadow' : 'product mainItem shadow'} onClick={() => set_checked(!checked)}>
            <span key={product.id}>{product.name + "   " + product.count}</span>
        </div>
    );
};

export default Product;