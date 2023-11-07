import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import SquadCard from "../components/SquadCard";
import Swal from "sweetalert2";

const MySquad = () => {
  const { user } = useContext(AuthContext);
  const [squadData, setSquadData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/mySquad?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSquadData(data));
  }, [user]);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/squad/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire("Deleted", "Data Deleted from your Squad", "success");

          const remaining = squadData.filter((player) => player._id != id);
          setSquadData(remaining);
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto" data-aos="fade-up">
      <h2>{squadData.length} player added to yur squad</h2>
      <div className="grid grid-cols-3 gap-4">
        {squadData?.map((player) => (
          <SquadCard
            key={player.id}
            handleDelete={handleDelete}
            player={player}
          ></SquadCard>
        ))}
      </div>
    </div>
  );
};
export default MySquad;
