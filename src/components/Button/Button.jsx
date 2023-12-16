import {ButtonEl} from "./Button.styled"

const Button = ({handleLoadMore}) => {
    return (
        <ButtonEl onClick={handleLoadMore} type="button">Load more</ButtonEl>
    )
}

export default Button;