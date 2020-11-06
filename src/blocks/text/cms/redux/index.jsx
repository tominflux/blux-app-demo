import TEXT_ACTIONS from './actions'
import TextReducer from './reducer'
import genTextBlockState from './genState'

const TextRedux = {
    actions: TEXT_ACTIONS,
    reducer: TextReducer,
    genState: genTextBlockState,
}

export default TextRedux