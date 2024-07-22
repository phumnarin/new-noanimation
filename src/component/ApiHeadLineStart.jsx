import React from "react";
import axios from "axios";

    const fetchDataHeadLineStart = async () => {
        const respons = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              apiKey: "df96bc71f1784a6fb19fd88d15e6d769",
              country: 'us',
              category: '',
            },
          },
        );
        //console.log(respons)
        //console.log(respons.data)
        return respons.data.articles    
    };

export default fetchDataHeadLineStart;
