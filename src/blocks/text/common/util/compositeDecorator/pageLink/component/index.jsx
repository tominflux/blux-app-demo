import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as path from 'path'

const PageLinkComponent = ({
    contentState,
    entityKey,
    children
}) => {
    const entity = contentState.getEntity(entityKey)
    const { pageId } = entity.getData()
    const linkPath = path.join("/", pageId)
    return (
        <Link to={linkPath}>
            {children}
        </Link>
    )
}

PageLinkComponent.propTypes = {
    contentState: PropTypes.object.isRequired,
    entityKey: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default PageLinkComponent
