import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Col, Row, CardGroup, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./redux/actions";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./style.css";
export const EmpDetails = () => {
  const params = useParams();
  const history = useHistory();
  const getemptDataFromRedux = useSelector((state) => state.userList);
  const id = params.id - 1;
  const data = getemptDataFromRedux.data[id];

  const [name, setName] = useState(data.name);
  const [phone, setPhone] = useState(data.phone);
  const [email, setEmail] = useState(data.email);
  const [website, setWebsite] = useState(data.website);

  const dispatch = useDispatch();
  const userList = [
    { id: id, name: name, phone: phone, email: email, website: website },
  ];
  const handleSubmit = (event) => {
    dispatch(updateUser(userList));
    event.preventDefault();
    alert("Updated Successfully");
  };
  return (
    <>
      <a
        onClick={() => {
          history.goBack();
        }}
      >
        <h5 style={{ textAlign: "left" }}>Home Page</h5>
      </a>
      <Card>
        <div className="App">
          <header className="App-header">
            <form onSubmit={handleSubmit}>
              <Card.Body>
                <h2> Employee Form </h2>
                <img src={data.image} className="image" />
                <label>Name:</label>
                <br />
                <input
                  type="text"
                  value={name}
                  required
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                <br />
                <label>phone:</label>
                <br />
                <input
                  type="text"
                  value={phone}
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <br />
                <label>Email:</label>
                <br />
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <br />
                <label>Website:</label>
                <br />
                <input
                  type="text"
                  value={website}
                  required
                  onChange={(e) => {
                    setWebsite(e.target.value);
                  }}
                />
                <br />
              </Card.Body>
              <Card.Footer>
                <input
                  type="button"
                  value="Home Page"
                  onClick={() => {
                    history.goBack();
                  }}
                />
                <input type="submit" value="Save" style={{ marginLeft: 80 }} />
              </Card.Footer>
            </form>
          </header>
        </div>
      </Card>
    </>
  );
};
