import { request } from "@/utils/request";
import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken,getToken as _getToken, removeToken } from "@/utils/main";

const userStore = createSlice({
    name: "user",
    initialState: {
        token: _getToken() || "",
        userInfo:{}
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload //这行代码是存到了redux里
            _setToken(action.payload) //这行是存到了本地
        },
        setUserInfo(state,action){
            state.userInfo=action.payload
        },
        clearUserInfo(state){
            state.token = ''
            state.userInfo = {}
            removeToken()
        }
    }
})

const { setToken,setUserInfo,clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

//异步方法 完成登陆获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post("/authorizations", loginForm)
        dispatch(setToken(res.data.token))
    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get("/user/profile")
        dispatch(setUserInfo(res.data))
    }
}

export { setToken, fetchLogin,fetchUserInfo,clearUserInfo }
export default userReducer
