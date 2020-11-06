import { ContentBlock, ContentState } from "draft-js"

const getInitialContentBlock = () => (
    (new ContentBlock()).set("type", "paragraph")
)

const getInitialContentState = () => (
    ContentState.createFromBlockArray(
        [getInitialContentBlock()]
    )
)

export default getInitialContentState