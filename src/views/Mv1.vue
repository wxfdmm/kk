<template>
    <div class="vid">
        
        <div class="cv">
            <p>SING女团 - 千盏</p>
           <video src="../assets/SING女团 - 千盏.mp4" id="v3" ></video>
            <div>
                <button @click="vplay">播放</button>
                <button @click="vpause">暂停</button>
                <button @click="vplay2">快进</button>
                <button @click="vplay3">慢播</button>
            </div> 
        </div>
        
        <ul class="bimg content_img">
                <li>
                   
                        <div class="pbg"></div>
                         <router-link to="/Mv1">
                        <img src="../../public/img/index/mv1.jpg">
                        <p> SING女团 - 千盏</p>
                    </router-link>
                    
                </li>
                <li>
                    <div class="pbg"></div>
                    <router-link to="/Mv">
                    <img src="../../public/img/index/mv2.jpg">
                    <p>画词戏子 - 把孤独当作晚餐</p>
                    </router-link>
                </li>
                <li>
                    <div class="pbg"></div>
                    <img src="../../public/img/index/mv3.jpg">
                    <p>GAI、大痒痒 - 哪吒</p>
                </li>
                <li>
                    <div class="pbg"></div>
                    <img src="../../public/img/index/mv4.jpg">
                    <p>陈雪燃 - 无名之辈</p>
                </li>
                <li>
                    <div class="pbg"></div>
                    <img src="../../public/img/index/mv5.jpg">
                    <p>井胧 - 把孤独当作晚餐</p>
                </li>
                <li>
                    <div class="pbg"></div>
                    <img src="../../public/img/index/mv6.jpg">
                    <p>肖战、王一博 - 无羁</p>
                </li>
            </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        vplay(){v3.play()},
        vpause(){v3.pause()},
        vplay2(){v3.playbackRate=3;v3.play();},
        vplay3(){v3.playbackRate=0.5;v3.play();}
    },
}
</script>
<style scoped>
    .vid{
        width: 1200px;
        margin: 80px auto;
    }
    p{
        padding: 20px 0;
    }
    video{
        width:1000px;
    }
    .cv{
        width: 1000px;
        margin: 0 auto;
    }
    .cv>div{
        float: right;
    }
    .vid button{
        margin:10px 0 ;
        padding: 5px 10px;
        margin-left: 10px;
       
    }
    .content_img{
        width: 1200px;
        margin: 0 auto;
        padding: 100px 0px;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.content_img div{width: 130px;overflow: hidden;}
.content_img p{text-align: center;padding: 20px 0;}
.content_img li:hover{
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
li{
	z-index: 100;
    margin: 30px 0;
}
li:hover>.pbg{
  transform: scale(0.8);
}
.content_img .pbg{
	position: relative;
	top:50%;
	left: 23%;
	margin: -53px 0px;
  width: 100px;
  height: 100px;
  background-image: url(../../public/img/index/iconall.png);
  background-position: -5px -394px;
  z-index: 1;
  transform: scale(0);
  transition: transform 0.3s ;
}
.bimg img{
	width: 320px;
}
</style>