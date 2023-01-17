import axios from "axios";
import React, { useEffect } from "react";
import Users from "./Users2";

const ViewIndividualTrainees = (props) => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getIndividualTrainees")
      .then((response) => {
        setUsers(response.data);
      });
  }, []);

  return (
    <>
      <Users users={users} type="individualTrainee" />
    </>
  );
};

export default ViewIndividualTrainees;
