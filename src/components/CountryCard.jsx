import { Link } from "react-router-dom";

const CountryCard = (props = {}) => {
  const { country } = props || {};

  const { CountryName, Flag } = country;

  // console.log(Object.keys(country).join(","));
  return (
    <Link
      to={`/country/${CountryName}`}
      className="card relative bg-base-100 shadow-xl image-full"
    >
      <figure>
        <img src={Flag} alt="Shoes" />
      </figure>
      <div className="card-body items-center">
        <h2 className="text-2xl font-bold text-white text-center">
          {CountryName}
        </h2>
      </div>
    </Link>
  );
};
export default CountryCard;
