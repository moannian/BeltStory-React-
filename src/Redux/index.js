// 创建一个Redux
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import Reducers from './Reducer'

const Store = createStore(Reducers, composeWithDevTools())
export default Store