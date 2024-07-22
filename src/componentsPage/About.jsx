import React from "react";
import Nav from "./Nav";

function About() {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center ">
        <div className=" bg-gray-50 rounded-lg mx-[20vw] my-[2vw] p-[3%] border-double border-4 border-gray-300 ">
          <h1 className="text-xl font-semibold">
            News Websites with Limited Benefits
          </h1>
          <br />
          <hr />
          <br />
          <p className="">
            The development and operation of news websites to gain recognition
            and popularity are crucial in today's digital age. However, some
            websites may not provide substantial benefits, particularly when
            compared to their primary objectives or goals. This can be observed
            from the following perspectives:
          </p>
          <br />
          <ul>
            <li>
              1. Repetitive or Fake News: Some websites aim to generate content
              that lacks value or presents fake news without supporting academic
              references or reliable sources.
            </li>
            <li>
              2. Focus on Insignificant News: Certain websites may prioritize
              content or information that is insignificant or does not
              contribute to enhancing understanding or usefulness to the
              readers.
            </li>
            <li>
              3. Lack of Fact-Checking: There might be instances where websites
              fail to verify the accuracy of the information presented, leading
              users to receive unhelpful or misleading information.{" "}
            </li>
            <li>
              4. Profit-Oriented Information Display: Some websites may
              prioritize displaying information or content aimed at profit
              generation through advertisements rather than focusing on service
              delivery and user value.
            </li>
            <li>
              5. Lack of Technological Updates: Websites that fail to update
              their technology or modernize their presentation formats may face
              challenges in accessibility and usability.
            </li>
          </ul>
          <p></p>
          <br />
          <hr />
          <br />
          <p>
            Therefore, news websites that are beneficial and impactful often
            prioritize accuracy, valuable content, user understanding, and
            strive to provide comprehensive service to their users.{" "}
            <span className="font-medium">
              If you need more information. Click button below.
            </span>
          </p>
          <a href="https://newsapi.org/docs/get-started" target="_blank">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-7 mt-[2vw] rounded-full">
              Go to New API
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
