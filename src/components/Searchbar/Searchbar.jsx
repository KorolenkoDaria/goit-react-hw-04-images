import { Component } from "react";
import { toast } from 'react-toastify';

import { ReactComponent as MyIcon } from '../../icons/icons8-search.svg';

import { Header, Form , Button, Span, Input } from "./Searchbar.styled";

class Searchbar extends Component {
    state = {
        data:"",
    }

  handleInputChange = (evt) => {
    const value = evt.target.value.trim();
        this.setState({ data: value})  
    }

    handleSubmit = (evt) => {
      evt.preventDefault();
      const value = {
        data: this.state.data,
      };
      console.log(value.data);

      if (value.data.trim() === '') {
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
    
      this.setState({
        data: "",
      });
    
      this.props.handleAddData(value);
    };
    
    render() {
        return (
            <Header>
            <Form onSubmit={this.handleSubmit}>
              <Button type="submit" aria-label="Search">
              <MyIcon />
                <Span>Search</Span>
              </Button>
                    <Input
                      onChange={this.handleInputChange}  
                        value={this.state.data}
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
}

export default Searchbar;