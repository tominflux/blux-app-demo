import TEXT_ACTION_TYPES from "../actionTypes"

const TextReducer = (state, action) => {
    switch (action.type) {
        case TEXT_ACTION_TYPES.UPDATE_EDITOR_STATE:
            const { newEditorState } = action.payload
            return {
                ...state,
                editorState: newEditorState
            }
        case TEXT_ACTION_TYPES.SET_ALIGNMENT:
            const { newAlignmentState } = action.payload
            return {
                ...state,
                alignment: newAlignmentState
            }
        default:
            return state
    }
}

export default TextReducer
