import { useState, useEffect } from "react";

const Product = ({ product }) => { 
    const [checked, setСhecked] = useState(false);

    useEffect(() => {
        const isChecked = window.localStorage.getItem('ProductCheckedState_' + product.id);
        if (isChecked !== null) setСhecked(JSON.parse(isChecked));
    }, [])

    useEffect(() => {
        window.localStorage.setItem('ProductCheckedState_' + product.id, JSON.stringify(checked));
    }, [checked])

    return (
        <div key={product.id} className={checked ? 'product mainItem checkedProduct shadow' : 'product mainItem shadow'} onClick={() => setСhecked(!checked)}>
            <span key={product.id}>{product.name + "   " + product.count}</span>
        </div>
    );
};

export default Product;