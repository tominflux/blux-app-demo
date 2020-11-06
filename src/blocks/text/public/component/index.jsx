import React from 'react'
import PropTypes from 'prop-types'
import getAlignmentClass from '../../common/util/getAlignmentClass'
import { Editor } from 'draft-js'
import getBlockStyles from '../../common/util/getBlockStyles'

const TextComponentPublic = ({
    editorState,
    alignment
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
            blockStyleFn={getBlockStyles}
            readOnly
        />
    </div>
)

TextComponentPublic.propTypes = {
    editorState: PropTypes.object.isRequired,
    alignment: PropTypes.string,
}

export default TextComponentPublic


