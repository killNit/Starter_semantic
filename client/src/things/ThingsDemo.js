import React, { useEffect, useState } from "react";
import axios from "axios";

const ThingsDemo = () => {
  const [things, setThings] = useState([]);

  // [] as second arg for componentdidmount
  // ()=>{} this is a unnamed function in this example it is a callback
  // function(){}
  useEffect(() => {
    console.log("in useEFect");
    //component did mount logic

    //axios.get() return a promise which resolves or rejects
    // resolve =>triggers .then( (thingReturnedinResolve)=>{} )
    // reject =>triggers .catch( ()=>{})
    axios
      .get("/api/things")
      .then((response) => {
        setThings(response.data);
      })
      .catch((error) => {
        alert("error in retrieving things");
      });
  }, []);
  return (
    <>
      <div>
        {things.map((t) => (
          <p key={t.id}>{t.name}</p>
        ))}
      </div>
    </>
  );
};

export default ThingsDemo;
