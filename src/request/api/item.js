import service from "..";

//获取歌单详情数据

// eslint-disable-next-line no-unused-vars
export function getMusicItemList(data){
    return service({
        method:'get',
        url:`/playlist/detail?id=${data}`//注意要用反引号
    })
}