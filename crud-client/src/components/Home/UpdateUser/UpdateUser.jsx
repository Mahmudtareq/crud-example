import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const UpdateUser = () => {
  const user = useLoaderData();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email };
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Update ");
          setName("");
          setEmail("");
        }
      });
  };

  return (
    <div className="container w-full lg:w-1/3 mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm ">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block capitalize w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Name"
            required
          />
        </div>
        <label className="block text-sm font-medium leading-6 mt-3 text-gray-900">
          Email
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full  rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="my-5 flex gap-10">
          <button
            type="submit"
            className="btn bg-blue-500 py-3 px-4 rounded text-white"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
