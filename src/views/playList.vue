<template>
    <div class="playList">
        <div class="pList">
           <div class="header">
               <h2>全部</h2>
               <ul  :class="[{active:item.sex}]"v-for="(item,index) of ulist" :key="index" @click="changeli(index,item)" >
                    <li>
                        <h3>{{item.name}}</h3>
                        <ul v-show="item.sex">
                           <li v-for="(lis,i) of item.list" :key="i">
                               <router-link to="/song">
                                   {{lis}}
                               </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
           </div> 
           <div class="ilist">
			   <div class="tim">
				  <p>
					<router-link to="">最新 </router-link>
					<router-link to=""> 最热</router-link>
				  </p> 
				  <span>{{time}} 更新</span>
			   </div>
							
							 <ul>
								 <li v-for="(im,i) of iList" :key="i">
									 <router-link to="/play1">
										 <div>
										 	<div class="bg"></div>
										 	<img class="mg" :src="'http://127.0.0.1:3000/img/'+im.mg"/>
											 <p>{{im.title}}</p>
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
				time:'',
                ulist:[
                   /* {
                        name: '语种',
                        list: ['华语 ', '欧美', '粤语 ', '日语', '韩语','纯音乐 ', ' 小语种'],
                        show: false
                    }, {
                        name: '风格',
                        list: ['流行','摇滚','民谣' , '电子', '影视原声', 'ACG', '轻音乐' ,'新世纪' ,'爵士', '古典' ,'乡村' ,'说唱', '世界音乐' ,'古风', '儿歌', '朋克', '布鲁斯', 'RnB/Soul' ,'金属', '雷鬼', '英伦', '民族' ,'后摇', '拉丁'],
                        show: false
                    }, {
                        name: '情感',
                        list: ['快乐', '美好', '安静' ,'伤感' ,'寂寞', '思念' ,'孤独', '怀旧', '悲伤' ,'感动', '治愈', '放松', '清新' ,'浪漫', '兴奋', '性感' ,'励志'],
                        show: false
                    }, {
                        name: '场景',
                        list: ['运动', '驾驶' ,'学习' ,'工作', '清晨' ,'夜晚' ,'午后' ,'游戏', '旅行' ,'散步', '酒吧', '夜店' ,'咖啡厅', '地铁' ,'校园' ,'婚礼' ,'约会', '休息'],
                        show: false
                    }, {
                        name: '主题',
                        list: ['经典', '翻唱', '榜单' ,'现场' ,'KTV' ,'DJ' ,'网络歌曲' ,'器乐'],
                        show: false
                    }*/
				],
				iList:[
					/*{
									mg:require('../../public/img/playList/g1.jpg'),title:'【经典老歌】我们听的是情怀'
								},{
									mg:require('../../public/img/playList/g2.jpg'),title:'我永远屈服于温柔，你是温柔本身'
								},{
									mg:require('../../public/img/playList/g3.jpg'),title:'情歌浅唱：一个人的抒情曲'
								},{
									mg:require('../../public/img/playList/g4.jpg'),title:'小时候词不达意，长大后言不由衷'
								},{
									mg:require('../../public/img/playList/g5.jpg'),title:'唤醒活力的嘻哈说唱'
								},{
									mg:require('../../public/img/playList/g6.jpg'),title:'治愈之音丨做你心上的温度计'
								},{
									mg:require('../../public/img/playList/g7.jpg'),title:'综艺中不可错过的精彩翻唱'
								},{
									mg:require('../../public/img/playList/g8.jpg'),title:'儿歌精选—宝宝唱歌学古诗'
								},{
									mg:require('../../public/img/playList/g9.jpg'),title:'滚石金韵|台湾校园民歌运动'
								},{
									mg:require('../../public/img/playList/g10.jpg'),title:'年少不听李宗盛，听懂已是不惑年'
								},{
									mg:require('../../public/img/playList/g11.jpg'),title:'动画影视的主题曲真的很好听'
								},{
									mg:require('../../public/img/playList/g12.jpg'),title:'吉他遇见心事，嗓音邂逅情诗'
								},{
									mg:require('../../public/img/playList/g13.jpg'),title:'治愈系暖男品冠，疗伤情歌精选'
								},{
									mg:require('../../public/img/playList/g14.jpg'),title:'乾坤在手'
								},{
									mg:require('../../public/img/playList/g15.jpg'),title:'远处是炊烟，心上一朵莲'
								},{
									mg:require('../../public/img/playList/g16.jpg'),title:'温柔与浪漫的融合，羽泉金曲精选'
								},{
									mg:require('../../public/img/playList/g17.jpg'),title:'漂洋过海的青春—娃娃金智娟精选'
								},{
									mg:require('../../public/img/playList/g18.jpg'),title:'惊艳LIVE现场，超越原版的味道'
								},{
									mg:require('../../public/img/playList/g19.jpg'),title:'听大叔唱尽人生：一晃就老了'
								},{
									mg:require('../../public/img/playList/g20.jpg'),title:'音乐启蒙，儿歌精选'
								},{
									mg:require('../../public/img/playList/g21.jpg'),title:'花的姿态|音乐诗人陈绮贞精选'
								}*/
							]
            }
				},
				methods: {
            changeli: function(ind, item) {
                // 先循环数据中的sex将其全部置为false,此时模板里的v-if判断生效关闭全部二级菜单,并移除样式
                this.ulist.forEach(i => {
                    // 判断如果数据中的ulist[i]的show属性不等于当前数据的sex属性那么ulist[i]等于false
                    if (i.sex !== this.ulist[ind].sex) {
                        i.sex = false;
                    };
                });
                // 取反(true或false)
                item.sex = !item.sex;
                console.log(item.sex)
			},
			loadMore1(){
				var	url='playIlist'
				this.axios.get(url).then(result=>{
					console.log(result)
					this.iList=result.data
				})
			},
			loadMore2(){
				var	url='playUlist'
				this.axios.get(url).then(result=>{
					console.log(result)
					this.ulist=result.data
					for(var item of this.ulist){
						console.log(item.list)
						item.list=item.list.split(',')
						if(item.sex==0){
							item.sex=false
						} else{
							item.sex=true
						}
						
					}
					console.log(this.ulist)
				})
			}
		},
		created() {
			this.time=new Date().toLocaleString();
			this.loadMore1();
			this.loadMore2();
        },
    
    }
