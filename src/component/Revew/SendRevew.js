import React from "react";
import { useForm } from "react-hook-form";
import useAuth from '../hooks/useAuth';

const SendRevew = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://infinite-lowlands-89222.herokuapp.com/addsReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    // console.log(data);
    
  };
//   console.log(handleSubmit);
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default SendRevew;