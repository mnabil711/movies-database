"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieCard = ({ title, imgPath, overview, vote, release }) => {
  const base_img = "https://image.tmdb.org/t/p/w500";

  const notify = () => {
    toast.error("Sorry,Trailer Is Not Available", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className=" relative  bg-slate-50 rounded-lg shadow-xl pb-10">
      <img
        className=" rounded-t-lg w-full h-64"
        src={
          imgPath
            ? `${base_img}${imgPath}`
            : "https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png"
        }
        alt="movie pic"
      />

      <div className=" px-3  py-3">
        <h2 className=" text-xl text-slate-900 font-bold">{title}</h2>
        <h5 className=" text-sm text-gray-400 p-1"> {release}</h5>
        <p className=" text-sm text-slate-800 ">{overview}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 m-3 flex justify-between items-center">
        <button
          type="button"
          className="inline-block rounded bg-sky-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={notify}
        >
          Watch Trailer
        </button>
        <ToastContainer />
        <div className="flex  items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="gold"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="gold"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          <p className="  pl-2 font-semibold text-md text-slate-700 ">
            {parseFloat(vote.toFixed(1))}
            <span className=" text-sm text-gray-400">/10</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
