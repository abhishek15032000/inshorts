import "./styles/app.scss";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Newsbox from "./components/Newsbox";
import axios from "axios";
import Footer from "./components/Footer";
const App = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);
  const [category, setCategory] = useState("general");
  const newsApi = async () => {
    try {
        let news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}&category=${category} `
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (err) {}
  };
  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, loadMore, category]);
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Newsbox
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
};

export default App;
