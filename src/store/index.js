import { createStore } from 'vuex'
import { getMusicLyric } from '@/request/api/item.js'


export default createStore({
  state: {
    playList:[{//播放列表
      al:{
        id: 34930257,
        name: "成都",
        pic: 2946691234868155,
        picUrl: "http://p3.music.126.net/34YW1QtKxJ_3YnX9ZzKhzw==/2946691234868155.jpg",
        pic_str: "109951166724351491",
        
      },
      id:436514312,

      name:"成都",
      
      ar:[{
        name:"赵雷"
      }]


    }],
    playListIndex:0,//默认下标为0
    isbtnShow:true,//暂停按钮的显示
    detailShow: false,//歌曲详情页的显示,默认为false不显示
    lyricList:{},//歌词
    currentTime:0,//当前时间
    duration:0,//歌曲总时长
    isLogin:false,//判断是否登录
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function(state,value){
      state.isbtnShow = value
    },
    pushPlayList: function(state,value){
      state.playList.push(value)
    },
    updatePlayList: function(state,value){
      state.playList= value
      console.log(state.playList);
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex = value
    },
    updateDetailShow:function(state){
      state.detailShow= !state.detailShow//取反
    },
    updateLyricList:function(state,value){
      state.lyricList=value
    },
    updateCurrentTime:function(state,value){
      console.log(state.currentTime);
      state.currentTime=value
    },
    updateDuration:function(state,value){
      state.duration=value
    },

  },
  actions: {
    getLyric: async function(context,value){
      let res=await getMusicLyric(value)

      console.log(res);
      context.commit("updateLyricList",res.data.lrc)

    }
  },
  modules: {
  }
})
