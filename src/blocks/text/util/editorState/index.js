import { ContentBlock, ContentState, EditorState } from "draft-js"

const initialContentBlock = () => (
    (new ContentBlock()).set("type", "paragraph")
)

export const initialContentState = () => (
    ContentState.createFromBlockArray(
        [initialContentBlock()]
    )
)

const initialEditorState = () => (
    EditorState.createWithContent(
        initialContentState(), compositeDecorator
    )
)

export default initialEditorState 