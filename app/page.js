"use client";
import { useEffect, useState, useRef } from "react";
import MovieCard from "./componants/MovieCard";

export default function Home() {
  const inputRef = useRef();
  const api_key = "eed1a6ea9b8c3aa422d789f4adb72e82";
  const base_url = "https://api.themoviedb.org/3";
  const get_movies = "search/movie";
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const api_url = `${base_url}/${get_movies}?query=${inputValue}&api_key=${api_key}`;

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch(api_url);
      const data = await response.json();
      setMovies(data.results);
      setInputValue("");
    } catch (error) {
      console.log("Error fetching:", error);
      return null;
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await getMovies();
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };

  return (
    <div className=" bg-gradient-to-t from-sky-50  to-slate-900 flex min-h-screen flex-col items-center  p-8">
      <h2 className=" text-sky-50 font-bold text-3xl lg:text-4xl my-3  px-10 py-2">
        Movies Database
      </h2>

      <form
        type="submit"
        onSubmit={handleClick}
        className="flex items-center w-full justify-center my-3 "
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter Movie Title"
          className="p-1 text-md rounded-l  w-full focus:outline-none"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="  hover:bg-red-600  focus:bg-red-600 rounded-r bg-sky-700 px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none  active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Search
        </button>
      </form>

      <div className=" container grid  grid-cols-1  lg:grid-cols-4 md:grid-cols-3 gap-5  mx-auto">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              imgPath={movie.poster_path}
              overview={movie.overview}
              vote={movie.vote_average}
              release={movie.release_date}
            />
          ))
        ) : (
          <p className=" text-sky-50  font-bold">No Movies !</p>
        )}
      </div>
    </div>
  );
}
