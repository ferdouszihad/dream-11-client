import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";

const PlayerDetail = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  console.log(data);
  //   console.log(Object.keys(data).join(","));
  const {
    _id,
    image,
    name,
    country,
    speciality,
    description,
    rating,
    fieldingRating,
  } = data;

  const addToSquad = () => {
    const mySquadPlayer = {
      image,
      name,
      country,
      speciality,
      description,
      rating,
      fieldingRating,
      ownerEmail: user?.email,
      playerId: _id,
    };

    fetch("http://localhost:5000/addToSquad", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(mySquadPlayer),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success", "Player Added to my Squad", "success");
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-2xl font-bold ">Player Name{name}</h2>
      <p className=" ">{description}</p>
      <button onClick={addToSquad} className="btn btn-primary">
        Add to My Squad
      </button>
    </div>
  );
};
export default PlayerDetail;
