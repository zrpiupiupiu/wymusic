<template>
    <div class="searchTop">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
            <use xlink:href="#icon-zuojiantou"></use>
        </svg>

        <input type="text" placeholder="搜索框" >
       
    </div>
</template>


<style>
    .searchTop{
        width: 100%;
        height: 1rem;
        padding: 0 10px;
        display: flex;
        align-items: center;

        
    }

    input{
        margin-left: .4rem;
        border: none;
        border-bottom: 1px solid #999;
        width: 95%;
        padding: 5px;
    }
</style>