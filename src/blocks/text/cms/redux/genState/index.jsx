import { genBlockState } from 'blux-app'
import getInitialEditorState from '../../util/getInitialEditorState'
import TEXT_ALIGNMENT_STATES from '../../../common/util/alignmentStates'

const genTextBlockState = () => genBlockState(
    "text",
    {
        editorState: getInitialEditorState(),
        alignment: TEXT_ALIGNMENT_STATES.LEFT,
    }
)

export default genTextBlockState
