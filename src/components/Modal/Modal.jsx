import { useEffect } from "react";

import { Overlay } from "./Modal.styled";

const Modal = ({onCloseOverlay,  largeImageURL, tags, onCloseEsc}) => {
    
    useEffect(() => {
        window.addEventListener('keydown', onCloseEsc);
        return () => {
            window.removeEventListener('keydown', onCloseEsc)
        }
    });


    return (
        <Overlay onClick={onCloseOverlay}>
            <div className="modal"> 
                <img src={largeImageURL} alt={tags} />
            </div>
        </Overlay>
)
}
export default Modal;

