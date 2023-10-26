import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../utils/routes";

export default function SignUp() {
  const isLoading = useSelector((state) => state.signUp.isSignUpProgress);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name, confirmPassword } = formData;
    if (!email.trim() || !password.trim()) {
      toast.error("Please enter all required fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password do not match");

      return;
    }
    if (isLoading) {
      return;
    }

    dispatch({ type: "sign-up", payload: { email, password, name } });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md mx-auto my-8 p-8 rounded shadow-lg bg-white">
        <div className="w-80">
          {" "}
          <h1 className="text-center text-3xl font-bold mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800">Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded mt-1"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-800">
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
              <label htmlFor="password" className="block text-gray-800">
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

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-gray-800">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full border p-2 rounded mt-1"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="pl-32 pr-32 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              {isLoading ? "...Loading" : "Sign Up"}
            </button>

            <div className="text-center">
             <p className='mt-10 text-center text-sm text-gray-500'>Existing User ?</p> 
              <button className="text-blue-500 font-bold" onClick={() => navigate(login)}>Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
