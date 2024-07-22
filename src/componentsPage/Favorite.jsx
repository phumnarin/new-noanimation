import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import Like from "../component/Like";
import defaultImage from "../assets/imagedefualt.jpg";

function Favorite() {
  const [fav, setFav] = useState(() => {
    const saveFavPageFav = localStorage.getItem("Favorite");
    if (saveFavPageFav) {
      return JSON.parse(saveFavPageFav);
    } else {
      return [];
    }
  });
  ///// sort /////
  const [sortOrder, setSortOrder] = useState("desc"); /// sort ///
  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    sortByDate(newSortOrder);
  };

  const sortByDate = (order) => {
    const sortedDataLine = [...fav].sort((a, b) => {
      return order === "asc"
        ? new Date(a.publishedAt) - new Date(b.publishedAt)
        : new Date(b.publishedAt) - new Date(a.publishedAt);
    });
    setFav(sortedDataLine);
  };

  ///// remove /////

  const removeItem = (index) => {
    const updatedFav = [...fav];
    updatedFav.splice(index, 1);
    setFav(updatedFav);
    localStorage.setItem("Favorite", JSON.stringify(updatedFav));
  };

  return (
    <>
      <Nav />

      <button
        onClick={toggleSortOrder}
        className="mx-5 my-5 rounded-full py-2 px-5 bg-blue-500 text-white hover:bg-blue-700"
      >
        Sort by Date ({sortOrder === "asc" ? "oldest" : "newest"})
      </button>

      {(fav.length > 0) ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {fav?.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border-stone-200 border-2 m-5 p-5 pb-7 relative hover:bg-gray-100"
            >
              <p>
                <b>Title :</b> {item.title}
              </p>
              <p>
                <b>published data :</b>{" "}
                {item.publishedAt.slice(0, 10) +
                  "  time:  " +
                  item.publishedAt.slice(11, 16)}
              </p>
              <img
                src={item.urlToImage || defaultImage}
                alt={index}
                className="my-3 mx-auto"
              />
              <p>
                <b>description:</b> {item.description}
              </p>
              <p>
                <b>content:</b> {item.content}
              </p>
              <p>
                <b>more information:</b>
                <a
                  href={item.url}
                  target="_blank"
                  className="block overflow-hidden text-ellipsis whitespace-nowrap hover:bg-gray-300 text-gray-700 hover:text-gray-900 font-medium py-1 px-2 rounded-md"
                >
                  {item.url}
                </a>
              </p>
              <br />

              <button
                onClick={() => removeItem(index)}
                className="absolute left-5 bottom-5 rounded-full bg-blue-500 hover:bg-blue-700 px-10 py-2 text-white  "
              >
                remove
              </button>

              <br />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center ">
          <p className="text-neutral-500 text-4xl font-light sm:mt-[40%] md:mt-[30%] lg:mt-[15%] ">
            {" "}
            no favorite...{" "}
          </p>
        </div>
      )}
    </>
  );
}

export default Favorite;
