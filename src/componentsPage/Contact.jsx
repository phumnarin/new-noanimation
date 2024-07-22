import React from "react";
import Nav from "./Nav";
import backgroundImage from "../assets/BackGround.jpg";

function Contact() {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "25vh", // Set the height to 100vh to cover the full viewport height
  };

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center " style={style}>
        <div className="p-2 mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-2xl">
            Have any questions? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="mt-[2vw] grid gap-[3vw] sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:px-[15vw] md:px-[8vw] lg:px-[5vw]">
        <div className="relative bg-gray-100 rounded-lg border-t-8 p-5 border-t-gray-800 ">
          <h1 className="text-3xl font-semibold my-4">Press</h1>
          <hr />
          <div className="my-5 pb-[5vw] text-gray-500">
            If you who visit this website need help or learn more about the news
            API, you can press the button below to go to the news website that
            we have prepared for you. Thank you for visiting.
          </div>
          <br />
          <div className="w-[100%] absolute left-5 bottom-5  ">
            <a href="https://newsapi.org/docs/get-started" target="blank">
              <button className="py-3 px-[15%] text-white bg-blue-500 rounded-full hover:bg-blue-700 ">
                API News
              </button>
            </a>
          </div>
        </div>

        <div className="relative bg-gray-100 rounded-lg border-t-8 p-5  border-t-gray-800 ">
          <h1 className="text-3xl font-semibold my-4">Information</h1>
          <hr />
          <div className="my-5 pb-[5vw] text-gray-500">
            As for making a news website, this time data will be taken from the
            New API website. The special feature of this website is that it will
            import an API that brings news information to be displayed on the
            screen.
          </div>
          <br />

          <div className="w-[100%] absolute left-5 bottom-5  ">
            <a
              href="https://newsapi.org/docs/get-started#search"
              target="blank"
            >
              <button className="py-3 px-[15%] text-white bg-blue-500 rounded-full hover:bg-blue-700 ">
                API News
              </button>
            </a>
          </div>
        </div>

        <div className="relative bg-gray-100 rounded-lg border-t-8 p-5  border-t-gray-800 ">
          <h1 className="text-3xl font-semibold my-4">Help & Support</h1>
          <hr />
          <div className="my-5 pb-[5vw] text-gray-500">
            Just left this website is the personal work of the representative
            and it is only a small project.Therefore, there is no source of help
            when problems arise.
          </div>
          <br />
          <div className="w-[100%] absolute left-5 bottom-5  ">
            <a href="https://newsapi.org/docs/authentication" target="blank">
              <button className="py-3 px-[15%] text-white bg-blue-500 rounded-full hover:bg-blue-700 ">
                API News
              </button>
            </a>
          </div>
        </div>

        <div className="relative bg-gray-100 rounded-lg border-t-8 p-5  border-t-gray-800 ">
          <h1 className="text-3xl font-semibold my-4">More details</h1>
          <hr />
          <div className="my-5 pb-[5vw] text-gray-500">
            If you want more details, you can go and read the website. On that
            website, we recommend reading 2 parts, namely the end piont
            Everything section and the headline that is only 2 fresh news items.
          </div>
          <br />
          <div className="w-[100%] absolute left-5 bottom-5  ">
            <a href="https://newsapi.org/docs/endpoints" target="blank">
              <button className="py-3 px-[15%] text-white bg-blue-500 rounded-full hover:bg-blue-700 ">
                API News
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
