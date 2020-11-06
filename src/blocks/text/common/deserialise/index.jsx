import { EditorState, convertFromRaw } from 'draft-js'
import compositeDecorator from '../util/compositeDecorator'
import getInitialContentState from '../../cms/util/getInitialContentState'

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
            ? contentState : getInitialContentState(), 
        compositeDecorator
    )
    // Return deserialised properties.
    return { editorState, ...remainingProps }
}

export default deserialiseTextBlock