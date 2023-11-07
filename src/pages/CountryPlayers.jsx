import { Link, useLoaderData, useParams } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";

const CountryPlayers = () => {
  const data = useLoaderData();
  const { countryName } = useParams();
  console.log(data);
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-3xl font-bold text-center">🏏{countryName}</h2>
      <p className="text-center">Total {data.length} Players Found</p>

      {data.length === 0 && (
        <div>
          <h2 className="text-3xl space-y-5 font-bold text-center">
            No Player Added Yet
          </h2>
          <div className="text-center my-5">
            <Link to="/add-player">
              <button className="btn btn-primary">Add a Player</button>
            </Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {data.map((player) => (
          <PlayerCard key={player._id} player={player}></PlayerCard>
        ))}
      </div>
    </div>
  );
};
export default CountryPlayers;
