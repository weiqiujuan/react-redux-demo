/**
 * Created by weiqiujuan on 17-9-7.
 */
import {combineReducers}from'redux';
import hello from"./hello";
import login from'./login';
import register from'./register';
import userList from './userList'

export default combineReducers({
    hello,
    login,
    register,
    userList
});