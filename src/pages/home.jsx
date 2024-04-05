import React from 'react';
import Button from "../components/Elements/Button";

const HomePage = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href="/login";
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Button onClick={handleClick} classname="bg-blue-500 hover:bg-blue-700 text-white font-bold text-2xl rounded w-32">
        Login
      </Button>
    </div>
  );
};

export default HomePage;
