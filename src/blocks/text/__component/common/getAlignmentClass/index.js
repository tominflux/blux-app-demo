import TEXT_ALIGNMENT_STATES from '../../../common/util/alignmentStates'

const getAlignmentClass = (alignment) => {
    switch (alignment) {
        case TEXT_ALIGNMENT_STATES.LEFT:
            return "text-block--left"
        case TEXT_ALIGNMENT_STATES.CENTER:
            return "text-block--center"
        case TEXT_ALIGNMENT_STATES.RIGHT:
            return "text-block--right"
        default:
            throw new Error(
                `Unrecognised alignment '${alignment}'.`
            )
    }
}

export default getAlignmentClass
