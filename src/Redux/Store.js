import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './Reducer/rootReducer'


const midddle = [thunk]
if (process.env.NODE_ENV ==="development"){
    midddle.push(logger)
}
export default createStore(rootReducer,applyMiddleware(...midddle))