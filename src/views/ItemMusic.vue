<template>
    <div>歌单详情页</div>
</template>

<script>
    import { useRoute } from 'vue-router';
    import { onMounted, reactive } from 'vue';
    import {getMusicItemList} from '@/request/api/item.js'
    export default {
        setup(){

            const state = reactive({
                playList:{}
            })
            onMounted(async()=>{
                let id=useRoute().query.id
                console.log(id);
                console.log(useRoute())
                let res =await getMusicItemList(id);
                console.log(res)
                state.playList=res.data.playlist
            })

            return(state)
        }

    }
</script>