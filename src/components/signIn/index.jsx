import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signup } from '../../utils/routes';

export default function SignIn() {
  const isLoading = useSelector((state) => state.signIn.isSignInProgress);
  const users = useSelector((state) => state.signUp.users);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email.trim() || !password.trim()) {
      toast.error('Please enter all required fields');
      return;
    }
    if (isLoading) {
      return;
    }

    const userInDB = users.find((user) => user.email === email);
    if (!userInDB) {
      toast.error('Email does not exist');
      return;
    } else {
      if (userInDB.password !== password) {
        toast.error('Invalid password');
        return;
      }
      dispatch({ type: 'sign-in', payload: { email, password } });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className='flex justify-center items-center h-screen'>
    <div className="max-w-md mx-auto my-8 p-8 rounded shadow-lg bg-white">
      <div className="w-80">
        <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-800 flex items-center">
              Email
            </label>
            <input
              type="email"
              className="w-full border p-2 rounded mt-1"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-800 flex items-center">
              Password
            </label>
            <input
              type="password"
              className="w-full border p-2 rounded mt-1"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="pl-32 pr-32 py-2 bg-blue-500 text-white py-2  rounded hover:bg-blue-600"
          >
            {isLoading ? '...Loading' : 'Login'}
          </button>
          <div className="text-center">
           <p className='mt-10 text-center text-sm text-gray-500'>Not Registered ?</p> 
            <button className='text-blue-500 font-bold' onClick={() => navigate(signup)}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}
