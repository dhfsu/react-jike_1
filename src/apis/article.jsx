import { request } from "@/utils/main";

//返回promise promise代表的是一个一部操作最终完曾或失败及其结果值
//获取频道列表
export function getChannelAPI() {
    return request({
        url: '/channels',
        method: 'GET',  //请求的方式
    })
}

// 提交文章表单
export function createArticleAPI(data) {
    return request({
        url: '/mp/articles?draft=false',
        method: 'POST',  //请求的方式
        data
    })
}