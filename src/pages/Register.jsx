import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import getFormData from "../utilities/getFormData";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const {
    createUser,
    signIn,
    setUser,
    logOut,
    googleSignIn,
    updateUser,
    removeUser,
  } = useContext(AuthContext);
  const handleGoogle = () => {
    console.log("google Clicked");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    const form = { ...e.target };
    const formData = getFormData(e);
    console.log(formData);

    createUser(formData.email, formData.password)
      .then((res) => {
        const loggedUser = res.user;
        updateUser({
          displayName: formData.name,
          photoURL: formData.image_url,
        }).then(() => {
          setUser({
            ...loggedUser,
            displayName: formData.name,
            photoURL: formData.image_url,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="w-11/12 mx-auto flex items-center flex-col md:flex-row">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold text-blue-500">JOIN WITH US</h1>
        <button onClick={handleGoogle} className="btn w-full">
          Sign in with <FcGoogle className="text-2xl"></FcGoogle>
        </button>
        <p className="text-sm">
          Allready have an account?{" "}
          <Link className="text-blue-500 underline" to="/login">
            {" "}
            Go To Login
          </Link>{" "}
        </p>
      </div>

      <form
        onSubmit={handleRegister}
        className="card-body max-w-[720px] mx-auto"
      >
        <div className="flex flex-wrap gap-x-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
              name="name"
            />
          </div>
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            placeholder="Image URL"
            className="input input-bordered"
            required
            name="image_url"
          />
        </div>

        <div className="flex flex-wrap gap-x-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
              name="password"
            />
          </div>

          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
              required
              name="confirm_password"
            />
          </div>
        </div>

        <div className="form-control mt-3">
          <label className="label justify-start gap-2">
            <input type="checkbox" className="checkbox" required />
            <span className="label-text">I accept All The the policy</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
