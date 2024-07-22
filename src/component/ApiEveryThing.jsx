import axios from "axios";

const fetchDataEveryThing = async (search, sort, iso, iso2) => {
  const response = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      apiKey: "df96bc71f1784a6fb19fd88d15e6d769",
      q: search,
      sortBy: sort,
      from: iso,
      to: iso2,
    },
  });

  return response.data.articles
};

export default fetchDataEveryThing;