import { useState } from "react";

import Modal  from "components/Modal/Modal";

import { Items } from "./ImageGalleryItem.styled";


const ImageGalleryItem = ({largeImageURL, tags, webformatURL}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const onOpenModal = () => {
        setModalIsOpen(true);
    }
    const onCloseOverlay = (evt) => {
        if (evt.target === evt.currentTarget) {
            setModalIsOpen(false);
        } 
    }
    const onCloseEsc = (evt) => {
        if ( evt.code === "Escape") {
            setModalIsOpen(false)
        } 
    }

    return (
        <>
        <Items>
            <img
                    className="gallary-img"
                    src={webformatURL}
                    alt={tags}
                    loading="lazy"
                    onClick={onOpenModal}
                />
                
        </Items>
            {modalIsOpen && <Modal largeImageURL={largeImageURL} tags={tags} onCloseOverlay={onCloseOverlay} onCloseEsc={ onCloseEsc} />}
        </>
    )

}



export default ImageGalleryItem;