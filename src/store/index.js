import { createStore } from 'vuex'

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
      id:436514312

    }],
    playListIndex:0,//默认下标为0
    isbtnShow:true,//暂停按钮的显示
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow: function(state,value){
      state.isbtnShow = value
    },
    updatePlayList: function(state,value){
      state.playList= value
      console.log(state.playList);
    },
    updatePlayListIndex:function(state,value){
      state.playListIndex = value
    }

  },
  actions: {
  },
  modules: {
  }
})
