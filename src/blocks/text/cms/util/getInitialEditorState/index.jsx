import { EditorState } from "draft-js"
import getInitialContentState from "../getInitialContentState"
import compositeDecorator from '../../../common/util/compositeDecorator'


const getInitialEditorState = () => (
    EditorState.createWithContent(
        getInitialContentState(), 
        compositeDecorator
    )
)

export default getInitialEditorState 