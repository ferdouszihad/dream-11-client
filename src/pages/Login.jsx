import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import getFormData from "../utilities/getFormData";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const {
    user,
    loading,
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

  const handleLogin = (e) => {
    e.preventDefault();
    const data = getFormData(e);
    console.log(data);
    signIn(data.email, data.pass)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
    console.log(data);
  };

  return (
    <div className="w-11/12 mx-auto flex items-center flex-col md:flex-row">
      <div className="space-y-5">
        <h1 className="text-5xl font-bold text-blue-500">Login Now</h1>
        <button onClick={handleGoogle} className="btn w-full">
          Sign in with <FcGoogle className="text-2xl"></FcGoogle>
        </button>
        <p className="text-sm">
          If you dont have an account,{" "}
          <Link to="/register" className="text-blue-500 underline">
            {" "}
            Go To Register
          </Link>{" "}
        </p>
      </div>

      <form onSubmit={handleLogin} className="card-body max-w-[560px] mx-auto">
        <div className="flex flex-wrap gap-x-5">
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

        <div className="flex flex-wrap  gap-x-5">
          <div className="form-control flex-1">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              required
              name="pass"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
