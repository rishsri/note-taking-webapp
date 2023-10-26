import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddTodo from "../addTodo";
import TodoList from "./todoList";
import Pagination from "./pagination";
import { homePage, login } from "../../utils/routes";
import { addToDo } from "../../slices/todo";

const Notes = () => {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [editNoteId, setEditNoteId] = useState("");

  const user = useSelector((state) => state.signIn.user);
  const users = useSelector((state) => state.signUp.users);

  const todoList = useSelector((state) => state.todo.todoList);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) {
      navigate(login);
    }
  }, []);

  const handleAddTodo = () =>{
    
    setOpen(true)
  }

  const pageSize = 4;
  const lastIndex = currentPage * pageSize;
  const firstIndex = lastIndex - pageSize;
  const records = todoList.slice(firstIndex, lastIndex);
  const totalNofPages = Math.ceil(todoList.length / pageSize);
  const noOfPAgesss = [];
  for (let i = 1; i <= totalNofPages; i++) {
    noOfPAgesss.push(i);
  }

  return (
    <div>
      <div className="h-16 flex justify-around bg-white items-center ">
        {users.length ? (
          <div className="cursor-pointer" onClick={() => navigate(homePage)}>
            {" "}
            <span className="font-bold text-base">Welcome: </span>
            <span className="font-bold text-base">{user.email}</span>
          </div>
        ) : (
          <span
            className="font-bold text-base cursor-pointer"
            onClick={() => navigate(homePage)}
          >
            Todoiest
          </span>
        )}
        {todoList.length ? (
          <>
            <button
              className="font-bold text-base "
              onClick={() => setOpen(true)}
            >
              Add Todo +
            </button>
            {users.length === 0 ? (
              <button
                className="font-bold text-base"
                onClick={() => navigate(login)}
              >
                Login
              </button>
            ) : (
              <button
                className="font-bold text-base"
                onClick={() => navigate(login)}
              >
                Logout
              </button>
            )}
          </>
        ) : null}
      </div>
      {open && (
        <AddTodo
          open={open}
          setOpen={setOpen}
          editNoteId={editNoteId}
          setEditNoteId={setEditNoteId}
        />
      )}
      <div className="flex justify-center items-center w-full mt-16  flex-col">
        {records.map((list, index) => {
          return (
            <TodoList
              key={index}
              list={list}
              index={index}
              setOpen={setOpen}
              setEditNoteId={setEditNoteId}
              
            />
          );
        })}
      </div>
      {!todoList.length ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "80vh" }}
        >
          <div
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white"
            style={{ padding: "80px" }}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Add a New Task</div>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg"
                onClick={handleAddTodo}
              >
                Add Todo +
              </button>
            </div>
          </div>
        </div>
      ) : null}
      {todoList.length > pageSize ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          firstIndex={firstIndex}
          noOfPAgesss={noOfPAgesss}
        />
      ) : null}
    </div>
  );
};

export default Notes;
