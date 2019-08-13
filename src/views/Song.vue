<template>
    <div class="song">
        <div class="ftitle">
            <h3>热歌榜</h3>
            <ul>
                <li v-for="(item,index) of slist":key="index">
                    <img :src="'http://127.0.0.1:3000/img/'+item.smg">
                    <router-link to="/playlist">{{item.name}}</router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="stitle">
                <h2>飙升热歌榜</h2>
                <div>
                    <button>全部播放</button>
                    <p>{{time}} 更新</p>
                </div>
            </div>
            <hr>
            <div class="body">
                <div class="inp">
                    <input id="all" type="checkbox" v-model="checked" @click="checkAll"/>
                    <label for="all">全选</label>
                </div>
                <ul>
                    <li v-for='(item,i) of tlist':key="i">
                        <input type="checkbox" v-model="checklist" :value='item.num'/>
                        <router-link :to="`/play/${i}`">
                            <span>
                             {{item.num}} {{item.name}}
                            </span>
                      
                        <div class="bg">
                            <div title="播放" class="bg1"></div>
                            <div title="下载" class="bg2"></div>
                            <div :title='item.name' class="bg3"></div>
                            <p>{{item.time}}</p>
                        </div>
                        </router-link>
                    </li>
                </ul>
            </div> 
        </div>
        
    </div>
</template>
<script>
    export default{
        data() {
            return {
                checked:false,
                checklist:[],
                time:'',
                slist:[/*{
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
                name:'韩国新歌榜'}*/
                ],
                tlist:[/*{
                num:1,name:'暴林、乔玲儿 - 爱情路上风雨多',time:'4.25'},{
                num:2,name:'张怡诺 - 雨中泪',time:'4.11'},{
                num:3,name:'任贤齐 - 英雄降临',time:'4.39'},{
                num:4,name:'郑茜匀 - 爱情傀儡',time:'4.01'},{
                num:5,name:'半阳 - 与山',time:'3.25'},{
                num:6,name:'音阙诗听、昆玉 - 立秋',time:'4.25'},{
                num:7,name:'徐聪 - 醉仙美',time:'5.15'},{
                num:8,name:'齐萧 - 下落',time:'4.55'},{
                num:9,name:'Dante Klein、Jantine - what i like about u',time:'3.22'},{
                num:10,name:'小爱的妈、汐音社 - 八月浮槎',time:'4.43'},{
                num:11,name:'王铮亮 - 归还世界给你',time:'3.55'},{
                num:12,name:'猫咪呀 - 不舍',time:'2.53'},{
                num:13,name:'白小白 - 爱不离开',time:'3.22'},{
                num:14,name:'任然 - 后继者',time:'2.48'},{
                num:15,name:'姚雪(雪宝) - 还好有你在',time:'4.21'},{
                num:16,name:'小灿 - 不想这样难过',time:'4.05'},{
                num:17,name:'The Lighters 萊特 - 爱那么新鲜',time:'3.59'},{
                num:18,name:'郑源、杨思琦 - 想你了',time:'5.25'},{
                num:19,name:'张茜 - 青春里不知疲倦的向往',time:'4.05'},{
                num:20,name:'董力 - 烈火',time:'4.13'},{
                num:21,name:'吴是闳 - 不说穿',time:'5.25'},*/
            ]
            }
        },
        watch: {
            checklist(){
                if(this.checklist.length==this.tlist.length){
                    this.checked=true
                } else{
                    this.checked=false
                }
            }
        },
        methods: {
            checkAll(){
                　if(this.checked){
                    
　　　　　　            this.checklist=[];
　　　　           }else{
　　　　　　            this.tlist.forEach((item)=>{
　　　　　　       if(this.checklist.indexOf(item.num)==-1){
　　　　　　　　        this.checklist.push(item.num)
　　　　　　            }
　　　　　　        })
　　　　        }
            },
            loadMore3(){
                var url='playSlist'
                this.axios.get(url).then((result)=>{
                    console.log(result)
                    this.slist=result.data
                    console.log(this.slist)
                })
            },
            loadMore4(){
                var url='playTlist'
                this.axios.get(url).then((result)=>{
                    console.log(result)
                    this.tlist=result.data
                    console.log(this.tlist)
                })
            },
        },
        created() {
            this.time=new Date().toLocaleString();
            this.loadMore3();
            this.loadMore4()
        },
        
    }
</script>
<style scoped>
    *{padding:0;margin: 0;}
.song{
    width: 1100px;
    margin: 50px auto;
    padding-bottom: 50px;
    display: flex;
    justify-content: space-between;
}
.content{
    width: 800px;
    margin:0 auto ;
}
.stitle{
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 10px;
}
.stitle h2{
    padding: 12px 0;
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
.ftitle{
    padding: 20px 30px ;
    border-right: 1px solid #aaa;
}
.ftitle li{
    padding:8px 5px;
}
.ftitle a:hover{
    color: #4dbcf8;
}
.ftitle a{
    margin-left: 6px;
    font-size: 13px;
    color: #666;
}
.body .inp{
    padding: 10px 10px;
}
.body li{padding:0 10px;}
.body li a{
    border-bottom: 1px dotted #ccc;
    display: flex;
    justify-content: space-between;
    padding: 10px 9px;
}
.body li span{
    font-size: 13px;
    color: #555
}
.bg1{
    width: 15px;
    height: 15px;
    background-image: url('../../public/img/song/icon_splice.png');
    display: none;
}
.bg1:hover{
    background-position: 0px -30px;
}
.bg2{
    width: 15px;
    height: 15px;
    background-image: url('../../public/img/song/icon_splice.png');
    background-position: -90px 0px;
    display: none;
}
.bg2:hover{
    background-position: -90px -30px;
}
.bg3{
    width: 15px;
    height: 15px;
    background-image: url('../../public/img/song/icon_splice.png');
    background-position: -300px 0px;
    display: none;
}
.bg3:hover{
    background-position: -300px -30px;
}
.body li:hover .bg1,.body li:hover .bg2,.body li:hover .bg3{
    display: block;
}
.body li .bg{
    padding-top:8px;
    display: flex;
    font-size: 13px;
    color: #777;
    height: 13px;
}
.body li .bg>div{
    margin-right: 10px;
}
</style>