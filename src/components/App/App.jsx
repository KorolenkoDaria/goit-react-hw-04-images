import { Component } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { AppWrapper } from "./App.styled";

import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import { fetchData } from "../../servises/api";

export class App extends Component {
  state = {
    newQuery: "",
    gallery: [],
    page: null,
    loadMore: false,
    loader: false,
  }
 
  fatchImages = async () => {
    try {
      this.setState({ loader: true });

      const perPage = 12;
      const { newQuery, page } = this.state;
      const images = await fetchData(newQuery, page);
      this.setState((prevState) => ({
        gallery: [...prevState.gallery, ...images.hits],
        loadMore: page < Math.ceil(images.totalHits / perPage)
      }));
      
    }
    catch (error) {
        console.log(error.message)
    }
    finally {
      this.setState({loader: false});
    }
  }

  handleAddData = (query) => {
    this.setState({
      newQuery: query.data,
      gallery: [],
      page: null,
    })
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1}))
  }

  componentDidUpdate(prevProps, prevState) {
    const { newQuery, page } = this.state;
    if(prevState.newQuery !== newQuery || prevState.page !== page)
     this.fatchImages()

  }

  render() {
    const { gallery, loadMore, loader } = this.state;
      return (
        <AppWrapper>
          <Searchbar handleAddData={this.handleAddData} />
          <ImageGallery gallery={gallery}></ImageGallery>
          {loader && <Loader/> }
          {loadMore && <Button handleLoadMore={this.handleLoadMore} />}
          <ToastContainer />
        </AppWrapper>
      );
    }
  }


