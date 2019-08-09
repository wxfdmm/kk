<template>
    <div class="song">
        <div>
            <h3>热歌榜</h3>
            <ul>
                <li v-for="(item,index) of slist":key="index">
                    <img :src='item.smg'>
                    <router-link to="">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <div>
            <div class="stitle">
                <h2>飙升热歌榜</h2>
                <div>
                    <button>全部播放</button>
                    <p>{{time}} 更新</p>
                </div>
            </div>
            <hr>
            <div>
                <label><input type="checkbox"/>全选</label>
            </div> 
        </div>
        
    </div>
</template>
<script>
    export default{
        data() {
            return {
                time:'',
                slist:[{
                smg:require('../../public/img/song/1.jpg'),
                name:'酷狗TOP500'},{
                smg:require('../../public/img/song/2.jpg'),
                name:'网络红歌榜'},{
                smg:require('../../public/img/song/3.jpg'),
                name:'DJ热歌榜'},{
                smg:require('../../public/img/song/4.jpg'),
                name:'酷狗雷达榜'},{
                smg:require('../../public/img/song/5.jpg'),
                name:'华语新歌榜'},{
                smg:require('../../public/img/song/6.jpg'),
                name:'欧美新歌榜'},{
                smg:require('../../public/img/song/7.png'),
                name:'韩国新歌榜'},{
                smg:require('../../public/img/song/8.jpg'),
                name:'日本新歌榜'},{
                smg:require('../../public/img/song/9.png'),
                name:'酷狗TOP500'},{
                smg:require('../../public/img/song/10.jpg'),
                name:'网络红歌榜'},{
                smg:require('../../public/img/song/11.png'),
                name:'DJ热歌榜'},{
                smg:require('../../public/img/song/12.jpg'),
                name:'酷狗雷达榜'},{
                smg:require('../../public/img/song/13.jpg'),
                name:'华语新歌榜'},{
                smg:require('../../public/img/song/14.jpg'),
                name:'欧美新歌榜'},{
                smg:require('../../public/img/song/15.jpg'),
                name:'韩国新歌榜'},{
                smg:require('../../public/img/song/16.jpg'),
                name:'日本新歌榜'},{
                smg:require('../../public/img/song/17.png'),
                name:'DJ热歌榜'},{
                smg:require('../../public/img/song/18.jpg'),
                name:'酷狗雷达榜'},{
                smg:require('../../public/img/song/19.png'),
                name:'华语新歌榜'},{
                smg:require('../../public/img/song/20.jpg'),
                name:'欧美新歌榜'},{
                smg:require('../../public/img/song/21.png'),
                name:'韩国新歌榜'},{
                smg:require('../../public/img/song/22.jpg'),
                name:'日本新歌榜'},{
                smg:require('../../public/img/song/23.png'),
                name:'华语新歌榜'},{
                smg:require('../../public/img/song/24.jpg'),
                name:'欧美新歌榜'},{
                smg:require('../../public/img/song/25.jpg'),
                name:'韩国新歌榜'}
                ]
            }
        },
        created() {
            this.time=new Date().toLocaleString()
        },
    }
</script>
<style scoped>
    *{padding:0;margin: 0;}
.song{
    width: 1200px;
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
}
.stitle{
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.stitle div button{
    font-size: 16px;
    background-color:#4dbcf8;
    padding:3px 8px;
    border-radius: 5px;
    margin:8px 0;
    
}
.stitle div button:active{
    box-shadow: 0 0px 5px rgba(0,0,0,1);
    color: #fff;
}
.stitle div p{
    font-size:12px;
    color: #666; 
}
</style>