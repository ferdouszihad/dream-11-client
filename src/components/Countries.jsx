import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";

const Countries = () => {
  const countries = useLoaderData();
  //   console.log(countries);
  return (
    <div>
      <div className="w-11/12 py-10 mx-auto">
        <h2 className="text-center font-bold text-3xl text-blue-600">
          🏏 Select Players By Countries
        </h2>
        <p className="text-center ">
          Total {countries?.length} countries found
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
          {countries?.map((country) => (
            <CountryCard key={country._id} country={country}></CountryCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Countries;
