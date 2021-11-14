import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";



const Details = () => {
    const { user } = useAuth();

    const {productId} = useParams();
    const [productDetails,setProductDetails] = useState({});

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        data.email = user?.email;
        data.status = "pending";
        fetch('http://localhost:5000/addOrders',{
          method:"POST",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(data)
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
          });
          // console.log(data);
      };  


    useEffect(()=>{
        fetch(`http://localhost:5000/productDetails/${productId}`)
        .then(res => res.json())
        .then(data => setProductDetails(data))
    },[])

    return (
        <div>
        <div className="details-container">
          <div className="row container">
            <div className="col-md-6">
              <img className="w-50" src={productDetails.image} alt="" />
              <p>{productDetails?.description}</p>
              <h1>{productDetails?.name}</h1>
              <h1> {productDetails?.price}</h1>
            </div>
            <div className="col-md-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name")}
                  placeholder="Name"
                  defaultValue={productDetails?.name}
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("description")}
                  defaultValue={productDetails?.description}
                  placeholder="Description"
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("image", { required: true })}
                  placeholder="Image Link"
                  defaultValue={productDetails?.img}
                  className="p-2 m-2 w-100 input-field"
                />

                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  defaultValue={productDetails?.price}
                  type="number"
                  className="p-2 m-2 w-100 input-field"
                />

                <select {...register("model")} className="p-2 m-2 w-100">
                  <option value="premium">premium</option>
                  <option value="classic">classic</option>
                  <option value="business">business</option>
                </select>
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Order now"
                  className="btn btn-info w-50"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;