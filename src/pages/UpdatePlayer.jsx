import { useLoaderData } from "react-router-dom";
import getFormData from "../utilities/getFormData";
import Swal from "sweetalert2";

const UpdatePlayer = () => {
  const data = useLoaderData();
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
  console.log(data);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = getFormData(e);
    console.log(updatedData);
    fetch(`http://localhost:5000/player/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated", "Data Updated from your Squad", "success");
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto py-10">
      <h2 className="text-2xl font-bold">Update Data of {name} </h2>

      <div>
        <form onSubmit={handleUpdate} className="max-w-xl mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <input
              type="text"
              placeholder="Image URL"
              className="input input-bordered"
              name="image"
              defaultValue={image}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
              defaultValue={name}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Description"
              className="input input-bordered"
              name="description"
              defaultValue={description}
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              className="input input-bordered"
              name="rating"
              defaultValue={rating}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Speciality</span>
            </label>
            <select name="speciality" className="form-control" id="speciality">
              <option value="{speciality}">{speciality}</option>
              <option value="All-Rounder">All-Rounder</option>
              <option value="Batsman">Batsman</option>
              <option value="Bowler">Bowler</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Fielding Rating</span>
            </label>
            <input
              type="text"
              placeholder="Fielding Rating"
              className="input input-bordered"
              name="fieldingRating"
              defaultValue={fieldingRating}
            />
          </div>

          <div className="form-control my-3">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdatePlayer;
