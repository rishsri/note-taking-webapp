import { useNavigate } from "react-router-dom";
import Testimonials from "./testimonials";
import Features from "./features";
import { login, notes } from "../../utils/routes";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-black mb-8 mt-8 flex justify-around items-center w-full">
        <div className="flex items-center justify-around w-full">
          <span className="text-4xl font-bold">Todoist</span>
          <span
            className="text-2xl font-bold text-blue-500 cursor-pointer"
            onClick={() => navigate(login)}
          >
            Login
          </span>
        </div>
      </div>
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{ height: "50vh" }}
      >
        <p className="text-5xl leading-10 font-bold mb-8">
          Organize your work and life,finally.
        </p>
        <p className="text-xl mb-8">
          Become focused, organized, and calm with Todoist. The world’s #1 task
          manager and to-do list app.
        </p>
        <button
          className="pl-32 pr-32 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => navigate(notes)}
        >
          Start for Free
        </button>
      </div>
      <Features />
      <p className="text-5xl leading-10 font-bold mb-8">
        Our Customers Love
        <span class="text-blue-500 ">Todoist</span>
      </p>

      <Testimonials />
    </div>
  );
};

export default HomePage;
