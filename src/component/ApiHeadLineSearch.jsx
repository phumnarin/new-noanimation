import axios from "axios";

const fetchDataHeadLineSearch= async (search, country, category) => {
  const respons = await axios.get("https://newsapi.org/v2/top-headlines", {
    params: {
      apiKey: "df96bc71f1784a6fb19fd88d15e6d769",
      q: search,
      country: country,
      category: category,
    },
  });
  //console.log(respons)
  //console.log(respons.data.articles)
  return respons.data.articles;
};

export default fetchDataHeadLineSearch;
