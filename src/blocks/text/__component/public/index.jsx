import React from 'react'
import { Editor } from 'draft-js'
import classConcat from '../../../../util/classConcat'
import blockStyles from '../common/blockStyles'
import getAlignmentClass from '../common/getAlignmentClass'
import '../common/styles.css'

const TextComponentPublic = ({
    editorState,
    alignment,
}) => (
    <div
        className={classConcat(
            "container",
            "text-block",
            getAlignmentClass(alignment),
        )}
    >
        <Editor
            editorState={editorState}
            blockStyleFn={blockStyles}
            readOnly
        />
    </div>
)


export default TextComponentPublic