</script>
<style scoped>
	*{padding: 0;margin: 0;}
	.playList{width:1200px;margin:50px auto;}
	.header {
					width:270px;
	        background-color: rgba(25, 158, 235, 0.815);
					color: #000;
					border-radius: 20px;
					}
	.header h2,h3{
					text-align: center;
					padding:10px 0;
					}
	.header>ul {
	        width: 100%;
					}
	.header>ul>li {
	        width: 100%;
	        border: 1px solid #aaa;
	        cursor: pointer; 
	        color: 20px;
	        text-align: center;
			border-radius:25px;
					}
	.header>ul>li:hover {
	        background-color: #ff9800;
					}
	.header>ul>li>ul {
	        width: 100%;
	        background: #eee;
					display: flex;
					flex-wrap: wrap;
					
					}
	.header>ul>li>ul>li{
				font-size:16px;
				border-radius:25px;
				width:90px;	
				padding:12px 0;
	}
	.header>ul>li>ul>li:hover{
	        background: #0c8ed9;
					}
	 .active {
	     		background-color: #ff9800;
					}
	 .pList{
		 display: flex;
		 justify-content: space-between;
	 }
	 .ilist{
		 width: 870px;
	 }
	 .ilist p{
		 margin-bottom: 10px; 
	 }

	 .ilist>ul{
		 display: flex;
		 flex-wrap: wrap;
		 justify-content: space-between
	 }
	 .ilist li{
		 width:250px;
		 text-align: center;
		 margin: 15px 10px;
		 position: relative;
	 }
	.mg{
		width: 200px;
		border-radius: 100px;
	}		
	.ilist>ul p{
		margin-top: 20px;
	}	
	.ilist li:hover .bg{
  	transform: scale(0.8);
	}
	.ilist li .bg{
		position: absolute;
		top:42%;
		left: 30%;
		margin: -53px 0px;
  	width: 100px;
  	height: 100px;
  	background-image: url(../../public/img/index/iconall.png);
  	background-position: -5px -394px;
  	z-index: 1;
  	transform: scale(.6);
  	transition: transform 0.4s ;
	}
	.ilist li:hover img{
		box-shadow: 0px 3px 30px rgba(0, 0, 0, 1);
		transform: rotate(100000deg);
		transition: all 1000s linear;
	}
	.tim{
		display: flex;
		justify-content: space-between;
	}
	.tim span{
		font-size: 15px;
		color: #999;
	}
</style>