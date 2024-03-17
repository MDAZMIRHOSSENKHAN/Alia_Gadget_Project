import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="m-auto w-1/2">
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

        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default SignUp;
