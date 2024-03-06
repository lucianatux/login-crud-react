import { useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from "react";

function LoginPage() {

  const {
    register, 
    handleSubmit, 
    formState: {errors},
  } = useForm();

  const {signIn, errors: signInErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(data =>{
    signIn(data);
  });

  useEffect(() =>{
    if(isAuthenticated) navigate("/tasks")
  }, [isAuthenticated])

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className='bg-zinc-700 max-w-md w-full p-10 rounded-md'>
      {signInErrors.map((error, i) => (
        <div className="bg-red-800 p-2 text-white text-center m-2" key={i}>
          {error}
        </div>
      ))}
          <form onSubmit={onSubmit}>
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
            <button className='buttonApp' type="submit">Login</button>
          </form>
          <p className='flex gap-x-2 justify-between'>
            Don´t have an account? 
            <Link to='/register' className='text-sky-500'>Sign up</Link>
          </p>
      </div>
    </div>
  )
}

export default LoginPage