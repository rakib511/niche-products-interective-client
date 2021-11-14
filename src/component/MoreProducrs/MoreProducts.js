import React,{useState,useEffect} from 'react';
import ExploreProducts from '../ExplorePoducts/ExploreProducts';

const MoreProducts = () => {
    const [moreProducts,setMoreProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/moreProducts')
        .then(res =>res.json())
        .then(data => setMoreProducts(data))
    },[])
    return (
        <div>
            <h2 className='mb-5'>The best colletion</h2> <hr/>
            <div className="allproducts ">
                <div className="row mx-auto  container">
                            {
                            moreProducts.map(pd => <ExploreProducts
                            key={pd.name}
                            pd={pd}
                            
                            ></ExploreProducts>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default MoreProducts;