import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "../../../slices/todo";
import { toast } from "react-toastify";

const TodoList = ({ list, index,setOpen,setEditNoteId }) => {
  
  const users = useSelector((state) => state.signUp.users);

  const user = useSelector((state) => state.signIn.user);

  const editHandler = (id) => {
    if (users.length === 0) {
      toast.error("Please Login");
      return;
    }
     setOpen(true)
     setEditNoteId(id)
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    if (users.length === 0) {
      toast.error("Please Login");
      return;
    }
    dispatch(removeToDo(list.id));
  };



  return (
    <div
      key={index}
      className="mb-10 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full"
    >
      <div className="md:flex">
        <div className="p-8">
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >
            Title: {list.value.title}
          </a>
          <p className="mt-2 text-gray-600 ">
            <span className="font-bold">Description:</span> {list.value.content}
          </p>
        </div>
      </div>
      <div className="flex justify-end mb-5 mr-10 space-x-4">
       { list.createdBy.email === user.email &&  <button
          type="submit"
          className="pl-16 pr-16 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          onClick={handleDelete}
        >
          Delete
        </button> }
        {list.createdBy.email === user.email && <button
          type="submit"
          className="pl-16 pr-16 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          onClick={() => editHandler(list.id)}
        >
          Edit
        </button>}
      </div>
    </div>
  );
};

export default TodoList;
