import { useForm } from "react-hook-form";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../shared/Loading";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  console.log(user);

  if (user) {
    toast.success("Congratulations!! User Logged in successfully");
    navigate("/products/all");
  }

  return (
    <div className="m-auto w-1/2 mt-10">
      <h1 className="font-semibold text-3xl text-center mb-4 ">Sign Up Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            className="input input-bordered input-info w-full max-w-xs"
            {...register("email", { required: true })}
            placeholder="email"
          />
        </div>
        {errors.email && (
          <span className="text-red-600">Email is required</span>
        )}

        <div>
          <label className="block">Password</label>
          <input
            className="input input-bordered input-info w-full max-w-xs"
            {...register("password", { required: true })}
            placeholder="password"
            type="password"
          />
        </div>
        {errors.password && (
          <span className="text-red-600">Password is required</span>
        )}
        {loading ? (
          <Loading />
        ) : (
          <input
            className="btn btn-primary block mt-4 w-1/2 text-xl"
            type="submit"
          />
        )}

        <Link to="/sign-up" className="text-blue-600">
          Not an Account? Sign up here.
        </Link>

        {error && (
          <h1 className="text-red-700 text-center mt-6 text-2xl font-semibold">
            {error.message}
          </h1>
        )}
      </form>
    </div>
  );
};

export default Login;
