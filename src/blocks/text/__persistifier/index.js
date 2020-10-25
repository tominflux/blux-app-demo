import {
    convertToRaw,
    convertFromRaw,
    EditorState
} from "draft-js"
import { initialContentState } from "../util/editorState"
import compositeDecorator from '../component/common/decorators'


const extractRawContentState = (editorState) => {
    const contentState = editorState.getCurrentContent()
    const rawContentState = convertToRaw(contentState)
    return rawContentState
}

const fromRawContentState = (rawContentState) => {
    const contentState = convertFromRaw(rawContentState)
    return contentState
}

const persistify = (textBlockState) => {
    const rawContentState = extractRawContentState(
        textBlockState.editorState
    )
    const {
        editorState,
        ...withoutEditorState
    } = textBlockState
    const persistifiedState = {
        ...withoutEditorState,
        rawContentState
    }
    return persistifiedState
}

const unpersistify = (persistifiedTextBlockState) => {
    const receivedContentState = fromRawContentState(
        persistifiedTextBlockState.rawContentState
    )
    const blockCount = receivedContentState
        .getBlocksAsArray().length
    const adaptedContentState = (blockCount > 0) ?
        receivedContentState : initialContentState()
    const editorState = EditorState.createWithContent(
        adaptedContentState, compositeDecorator
    )
    const { rawContentState, ...withoutRawContentState } =
        persistifiedTextBlockState
    const unpersistifiedState = {
        ...withoutRawContentState,
        editorState
    }
    return unpersistifiedState
}

const textPersistifier = {
    persistify, unpersistify
}

export default textPersistifier
