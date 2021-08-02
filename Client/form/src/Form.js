import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Form = () => {
  const url = "http://localhost:5000/submit";
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function submit(e) {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      password: data.password,
    });
    setData({name: "", phone:"", email:"", password:""})
  }

  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-12 d-flex justify-content-center">
          <h3>Sign Up</h3>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-12 d-flex justify-content-center">
          <form onSubmit={(e) => submit(e)}>
            <div class="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="name"
                class="form-control"
                id="name"
                onChange={(e) => handle(e)}
                value={data.name}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Phone</label>
              <input
                type="Number"
                class="form-control"
                id="phone"
                onChange={(e) => handle(e)}
                value={data.phone}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                onChange={(e) => handle(e)}
                value={data.email}
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                onChange={(e) => handle(e)}
                value={data.password}
                required
              />
            </div>
            <button type="submit" class="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
