import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppWrapper } from "./App.styled";

import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";

import { fetchData } from "../../servises/api";

export const App = () => {
  const [newQuery, setNewQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [loader, setLoader] = useState(false);

  const handleAddData = (query) => {
    setNewQuery(query);
    setGallery([]);
    setPage(1);
  };

  
  useEffect(() => {
    if (newQuery==="") {
      return
    }
    const fetchImage = async () => {
      try {
        setLoader(true);

        const perPage = 12;

        const images = await fetchData(newQuery, page);
        
        setGallery((prevGallery) => [...prevGallery, ...images.hits])
          
        setLoadMore(page < Math.ceil(images.totalHits / perPage));
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoader(false);
      }
    };

    fetchImage();
  }, [newQuery, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    
  };

  return (
    <AppWrapper>
      <Searchbar handleAddData={handleAddData} />
      <ImageGallery gallery={gallery} />
      {loader && <Loader />}
      {loadMore && <Button handleLoadMore={handleLoadMore} />}
      <ToastContainer />
    </AppWrapper>
  );
};
