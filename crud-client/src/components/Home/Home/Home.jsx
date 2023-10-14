import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <h1>this is home</h1>
      <button className="bg-blue-400 p-3 rounded shadow-md text-white hover:underline">
        <Link to="createUser">Add New User</Link>
      </button>
    </div>
  );
};

export default Home;
