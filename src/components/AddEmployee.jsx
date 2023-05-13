import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import swal from "sweetalert";

const AddEmployee = () => {
  const [fullname, setName] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [employeeID, setEmployeeID] = useState("");
  const [position, setPosition] = useState("");
  const [dateOfHire, setDateOfHire] = useState("");
  const [dateOfTermination, setDateOfTermination] = useState("");
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  const saveProduct = async (e) => {
    e.preventDefault();
    const user = {
        fullname,
        dateOfBirth,
        gender,
        image: image,
        phone,
        employeeID,
        position,
        dateOfHire,
        dateOfTermination,
    
    };

    if (
        user.fullname.length <= 0 ||
        user.dateOfBirth.length <= 0 ||
        user.gender.length <= 0 ||
        user.image.length <= 0 ||
        user.phone.length <= 0 ||
        user.employeeID.length <= 0 ||
        user.position.length <= 0 ||
        user.dateOfHire.length <= 0 ||
        user.dateOfTermination.length
   
    ) {
      setErrors(true);
      return;
    }

    //must check endpoint
    axios
      .post(`${process.env.REACT_APP_API}/inventory/products`, user)
      .then((response) => {
        swal({
          title: "Employee Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(`/store/store-admin-products`);
        });
      });
  };

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className=" store-form-outer-layer">
        <h2 className="display-6"> Add User to System </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter the details of the new product
        </small>

        {errors && (
          <div className="text-danger mt-4 text-center">
            All the fields are required! Please fillout all the fields to add
            product to the store
          </div>
        )}

        <div className="store-add-product-form-inner  py-4">
          <form>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">Full_Name</label>
              <input
                type="text"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="Full_Name"
                value={fullname}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div id="store-form-group" className="form-group mt-2">
              <label className="my-1">Date Of Birth</label>
              <input
                type="date"
                class={`form-control ${errors.nameError && "is-invalid"}`}
                aria-describedby="emailHelp"
                placeholder="DateOfBirth"
                value={dateOfBirth}
                onChange={(e) => {
                  setdateOfBirth(e.target.value);
                }}
              />
            </div>
             <div className="form-group my-4">
              <label className="my-1">Gender</label>
              <input
                type="text"
                className="form-control"
                placeholder="Gender"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </div>
            <div className="form-group my-4">
              <label className="my-1">Image</label>
              <input
                type="number"
                className="form-control"
                placeholder="Image"
                value={image}
                onChange={(e) => {
                  setImage(e.target.value);
                }}
              />
            </div>

           

            <div className="form-group my-4">
              <label className="my-1">Phone</label>
              <input
                type="number"
                className="form-control"
                placeholder="Phone"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Employee ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Employee ID"
                value={employeeID}
                onChange={(e) => {
                  setEmployeeID(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Position</label>
              <input
                type="number"
                className="form-control"
                placeholder="Position"
                value={position}
                onChange={(e) => {
                  setPosition(e.target.value);
                }}
              />
            </div>

            <div className="form-group mt-4">
              <label className="my-1">Date Of Hire</label>
              <input
                type="date"
                className="form-control mb-2"
                value={dateOfHire}
                onChange={(e) => {
                  setDateOfHire(e.target.value);
                }}
                placeholder="Date Of Hire"
              />
            </div>

            <div className="form-group mt-4">
              <label className="my-1">Date Of Termination</label>
              <input
                type="date"
                className="form-control mb-2"
                value={dateOfTermination}
                onChange={(e) => {
                  setDateOfTermination(e.target.value);
                }}
                placeholder="Date Of Termination"
              />
            </div>
            
            <button
              type="submit"
              id="product-details-buy-now"
              className="btn product-details-buy-now w-100"
              onClick={saveProduct}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
