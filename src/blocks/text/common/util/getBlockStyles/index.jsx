import './styles.css'

const getBlockStyles = (contentBlock) => {
    const type = contentBlock.getType()
    switch (type) {
        case "unstyled":
            return "text-block__block-unstyled"
        case "paragraph":
            return "text-block__block-paragraph"
        case "header-one":
            return "text-block__block-header-one"
    }
}

export default getBlockStyles
