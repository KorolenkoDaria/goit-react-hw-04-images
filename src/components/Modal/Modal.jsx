import { Component } from "react";

import { Overlay } from "./Modal.styled";

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.props.onCloseEsc);
    }
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.props.onCloseEsc)
    }

    render() { 
        const {onCloseOverlay, largeImageURL,  tags} = this.props
        return (
            <Overlay onClick={onCloseOverlay}>
                <div className="modal"> 
                    <img src={largeImageURL} alt={tags} />
                </div>
            </Overlay>
    )
    }

}



