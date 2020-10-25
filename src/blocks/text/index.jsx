
import React from 'react'
import TextComponentCms from './component/cms'
import TEXT_ACTIONS from './redux/actions'
import TEXT_ACTION_TYPES from './redux/actionTypes'
import TextReducer from './redux/reducer'
import genTextBlockState from './redux/initialState'
// import textPersistifier from './persistifier'
import { BsType } from 'react-icons/bs';
import TextComponentPublic from './component/public'
import deserialiseTextBlock from './deserialise'

const TextBlock = {
    type: 'text',
    component: {
        cms: TextComponentCms,
        public: TextComponentPublic,
    },
    redux: {
        actions: TEXT_ACTIONS,
        actuonTypes: TEXT_ACTION_TYPES,
        reducer: TextReducer,
        initialState: genTextBlockState,
    },
    deserialise: deserialiseTextBlock,
    // persistifier: textPersistifier,
    displayName: "Text",
    icon: () => <BsType size={64} />

}

export default TextBlock