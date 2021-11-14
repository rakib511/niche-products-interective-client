import React,{useState,useEffect} from 'react';

const ShowRevew = () => {
    const [reviews,setReview] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/addsReview')
        .then(res => res.json())
        .then(data => setReview(data))
        console.log(reviews);
    },[])
    return (
        <div>
            <h2>Reviews</h2> <hr />
            <div className="allproducts ">
                <div className="row mx-auto  container">
                            {
                            reviews.map(pd => <div className='col-md-3 col-sm-6 my-5 my-5'>
                                    <div >
                                        <div>
                                            <div>
                                                <h6>{pd.email}</h6>
                                                <p>{pd.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                               
                            </div> )
                        }
                    </div>
            </div>
            
        </div>
    );
};

export default ShowRevew;