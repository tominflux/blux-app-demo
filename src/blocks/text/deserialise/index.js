const { EditorState, convertFromRaw } = require("draft-js")
const { default: compositeDecorator } = require("../component/common/decorators")
const { initialContentState } = require("../util/editorState")

const deserialiseTextBlock = (serialisedTextBlockProps) => {
    // Extract raw draft-js content state and remaining props.
    const { rawContentState, ...remainingProps } =
        serialisedTextBlockProps
    // Analyse draft-js content state.
    const contentState = convertFromRaw(
        serialisedTextBlockProps.rawContentState
    )
    const contentBlockCount = 
        contentState.getBlocksAsArray().length
    // Construct draft-js editor state from content state.
    const editorState = EditorState.createWithContent(
        contentBlockCount > 0 
            ? contentState : initialContentState(), 
        compositeDecorator
    )
    // Return deserialised properties.
    return { editorState, ...remainingProps }
}

export default deserialiseTextBlock