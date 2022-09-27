import service from "..";

//获取首页轮播图数据
export function getBanner(){

    return service({
        method:"get",
        url:"/banner?type=2",
    })
}

//获取推荐歌单
export function getMusicList(){

    return service({
        method:'get',
        url:'/personalized?limit=15'
    })
}

//实现搜索/cloudsearch?keywords=海阔天空
export function getSearchMusic(data){

    return service({
        method:'get',
        url:`/cloudsearch?keywords=${data}` //反引号
    })
}