import React, { useEffect, useState } from "react";
import { Card, Col, Row, CardGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { SAMPLE_DATA } from "./constants";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import styles from "./style.css";

export const Employee = () => {
  const [empList, setEmpList] = useState(SAMPLE_DATA.data);
  const [isItemDeleted, setIsItemDeleted] = useState(false);
  const [isItemUpdated, setIsItemUpdated] = useState(false);
  const [addFavorite, setAddFavorite] = useState(false);
  const [removeFavorite, setRmoveFavorite] = useState(false);

  const deleteEmpData = (key) => {
    var newArray = empList.slice();
    newArray.splice(key, 1);
    setEmpList(newArray);
    setIsItemDeleted(true);
  };

  const editEmptData = (key) => {
    var newEditArray = empList.slice();
    newEditArray[key].name = "Arun Billur";
    newEditArray[key].email = "arun.billur@valuelabs.com";
    newEditArray[key].phone = "918105744625";
    newEditArray[key].website = "www.valuelabs.com";

    setEmpList(newEditArray);
    setIsItemUpdated(true);
  };

  const addRemoveFavorite = (key) => {
    var favoriteList = empList.slice();
    favoriteList[key].favorite = !empList[key].favorite;
    setEmpList(favoriteList);
    if (empList[key].favorite) {
      setAddFavorite(true);
    } else {
      setRmoveFavorite(true);
    }
  };

  useEffect(() => {
    if (isItemDeleted) {
      alert("Deleted Successfully");
      setIsItemDeleted(false);
    }
    if (isItemUpdated) {
      alert("Updated Successfully");
      setIsItemUpdated(false);
    }
    if (addFavorite) {
      alert("Added to Favorite List");
      setAddFavorite(false);
    }
    if (removeFavorite) {
      alert("Removed from Favorite List");
      setRmoveFavorite(false);
    }
  }, [empList]);

  return (
    <Card
      style={{
        width: 650,
        height: 200,
        marginLeft: 350,
      }}
    >
      <Row xs={1} md={2} className="g-4">
        {empList.map((data, idx) => (
          <Col>
            <CardGroup>
              <Card>
                <img src={data.image} width={310} height={150} />
                <Card.Body>
                  <Card.Title>{data.name}</Card.Title>
                  <Card.Text>
                    <i className="fa fa-envelope">{data.email}</i>
                  </Card.Text>
                  <Card.Text>
                    <i className="fa fa-phone">{data.phone}</i>
                  </Card.Text>
                  <Card.Text>
                    <i className="fa fa-globe">{data.website}</i>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <i
                    className={data.favorite ? "fa fa-heart" : "fa fa-heart-o"}
                    style={{ color: "red", marginLeft: 30 }}
                    onClick={() => addRemoveFavorite(idx)}
                  ></i>
                  <i
                    className="fa fa-edit"
                    onClick={() => {
                      editEmptData(idx);
                    }}
                    style={{ marginLeft: 80 }}
                  ></i>
                  <i
                    className="fa fa-trash-o"
                    onClick={() => {
                      deleteEmpData(idx);
                    }}
                    style={{ marginLeft: 80 }}
                  ></i>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        ))}
      </Row>
    </Card>
  );
};
