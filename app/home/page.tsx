import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-full space-y-3 pt-36">
      <div className="flex flex-row space-x-2 text-h1 font-ubuntubold">
        <h1 className="">Mab Sothea</h1>
        <span>👋</span>
      </div>
      <h2 className="flex text-title font-ubuntubold">Full Stack Developer</h2>
      <p className="flex text-center text-subtitle font-ubuntulight">
        I’m a creative and dedicated Full Stack Developer based in ...,
        specializing in both front-end and back-end development. Passionate
        about building efficient, user-friendly web applications and delivering
        exceptional results.
      </p>
    </div>
  );
};

export default Home;
