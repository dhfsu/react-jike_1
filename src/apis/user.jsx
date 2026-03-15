import { request } from "@/utils/main";

//返回promise promise代表的是一个一部操作最终完曾或失败及其结果值
export function loginAPI(formData) {
    return request({
        url: '/authorizations',
        method: 'POST',  //请求的方式
        data: formData
    })
}

export function getProfileAPI() {
    return request({
        url: '/user/profile',
        method: 'GET'  //请求的方式

    })
}