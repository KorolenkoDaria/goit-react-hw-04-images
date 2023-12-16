import { useState } from "react";
import { toast } from 'react-toastify';

import { ReactComponent as MyIcon } from '../../icons/icons8-search.svg';

import { Header, Form , Button, Span, Input } from "./Searchbar.styled";

const Searchbar = ({handleAddData}) => {
  const [data, setData] = useState('');

  const handleInputChange = (evt) => {
    const value = evt.target.value.trim();
    setData(value);  
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    
    const value = {
      data: this.state.data,
    };

    console.log(value.data);

    if (value === '') {
      toast.error('Please enter your request!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }
  
    setData('');
  
    handleAddData(value);
  };
    return (
        <Header>
        <Form onSubmit={handleSubmit}>
          <Button type="submit" aria-label="Search">
          <MyIcon />
            <Span>Search</Span>
          </Button>
                <Input
                  onChange={handleInputChange}  
                    value={data}
                    type="text"
                    name="data"
                    autoComplete="off" 
                    autoFocus 
                    placeholder="Search images and photos"
          />
        </Form>
      </Header>
    )

}



export default Searchbar;