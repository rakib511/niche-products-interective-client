import React, { useEffect,useState } from "react";
import useAuth from '../hooks/useAuth'

const MyOrder = () => {
  const { user } = useAuth();
  const [myOrders,setMyOrders] = useState([]);
  const [isdeleted,setIsDeleted] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user?.email,isdeleted]);

  const handleDelete = id =>{
    fetch(`http://localhost:5000/deleteOrder/${id}`,{
      method:"DELETE",
      headers:{"content-type":"application/json"}
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount){
        alert("are you sure cancel?")
          setIsDeleted(true);
      }
      else{
        setIsDeleted(false);

      }
    })
    console.log(id);
  }

  return (
    <div>
      <h1>MyOrders</h1>
      <div className="allproducts ">
        <div className="row mx-auto  container">
                    {
                    myOrders.map(pd => 
                        <div className="col-md-4 col-sm-6">
                            <div >
                            <div className="card mb-1" style={{"width": "18rem"}}>
                                <img src={pd.image} class="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{pd.name} </h5>
                                    <h5 className="card-title">$ {pd.price} </h5>
                                    <p clasNameclassNames="card-text"> {pd.description} </p>
                                    <button onClick={ ()=>handleDelete(pd._id)} className='btn btn-primary'>cancel</button>
                                </div>
                                </div>

                            </div>
                         </div>
                    )
                }
            </div>
    </div>

    </div>
  );
};

export default MyOrder;