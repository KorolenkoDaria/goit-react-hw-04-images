import { Gallary } from "./ImageGallery.styled";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

function ImageGallery({gallery}) {
    return (
        <Gallary>
            {gallery.map((el, index)=> {
                return <ImageGalleryItem
                    key={index} /* використала index тому, що react сварився, що id не унікальний */
                    id={el.id}
                    webformatURL={el.webformatURL}
                    largeImageURL={el.largeImageURL}
                    tags={el.tags}
            />
            })}
            
        </Gallary>
    )

}
export default ImageGallery;
