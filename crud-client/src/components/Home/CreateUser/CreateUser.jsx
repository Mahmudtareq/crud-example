import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const backHome = () => {
    navigate(-1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          alert("User Create ");
          setName("");
          setEmail("");
        } else {
          alert("Try With Valid data");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="container w-1/2 mx-auto shadow-sm p-4 mt-8">
      <h1 className="font-bold mb-3">Create New User</h1>
      <div className="flex justify-end">
        <button
          onClick={backHome}
          className="btn bg-red-500 py-3 px-4 rounded text-white"
        >
          Back Home
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Name
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
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
            className="block w-full rounded-md border-0 py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter Email"
            required
          />
        </div>
        <div className="my-5 flex gap-10">
          <button
            type="submit"
            className="btn bg-blue-500 py-3 px-4 rounded text-white"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
