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
						<p>mp3里的旧时光</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content3.jpg">
						<p>mp3里的旧时光</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content4.jpg">
						<p>mp3里的旧时光</p>
					</li>
					<li>
						<div class="pbg"></div>
						<img src="../../public/img/index/content5.jpg">
						<p>mp3里的旧时光</p>
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
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content8.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content9.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content10.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content11.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content12.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
				<li>
					<div class="pbg"></div>
					<img class="u_img1" src="../../public/img/index/content13.jpg" alt="">
					<p>来一杯酒 细细品尝这些女嗓</p>
				</li>
			</ul>
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
	top: 37%;
	width: 37px;
	height: 63px;
    z-index:100
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
.title a{padding-top:10px}
.content_img{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
.content_img div{width: 150px;overflow: hidden;}
.content_img p{text-align: center;padding: 20px 0;}
.content_img :hover{
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}
li{
	z-index: 100;
}
li:hover>.pbg{
  transform: scale(0.8);
}
.content_img .pbg{
	position: relative;
	top:45%;
	left: 23%;
	margin: -53px 0px;
  width: 100px;
  height: 100px;
  background-image: url(../../public/img/index/iconall.png);
  background-position: -8px -394px;
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
</style>