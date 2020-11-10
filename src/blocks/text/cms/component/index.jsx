import React from 'react'
import PropTypes from 'prop-types'
// import getElementPosition from '../../../../util/getElementPosition'
import getAlignmentClass from '../../common/util/getAlignmentClass'
import { Editor } from 'draft-js'
import classConcat from '../../../../util/classConcat'
import getBlockStyles from '../../common/util/getBlockStyles'
import '../../common/styles.css'

const TextComponentCms = ({
    editorState,
    updateEditorState,
    alignment,
    // setAlignment
}) => {
    // Hooks
    // const ref = React.useRef()
    // State
    // const [toolbarFixed, setToolbarFixed] = React.useState(false)
    // Effects
    // - Update toolbar position on scroll.
    /*
    React.useEffect(() => {
        const onScroll = () => {
            if (!ref.current) return
            const position = getElementPosition(ref.current)
            const toolbarY = position.y - 133
            const scrollY = window.scrollY
            setToolbarFixed(toolbarY < scrollY)
        }
        window.addEventListener("scroll", onScroll)
        return window.removeEventListener("scroll", onSroll)
    })
    */
    // Render
    return (
        <div
            className={classConcat(
                "container",
                "text-block",
                getAlignmentClass(alignment),
            )}
        >
            {/*
            <Toolbar
                editorState={editorState}
                updateEditorState={updateEditorState}
                show={true}
                fixed={toolbarFixed}
                alignmentState={alignment}
                setAlignment={setAlignment}
            />
            */}
            <Editor
                editorState={editorState}
                onChange={editorState => updateEditorState(editorState)}
                blockStyleFn={getBlockStyles}
            />
        </div>
    )
}

TextComponentCms.propTypes = {
    editorState: PropTypes.object.isRequired,
    updateEditorState: PropTypes.func.isRequired,
    alignment: PropTypes.string.isRequired,
    setAlignment: PropTypes.func.isRequired,
}

export default TextComponentCms
