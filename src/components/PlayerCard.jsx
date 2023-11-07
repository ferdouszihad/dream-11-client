import { Link } from "react-router-dom";

const PlayerCard = (props = {}) => {
  const { player } = props || {};

  //   console.log(Object.keys(player).join(","));
  const {
    _id,
    image,
    name,
    country,
    speciality,
    description,
    rating,
    fieldingRating,
  } = player;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure className="h-[200px]">
        {/* <img src={image} alt="Shoes" /> */}

        <div className="h-full w-full bg-slate-300 flex justify-center items-center ">
          Image Here
        </div>
      </figure>
      <div className="card-body dark:bg-slate-300">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-secondary">{country}</div>
        <p>Speciality : 🏅 {speciality}</p>
        <div className="flex justify-between">
          <p>Rating: ⭐ {rating}</p>
          <p>Fielding: ⭐ {fieldingRating}</p>
        </div>

        <div className=" space-y-3">
          <Link
            to={`/player-details/${_id}`}
            className="btn btn-sm btn-primary w-full"
          >
            View Player Details
          </Link>

          <Link
            to={`/update-player/${_id}`}
            className="btn btn-sm btn-accent w-full"
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
