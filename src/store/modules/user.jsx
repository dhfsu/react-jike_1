import { request } from "@/utils/request";
import { createSlice } from "@reduxjs/toolkit";


const userStore = createSlice({
    name: "user",
    initialState: {
        token: localStorage.getItem('token_key') || ""
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload //这行代码是存到了redux里
            localStorage.setItem('token_key',action.payload) //这行是存到了本地
        }
    }
})

const { setToken } = userStore.actions
const userReducer = userStore.reducer

//异步方法 完成登陆获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post("/authorizations", loginForm)
        dispatch(setToken(res.data.token))
    }
}
export { setToken, fetchLogin }
export default userReducer