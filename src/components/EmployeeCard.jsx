import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./Store.css";
import EmployeeCardSingle from "./EmployeeCardSingle";

const EmployeeCard = () => {
  let params = useParams();
  const [users, setUsers] = useState(undefined);

  //must check endpoint
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/store/products/${params.category}`)
      .then((res) => {
        setUsers(res.data.users);
      });
  }, [params.category]);

  const onSearch = (e) => {
    const pName = e.target.value;
//must check endpoint
    if (pName === "") {
      axios
        .get(`http://localhost:8000/api/store/products/${params.category}`)
        .then((res) => {
          setUsers(res.data.users);
        });
    } else {
      const newUsers = users?.filter((u) =>
        u.name.toLowerCase().startsWith(pName)
      );

      setUsers(newUsers);
    }
  };

  return (
    <div className="store-container min-vh-100">
      <div className="latest-store-details-cover position-relative">
        <img src="https://i.ibb.co/rkfrhCm/banner18.webp" alt="" />
        <div className="store-products-top text-secondary position-absolute top-50 start-50 translate-middle">
          <p>
            Home  Users 
            {params.category.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })}
          </p>
        </div>
      </div>

      <div className="store-search-bar45645461212 col-5 px-5">
        <input
          type="text"
          class="form-control mb-2 mr-sm-2"
          id="inlineFormInputName2"
          placeholder="Search for a product"
          onChange={onSearch}
        />
      </div>

      <div className="products-list row p-5">
        {users &&
          users.map((user) => (
            <div className="col mt-4">
              <EmployeeCardSingle
                key={user._id}
                img={user.fullname}
                gender={user.gender}
                phone={user.phone}
                id={user._id}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default EmployeeCard;
