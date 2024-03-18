import { useForm } from "react-hook-form";
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import { FaGoogle } from "react-icons/fa";
import auth from "../../../firebase.init";
const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGoogleSignIn  = ()=>{
    signInWithGoogle()
  }

  console.log(user)

  const onSubmit = (data) => console.log(data);
  return (
    <div className="m-auto w-1/2 mt-10">
      <h1 className="font-semibold text-3xl text-center mb-4 ">Login Here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            className="input input-bordered input-info w-full max-w-xs "
            defaultValue=""
            {...register("name")}
          />
        </div>

        <input
          className="input input-bordered input-info w-full max-w-xs"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}

        <input
          className="btn btn-primary block mt-4 w-1/2 text-2xl"
          type="submit"
        />
      </form>

      <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white w-1/2 mt-4 rounded p-2">
        <FaGoogle style={{ fontSize: "24px", margin: "auto" }} />
      </button>
    </div>
  );
};

export default Login;
