import { useForm } from "react-hook-form";
import { useAuth} from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom';

function RegisterPage() {
  const { register, handleSubmit, formState: {errors}, } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(()=> {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  useEffect(() =>{
    if(isAuthenticated) navigate("/tasks")
  }, [isAuthenticated])

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (
        <div className="bg-red-800 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <h1>Register Page</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-1 rounded-md"
          placeholder="Username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-1 rounded-md"
          placeholder="Email"
        />
        {errors.email && (
          <p className="text-red-500">Email is required</p>
        )}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 m-1 rounded-md"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}
        <button className="buttonApp" type="submit">Register</button>
      </form>
      <p className='flex gap-x-2 justify-between'>
            Already have an account? 
            <Link to='/login' className='text-sky-500'>Login</Link>
          </p>
    </div>
  );
}

export default RegisterPage;
