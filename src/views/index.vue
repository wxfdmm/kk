<template>
    <div>
        <div class="banner_bg">
            <div id="banner" class="banner" >
                <div class="wrap">
                    <div class="ban">
                        <img src="../../public/img/index/11.jpg" >
                        <img src="../../public/img/index/12.jpg" >
                        <img src="../../public/img/index/13.jpg" >
                        <img src="../../public/img/index/14.jpg" >
                        <img src="../../public/img/index/15.jpg" >
						<img src="../../public/img/index/16.jpg" >
						<img src="../../public/img/index/17.jpg" >
                        <img src="../../public/img/index/18.jpg" >
                    </div> 
                    <ul class="dots">
                        <!-- indecator -->
                    </ul>
                </div>
                <div class="shadow">
                    <img src="../../public/img/index/shadow_min.png">
                </div>
                <div class="btn">
                    <button class="prev"></button>
                    <button class="next"></button>
                </div>
            </div>
		</div> 
		
		<!-- content -->
		<div class="content">
			<div>
				<div class="title">
					<h1>精选歌单</h1>
					<router-link to="">更多</router-link>
				</div>
				<ul class="content_img">
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content1.jpg">
						<p>mp3里的旧时光</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content2.jpg">
						<p>酷韩话事人</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content3.jpg">
						<p>迷幻摇滚</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content4.jpg">
						<p>每周推荐热曲</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content5.jpg">
						<p>ktv经典老歌</p>
					</li>
				</ul>
			</div>
			<div class="content_c">
				<h1>歌单推荐</h1>
				<div>
					<router-link to="">为你推荐</router-link>
					<router-link to="">90年代</router-link>
					<router-link to="">民谣</router-link>
					<router-link to="">日韩</router-link>
					<router-link to="">情歌</router-link>
					<router-link to="">网络歌曲</router-link>
				</div>
			</div>
			<ul class="content_img m-li">
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content6.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content7.jpg" alt="">
					<p>听完这些甜腻小情歌<br>
						就能拥有爱情了吧</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content8.jpg" alt="">
					<p>【影视】等一场最美的相遇</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content9.jpg" alt="">
					<p>把思念揉进歌里 • 中文说唱</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content10.jpg" alt="">
					<p>用耳朵抓住摩登春光</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content11.jpg" alt="">
					<p>动漫经典歌曲</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content12.jpg" alt="">
					<p>伤感 | 始于脸红，终于眼红</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content13.jpg" alt="">
					<p>温柔与浪漫的融合，刘若英</p>
				</li>
			</ul>
			<div class="dg">
				<div>
					<div class="title">
						<h1>推荐MV</h1>
						<router-link to="">更多</router-link>
					</div>
					<ul class="bimg content_img">
						<li>
							<div class="pbg"></div>
							<img src="../../public/img/index/mv1.jpg">
							<p> SING女团 - 千盏</p>
						</li>
						<li>
							<div class="pbg"></div>
							<img src="../../public/img/index/mv2.jpg">
							<p>画词戏子 - 把孤独当作晚餐</p>
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
				<div>
					<div class="title">
						<h1>分类精选</h1>
						<router-link to="">更多</router-link>
					</div>
					<ul class="mus-n">
						<li>
							<router-link to="">情歌</router-link>
						</li>
						<li>
							<router-link to="">红歌</router-link>
						</li>
						<li>
							<router-link to="">劲爆</router-link>
						</li>
						<li>
							<router-link to="">天籁</router-link>
						</li>
						<li>
							<router-link to="">经典</router-link>
						</li>
						<li>
							<router-link to="">网络</router-link>
						</li>
						<li>
							<router-link to="">欧美</router-link>
						</li>
						<li>
							<router-link to="">安静</router-link>
						</li>
						<li>
							<router-link to="">民歌</router-link>
						</li>
						<li>
							<router-link to="">80后</router-link>
						</li>
						<li>
							<router-link to="">儿歌</router-link>
						</li>
						<li>
							<router-link to="">伤感</router-link>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<div class="title">
					<h1>热门电台</h1>
					<router-link to="">更多</router-link>
				</div>
				<ul class="ul_t">
					<li><router-link to="">
						<img src="../../public/img/index/radio_1.jpg">
						<p>KTV必点曲</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_2.jpg">
						<p>2019中国好声音</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_3.jpg">
						<p>声入人心2</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_4.jpg">
						<p>明日之子第三季</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_5.jpg">
						<p>创造营2019</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_6.jpg">
						<p>这！就是原创</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_7.jpg">
						<p>即刻电音</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_8.jpg">
						<p>梦想的声音第三季</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_9.jpg">
						<p>蒙面唱将第三季</p>
					</router-link></li>
					<li><router-link to="">
						<img src="../../public/img/index/radio_10.jpg">
						<p>中国梦之声</p>
					</router-link></li>
				</ul>
			</div>
			<div class="d_img">
					<div class="title">
						<h1>更多活动</h1>
						<router-link to="">更多</router-link>
					</div>
				<img src="../../public/img/index/active1.jpg" >
				<img src="../../public/img/index/active2.jpg" >
				<img src="../../public/img/index/active3.jpg" >
			</div>
		</div>
    </div>
