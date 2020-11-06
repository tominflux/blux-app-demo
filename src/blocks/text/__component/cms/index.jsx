import React from 'react'
import classConcat from '../../../../util/classConcat'
import getElementPosition from '../../../../util/getElementPosition'
import blockStyles from '../common/blockStyles'
import getAlignmentClass from '../common/getAlignmentClass'
import '../common/styles.css'

const TextComponentCms = ({
    editorState,
    updateEditorState,
    alignment,
    setAlignment
}) => {
    // Ref
    const ref = React.useRef(null)
    // State
    const [toolbarFixed, setToolbarFixed] = React.useState(false)
    // Effects
    // - Update Position on Scroll.
    React.useEffect(() => {
        const onScroll = () => {
            if (ref.current === null) return
            const position = getElementPosition(ref.current)
            const toolbarY = position.y - 133
            const scrollY = window.scrollY
            setToolbarFixed(toolbarY < scrollY)
        }
        window.addEventListener("scroll", onScroll)
        return window.removeEventListener("scroll", onScroll)
    }, [])
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
                blockStyleFn={blockStyles}
            />
        </div>
    )
}

export default TextComponentCms
