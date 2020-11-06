import React from 'react'
import PropTypes from 'prop-types'

const UrlLinkComponent = ({
    contentState,
    entityKey,
    children
}) => {
    const entity = contentState.getEntity(entityKey)
    const { url } = entity.getData()
    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
        >
            {children}
        </a>
    )
}

UrlLinkComponent.propTypes = {
    contentState: PropTypes.object.isRequired,
    entityKey: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default UrlLinkComponent
