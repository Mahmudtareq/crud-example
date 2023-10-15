import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { RiChatDeleteLine } from "react-icons/ri";

const Home = () => {
  const allUser = useLoaderData();
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("User delete successfully");
        }
      });
  };
  return (
    <div className="container mx-auto lg:w-2/3 w-full">
      <button className="bg-blue-400 p-3 mt-8 rounded shadow-md text-white hover:underline">
        <Link to="createUser">Add New User</Link>
      </button>
      <div className="grid gap-4 my-8">
        {allUser.map((user) => (
          <div key={user._id}>
            <div className="bg-blue-100 p-3 rounded-sm flex items-center justify-between">
              <div>
                <h1 className="">{user.name}</h1>
                <p>{user.email}</p>
              </div>

              <div className="space-x-4">
                <Link to={`/updateUser/${user._id}`}>
                  <button className="bg-blue-400 p-2 rounded">
                    <BiEdit />
                  </button>
                </Link>

                <button
                  className="bg-red-400 p-2 rounded"
                  onClick={() => handleDelete(user._id)}
                >
                  <RiChatDeleteLine />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
