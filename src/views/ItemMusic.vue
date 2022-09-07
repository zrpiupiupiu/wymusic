<template>
    <ItemMusicTop :playlist="playlist" />
    <ItemMusicList :playlist="playlist"/>
</template>

<script>
    import { useRoute } from 'vue-router';
    import { onMounted, reactive } from 'vue';
    import {getMusicItemList} from '@/request/api/item.js'
    import ItemMusicTop from '@/components/item/ItemMusicTop.vue';
    import ItemMusicList from '@/components/item/ItemMusicList.vue'


    export default {
        setup(){

            const state = reactive({
                playlist:{}
            })
            onMounted(async()=>{
                let id=useRoute().query.id
                console.log(id);
                console.log(useRoute())
                let res =await getMusicItemList(id);
                console.log(res)
                state.playlist=res.data.playlist
            })

            return(state)
        },
        components:{
            ItemMusicTop,ItemMusicList
        }

    }
</script>