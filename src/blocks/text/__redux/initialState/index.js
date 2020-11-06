import { genBlockState } from 'blux-app'
import initialEditorState from '../../util/editorState'
import { TEXT_ALIGNMENT_STATES } from '../actionTypes'

const genTextBlockState = () => genBlockState(
    "text",
    {
        editorState: initialEditorState(),
        alignment: TEXT_ALIGNMENT_STATES.LEFT,
    }
)

export default genTextBlockState
