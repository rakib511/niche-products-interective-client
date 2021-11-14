import React, { useState,useEffect } from 'react';
import SingleProducts from '../SingleProducts/SingleProducts';

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
        console.log(products);
    },[])
    return (
        <div>
            <h2 className='mb-5'>Our  Products</h2>
            <div className="allproducts ">
                <div className="row mx-auto  container">
                            {
                            products.map(pd => <SingleProducts
                            key={pd.name}
                            pd={pd}
                            
                            ></SingleProducts>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default Products;