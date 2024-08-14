import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar */}
      <nav className="p-3 md:flex max-w-7xl w-[94%] mx-auto justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/papercut/48/moleskine.png"
            alt="moleskine"
            className="object-cover"
          />
          <h1 className="text-[2rem] font-semibold">TODO</h1>
        </div>

        {count ? (
          <p
            className="absolute md:hidden top-2 right-2"
            onClick={() => setCount((prev) => !prev)}
          >
            S
          </p>
        ) : (
          <p
            className="absolute md:hidden top-2 right-2"
            onClick={() => setCount((prev) => !prev)}
          >
            x
          </p>
        )}
        <ul
          className={`md:flex items-center gap-8 absolute md:static ${
            !count ? "-translate-y-[1000px]" : "translate-y-0"
          } transition-all duration-[2000ms] text-[0.9rem]`}
        >
          <li className="hover:text-gray-300 duration-200">Home </li>
          <li className="hover:text-gray-300 duration-200">About US </li>
          <li className="hover:text-gray-300 duration-200">Todo </li>
          <Button text="Signup" />
          <Button text="Signin" />
          <Button text="Signout" />
        </ul>
      </nav>

      <main className="min-h-[80vh] flex items-center justify-center">
        <div className="flex items-center justify-center flex-col max-w-[800px] gap-5 ">
          <h2 className="text-[4rem] font-semibold text-center ">
            Organize your Work and life, Finally
          </h2>
          <p className="text-[1.2rem] text-center">
            Being focused , organized and calm with todo app . The world's best
            task manager app
          </p>
        </div>
      </main>

      <footer className="text-center text-[0.8rem] py-5">
        TODO APP &copy;ALL RIGHTS ARE RESERVED
      </footer>
    </>
  );
}

export default App;
