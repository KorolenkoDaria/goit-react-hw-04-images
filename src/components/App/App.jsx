import { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { AppWrapper } from "./App.styled";

import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { fetchData } from "../../servises/api";


const App = () => {
  const [newQuery, setNewQuery] = useState("");
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [loader, setLoader] = useState(false);

 
  const fatchImages = async () => {
    try {
      setLoader(true);

      const perPage = 12;

      const images = await fetchData(newQuery, page);
      setGallery(prevState => [...prevState, ...images.hits])
      setLoadMore(page < Math.ceil(images.totalHits / perPage))  
    }
    catch (error) {
        console.log(error.message)
    }
    finally {
      setLoader(false);
    }
  }

  const handleAddData = (query) => {setNewQuery(query.data)}

  const handleLoadMore = () => {
    setPage(page => page + 1); 
  }

 /*  componentDidUpdate(prevProps, prevState) {
    const { newQuery, page } = this.state;
    if(prevState.newQuery !== newQuery || prevState.page !== page)

  } */
  fatchImages()
  return (
    <AppWrapper>
      <Searchbar handleAddData={handleAddData} />
      <ImageGallery gallery={gallery}></ImageGallery>
      {loader && <Loader/> }
      {loadMore && <Button handleLoadMore={handleLoadMore} />}
      <ToastContainer />
    </AppWrapper>
  );
  
}


export default App;
