import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { v4 as uuidv4 } from "uuid";
import { addToDo, editToDo } from "../../slices/todo";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AddTodo = ({ open, setOpen, setEditNoteId, editNoteId }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const note = useSelector((state) =>
    state.todo.todoList.find((x) => x.id === editNoteId)
  );

  const user = useSelector((state) => state.signIn.user);

 

  useEffect(() => {
    if (editNoteId && note) {
      setFormData({ title: note.value.title, content: note.value.content });
    }
  }, []);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleAddTodo = () => {
    if(editNoteId){
      dispatch(editToDo({ id: editNoteId, value: formData }));
    }else {
      dispatch(addToDo({ id: uuidv4(), value: formData ,createdBy: {name: "", email: user.email} }));
    }
   
    setFormData({ title: "", content: "" });
    setOpen(false);
    setEditNoteId("");
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-out duration-300">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child as={Fragment} enter="ease-out duration-300">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="m-6">
                  <label className="block text-gray-800 font-bold">Title</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded mt-1"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div className="m-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Content:
                  </label>
                  <textarea
                    type="text"
                    name="content"
                    className="w-full border p-2 rounded mt-1"
                    value={formData.content}
                    onChange={handleChange}
                  />
                </div>

                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={handleAddTodo}
                  >
                    {editNoteId ? "Save" : " Add"}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AddTodo;
