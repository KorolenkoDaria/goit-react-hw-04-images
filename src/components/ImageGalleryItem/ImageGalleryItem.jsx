import { Component } from "react";

import {Modal}  from "components/Modal/Modal";

import { Items } from "./ImageGalleryItem.styled";




export class ImageGalleryItem extends Component{
    state = {
        modalIsOpen: false,
    }

    onOpenModal = () => {
        this.setState({modalIsOpen: true,})
    }

    onCloseOverlay = (evt) => {

        if (evt.target === evt.currentTarget) {
            this.setState({modalIsOpen: false,})
        } 
    }
    onCloseEsc = (evt) => {
        if ( evt.code === "Escape") {
            this.setState({modalIsOpen: false,})
        } 
    }
    
    render() {
        const { webformatURL, tags, largeImageURL } = this.props
        const { modalIsOpen} = this.state
        return (
            <>
            <Items>
                <img
                        className="gallary-img"
                        src={webformatURL}
                        alt={tags}
                        loading="lazy"
                        onClick={this.onOpenModal}
                    />
                    
            </Items>
                {modalIsOpen && <Modal largeImageURL={largeImageURL} tags={tags} onCloseOverlay={this.onCloseOverlay} onCloseEsc={ this.onCloseEsc} />}
            </>
        )
    
    }
}


export default ImageGalleryItem;