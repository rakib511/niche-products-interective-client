import React, { useState,useEffect } from 'react';
import Catelog from './Catelog';

const Catelogs = () => {
    const [catelogs,setCatelogs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/catelogs')
        .then(res => res.json())
        .then(data => setCatelogs(data))
    },[])
    return (
        <div>
           <div className='py-5 mb-5'>
               <h1>Advanced Natural <br/> Skin Care Products <br/> for Your Baby</h1>
           </div>

           <div className="allproducts ">
                <div className="row mx-auto  container">
                            {
                            catelogs.map(pd => <Catelog
                            key={pd.name}
                            pd={pd}
                            
                            ></Catelog>)
                        }
                    </div>
            </div>
        </div>
    );
};

export default Catelogs;