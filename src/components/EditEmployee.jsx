import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import swal from "sweetalert";

const StoreAdminProductsEdit = () => {
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
  
  //const [errors, setErrors] = useState("");

  const { uid } = useParams();

  const saveUser = async (e) => {
    e.preventDefault();
    const user = {
        fullname,
        dateOfBirth,
        image: image,
        gender,
        phone,
        employeeID,
        position,
        dateOfHire,
        dateOfTermination,
    };

    axios
      .put(`${process.env.REACT_APP_API}/inventory/products/${pid}`, product)
      .then((response) => {
        swal({
          title: "User Updated Successfully!",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#12af39",
          className: "store-swal-button",
        }).then(() => {
          navigate(-1);
        });
      });
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/inventory/products/${pid}`).then((res) => {
      setName(res.data.name);
      setdateOfBirth(res.data.dateOfBirth);
      setImage(res.data.image);
      setPrice(res.data.price);
      setPhone(res.data.phone);
      setEmployeeID(res.data.employeeID);
      setPosition(res.data.position);
      setDateOfHire(res.data.dateOfHire);
      setDateOfTermination(res.data.dateOfTermination);
    });
  }, [uid]);

  return (
    <div className="store-add-product py-4 d-flex align-items-center flex-column justify-content-center">
      <div className="store-admin-edit-form p-4">
        <h2 className="display-6"> Edit Product on Store </h2>
        <small id="emailHelp" className="form-text text-muted">
          Enter thenew details that you need to edit
        </small>

        <div className="store-add-product-form-inner  py-4">
          <form>
            <div className="form-group my-2">
              <label className="my-1">Full Name</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Name"
                value={fullname}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            
            <div className="form-group my-4">
              <label className="my-1">Date Of Birth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Date Of Birth"
                value={dateOfBirth}
                onChange={(e) => {
                  setdateOfBirth(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-4">
              <label className="my-1">Gender</label>
              <textarea
                type="text"
                className="form-control"
                placeholder="Description"
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
              <label className="my-1">Unit Price</label>
              <input
                
                className="form-control"
                placeholder="Unit Price"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>


            <div className="form-group my-4">
              <label className="my-1">Employee ID</label>
              <input
                type="number"
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

            <div className="form-group my-2">
              <label className="my-1">Date Of Hire</label>
              <input
                type="date"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Date Of Hire"
                value={category}
                onChange={(e) => {
                  setDateOfHire(e.target.value);
                }}
              />
            </div>

            <div className="form-group my-2">
              <label className="my-1">Date Of Termination</label>
              <input
                type="date"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Date Of Hire"
                value={dateOfTermination}
                onChange={(e) => {
                  setDateOfTermination(e.target.value);
                }}
              />
            </div>


            <button
              type="submit"
              className="btn w-100"
              onClick={saveUser}
              style={{ background: "rgb(18, 175, 57)", color: "white" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StoreAdminProductsEdit;
