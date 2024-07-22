import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import fetchDataHeadLine from "../component/ApiHeadLine";
import axios from "axios";
import ReactLoading from "react-loading";
import SearchAndOp from "../component/SearchAndOp";
import fetchDataEveryThing from "../component/ApiEveryThing";
import { Link, useLocation, useNavigate } from "react-router-dom";
import fetchDataHeadLineStart from "../component/ApiHeadLineStart";
import { categoryArray, countryArray } from "../component/Array";
import fetchDataHeadLineSearch from "../component/ApiHeadLineSearch";
import defaultImage from "../assets/imagedefualt.jpg";
import { FaHeart, FaRegHeart, FaCaretDown, FaCaretUp } from "react-icons/fa6";

function Home() {
  const [back, setBack] = useState(false);
  const [dataLine, setDataLine] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState("desc"); /// sort ///
  const [count, setCount] = useState(2);
  const [hind, setHind] = useState(false);

  ///// hind search /////
  const hindSearch = () => {
    setHind((prev) => !prev);
  };

  ///// localstorage /////
  const [selectedItem, setSelectedItem] = useState(() => {
    const saveFav = localStorage.getItem("Favorite");
    if (saveFav) {
      return JSON.parse(saveFav);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("Favorite", JSON.stringify(selectedItem));
  }, [selectedItem]);

  ///// start web /////
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoad(true);
        const result = await fetchDataHeadLineStart();
        //const result2 = await fetchDataHeadLine();
        //const combine = [...result, ...result2];
        setDataLine(result);
        setError();
      } catch (error) {
        setError("something wrong", error);
        alert("something wrong", error);
      } finally {
        setLoad(false);
      }
    };
    loadData();
  }, [back]);
  ///// search /////

  const fetchData = async (
    search,
    sort,
    iso,
    iso2,
    countrySearch,
    categorySearch
  ) => {
    try {
      setLoad(true);
      if (countrySearch || categorySearch) {
        //console.log(search, countrySearch, categorySearch, "--------");
        const result = await fetchDataHeadLineSearch(
          search,
          countrySearch,
          categorySearch
        );
        setDataLine(result);
      } else {
        const result = await fetchDataEveryThing(search, sort, iso, iso2);
        setDataLine(result);
      }
    } catch (error) {
      alert("something went wrong", error);
    } finally {
      setLoad(false);
    }
  };

  /////// favorite ///////

  const handleSelectItem = (item) => {
    setSelectedItem((old) => [...old, item]);
    alert("ข้อมูลถูกเลือกแล้ว!");
  };

  /////// sortData  //////

  const toggleSortOrder = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    sortByDate(newSortOrder);
  };

  const sortByDate = (order) => {
    const sortedDataLine = [...dataLine].sort((a, b) => {
      return order === "asc"
        ? new Date(a.publishedAt) - new Date(b.publishedAt)
        : new Date(b.publishedAt) - new Date(a.publishedAt);
    });
    setDataLine(sortedDataLine);
  };

  ///// back /////
  const handleBack = () => {
    setBack((prevState) => !prevState);
    setCount((pre) => (back ? pre + 1 : pre - 1));
  };

  //console.log(hotLine, "---1");
  //console.log(selectedItem, "---2");

  return (
    <>
      <Nav />
      {hind ? (
        <SearchAndOp onSubmit={fetchData} count={count} />
      ) : (
        <div className="bg-gray-100 flex justify-center items-center text-lg">
          search click here
        </div>
      )}
      <button
        onClick={hindSearch}
        style={{ color: "black" }}
        className="  rounded-b-lg bg-gray-100 text-white w-full flex justify-center items-center sm:text-3xl md:text-4xl lg:text-4xl"
      >
        {hind ? <FaCaretUp /> : <FaCaretDown />}
      </button>

      {load ? (
        <div className="flex justify-center  w-screen h-screen sm:mt-[15%] md:mt-[15%] lg:mt-[10%]">
          <div className="flex flex-col ">
            <ReactLoading
              type="balls"
              color="gray"
              height="20vh"
              width="20vh"
            ></ReactLoading>
            <p className="text-center text-neutral-500 text-2xl ">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-5 p-5 sm:max-w-[67vw] md:max-w-[51vw] lg:max-w-[40vw] ">
            <button
              onClick={handleBack}
              className="flex justify-center items-center col-span-1 rounded-full px-10 py-3 bg-blue-500 text-white hover:bg-blue-700"
            >
              back
            </button>

            <button
              onClick={toggleSortOrder}
              className="flex justify-center items-center col-span-2 rounded-full py-2 px-5 bg-blue-500 text-white sm:max-w-[80%] md:max-w-[85%] lg:max-w-[80%] hover:bg-blue-700"
            >
              Sort by Date ({sortOrder === "asc" ? "oldest" : "newest"})
            </button>
          </div>

          {dataLine.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
              {dataLine?.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-lg border-stone-200 border-2 m-5 p-5 pb-7 hover:bg-gray-100"
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
                    onClick={() => handleSelectItem(item)}
                    className=" absolute left-5 bottom-5 rounded-full bg-blue-500 hover:bg-blue-700 px-10 py-2 text-white "
                  >
                    Add to favorite
                  </button>
                  <br />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center ">
              <p className="text-neutral-500 text-4xl font-light mt-[10vw]">
                {" "}
                no result...{" "}
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Home;
