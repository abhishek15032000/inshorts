import React from "react";
import { Container } from "@mui/material";
import NewsCard from "./NewsCard";
const Newsbox = ({ newsArray, loadMore, setLoadMore, newsResults }) => {
  // console.log(newsArray);
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone.
            <img
              alt="App store"
              src={`https://assets.inshorts.com/website_assets/images/appstore.png`}
            ></img>
            <img
              alt="Google play"
              src={`https://assets.inshorts.com/website_assets/images/playstore.png`}
            ></img>
          </span>
        </div>
        {newsArray.map((element) => {
          return <NewsCard newsItem={element} key={element.title} />;
        })}
        
      {
      loadMore <= newsResults && (
         <>
            <hr />
            <button className="loadMore" onClick={()=>setLoadMore
            (loadMore+29)}>Load More</button>
         </>   
      )
      }

        <hr />
      </div>
    </Container>
  );
};

export default Newsbox;
