import Login from './reducers/login';
import { combineReducers } from 'redux';
import Shopcar from './reducers/shopcar';
//合并reducer 包裹一层reducer名字 访问state
export default combineReducers({
    Login,
    Shopcar
})