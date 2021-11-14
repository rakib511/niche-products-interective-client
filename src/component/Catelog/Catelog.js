import React from 'react';
import { Link } from 'react-router-dom';

const Catelog = (props) => {
    const {name,img,price} = props.pd;
    return (
        <div className="col-md-4 col-sm-6">
            
            <div >
            <div className="card mb-1" style={{"width": "18rem"}}>
                <img src={img} class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name} </h5>
                    <h5 className="card-title">$ {price} </h5>
                    
                    <Link to='/moreProducts'><button className="btn btn-primary">Explore Products</button></Link>
                </div>
                </div>

            </div>
            
        </div>
    );
};

export default Catelog;