</template>
<script>
    export default{
		data() {
			return {
				
			}
		},
    }
</script>
<style scoped>
	*{padding:0;margin: 0;}
    .banner{
	width: 1200px; 
	/* 备用背景色 */
	/*background-image: linear-gradient(to top, #434343 0%, black 100%);*/
	/* 现用背景色 */
	/* background-image: linear-gradient(60deg, #29323c 0%, #485563 100%); */
	color: white;
	margin:0 auto;
	overflow:hidden;
	position: relative;
}

.banner .wrap{
	width: 730px;
	height: 370px;
	margin: 0 auto;
	display:flex;
	flex-direction: column;
	align-items: center;
	
}
.banner .download{
	width: 252px;
	height: 336px;
}

.banner .wrap > *{
	flex: 0 0 auto;
}

.banner .ban{
	/*width:40%;*/
	z-index: 10;
    margin-top: 15px;
	 transform-style:preserve-3d; 
	transition:transform 0.5s;
}
.banner .ban img{
	box-shadow: 0px 6px 60px rgba(0, 0, 0, 1);
	width: 100%;
	height: 300px;
    box-sizing: border-box;
    padding: 0 430px;
}
.banner .ban>img:not(:first-of-type){
	position: absolute;
    left: 0;
    top: 0;
}
.banner .shadow{
	position: absolute;
    bottom: 0;
    z-index:-1;
    left: 0;
    width:1200px;
}
.banner .shadow>img{
	width:100%
}
.banner .dots{
	display:flex;
	height: 15px;
    z-index: 11;
    /* position: absolute;
    bottom: 2.5%;
    right: 35%; */
}
.banner .dots li{
	cursor: pointer;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
	margin-left:40px;
}
.banner .dots li:hover{
	box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
	background:black;
	transition: all 0.5s ease;
}
.banner .dots li.active{
	box-shadow: 0 0 10px rgba(255, 80, 90, 0.6);
	background: rgb(23, 0, 0);
	transition: all 0.5s ease;
}
.banner .btn{
	display: flex;
}
.banner .btn>*{
	transform: scale(1.3);
	background-color: transparent;
	cursor: pointer;
	background-image: url(../../public/img/index/banner.png);
	position:absolute;
	top: 50%;
	width: 37px;
	height: 63px;
    z-index:100;
}
/* 鼠标划入btn动画 */
.banner .btn>.prev,
.banner .btn>.next{
	transition: left 0.3s ease-in,
				right 0.3s ease-in;
}
.banner:hover .btn>.prev {
	left: 0px;
}
.banner:hover .btn>.next {
	right: 0px;
}
.banner .btn>.prev{
	left: -36px;
	background-position: 0 -360px;
}
.banner .btn>.prev:hover{
	background-position: 0 -430px;
}
.banner .btn>.next{
	right: -36px;
	background-position: 0 -508px;
}
.banner .btn>.next:hover{
	background-position: 0 -578px;
}

.content{
	width: 1200px; 
	margin: 0 auto;
}
.title{
	display: flex;
	justify-content: space-between;
	padding:35px 0;
}
.title a{padding-top:10px;color: #0c8ed9}
.content_img{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.content_img div{width: 150px;overflow: hidden;}
.content_img p{text-align: center;padding: 20px 0;}
.content_img li:hover{
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
}
li{
	z-index: 100;
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

.content_c{
	text-align: center;
	margin-top: 50px;
}
.content_c div{
	margin:35px 0 ;
	display: flex;
	justify-content: space-around;
}
.u_img1{
	width:200px;
}
.m-li>li{
	margin:30px 50px;
}
.bimg,.mus-n{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.bimg{
	width:810px;
}
.bimg img{
	width: 250px;
}
.bimg li{
	margin-bottom: 60px;
}
.dg{
	display: flex;
	justify-content: space-between
}
.dg>div{
	padding:0 20px;
}
.mus-n li{
	border: 1px solid #ccc;
	padding: 10px 30px;
	border-radius: 20px;
	margin: 15px 0;
}
.mus-n li:hover{
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
}
.ul_t{
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.ul_t img{
	border-radius: 115px;
	width:150px;
}
.ul_t p{
	padding:20px 0;
}
.ul_t li{
	padding:20px 30px; 
}
.ul_t a{
	text-align: center
}
.ul_t li:hover img{
	transform: rotate(11000deg);
	transition: all 100s linear;
}
.d_img img{
	width:350px;
	padding: 20px;
}
.d_img img+img{
	padding-left: 35px;
}
</style>