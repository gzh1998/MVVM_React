import { combineReducers } from 'redux';
import Index from '../store/reducers/index';
import Login from '../store/reducers/login';
import List from '../store/reducers/list';

export default combineReducers({
    Index,
    Login,
    List
})