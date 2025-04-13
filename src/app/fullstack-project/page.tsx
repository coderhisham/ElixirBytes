import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 flex flex-col justify-between">
      <div className="flex items-center justify-center flex-1">
        <h1 className="text-4xl font-bold">Fullstack Project</h1>
        <p className="text-lg mt-4">This is a fullstack project page.</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default page;
