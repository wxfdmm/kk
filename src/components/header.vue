<template>
    <div>
        <div class="header_bg" id="header_bg">
			<div id="header" class="header">
				<div class="logo">
					<h1>新起点音乐</h1>
					<router-link to="javaScript:;">新起点音乐</router-link>
				</div>
				<ul class="first_nav">
					<li class="active"><router-link to="/">发现音乐</router-link></li>
					<li><router-link to="/playList">我的音乐</router-link></li>
					<li><router-link to="/play">朋友</router-link></li>
					<li>商城</li>
					<li>音乐人</li>
					<li>下载客户端</li>
				</ul>
			<div class="search">
				<div>
					<input type="text" placeholder="音乐/电台/用户">
				</div>
			
			</div>
			<div class="videoUp">
				<div>
					<router-link to="javascript:;">视频投稿</router-link>
				</div>
			</div>
			<div class="login">
				<router-link to="#" data-action='login'>登录</router-link>
				<i class="arr"></i>
				<ul>
					<li><i class='mb_icon'></i><router-link to="javascript:;">手机号登录</router-link></li>
					<li><i class="wx_icon"></i><router-link to="javascript:;">微信登录</router-link></li>
					<li><i class="qq_icon"></i><router-link to="javascript:;">QQ登录</router-link></li>
					<li><i class="wb_icon"></i><router-link to="javascript:;">新浪微博登录</router-link></li>
					<li><i class="wy_icon"></i><router-link to="javascript:;">网易邮箱账号登录</router-link></li>
			    </ul>
		        </div>
	        </div>
        </div>
        <div class="nav_bg">
	        <div id="nav" class="nav">
			<ul>
				<li><router-link to="/" class="navActive">推荐</router-link></li>
				<li><router-link to="/playList">歌单</router-link></li>
				<li><router-link to="/song">排行榜</router-link></li>
				<li><router-link to="/mv">MV</router-link></li>
				<li><router-link to="/play">歌手</router-link></li>
				<li><router-link to="#">新碟上架</router-link></li>
			</ul>
	        </div>
		</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .header, .first_nav, .nav>ul{
	display: flex;
}
.header{
	width:1200px;
	height:70px;
	justify-content: space-between;
	margin:0 auto;
    padding:0 -20px;
}

.logo{
	width: 176px;
    height: 70px;
    background-position:15px 20px;
}
.logo>a{
	display: block;
    height: 100%;
    text-indent: -9999px;
}
.first_nav{
	width:47%;
	color:#ae5402;
}
.first_nav li{
	cursor:pointer;
	font-size: 1em;
	padding:0 19px;
	height:70px;
	line-height: 70px;
	text-align: center;
	transition:all 0.3s linear;
}
.first_nav li:hover, .first_nav li.active{
	background:#0c8ed9;
	color:white;
}
.search{
	margin-left:28px;
}
.search>div{
	width: 158px;
    height: 32px;
    border-radius: 16px;
    margin-top: 12%;
	border:1px solid #000;
	background-color: #fff;
    background-position: 0 -99px;
}
.search>div>input{
	font-size: 0.8em;
    background-color: transparent;
    width: 100px;
    padding-left: 33px;
    vertical-align: sub;
}

.search img{
	width:30px;
	height:30px;
}
.videoUp{
	width: 90px;
	height: 100%;
}
.videoUp>div{
	background-position: 0 -140px;
	margin-top: 20%;
	width: 100%;
	height: 32px;
	border-radius: 16px;
	line-height: 31px;
	font-size: 0.8em;
	color:#ccc;	
	transition:all 0.5s linear;
}
.videoUp>div:hover, .videoUp>div>a:hover{
	background-position: -100px -140px;
    color: #0083ce;
	font-weight:bold;
	font-size:15px;
}
.videoUp>div>a{
	padding-left: 31px;
	color:#ccc;
}
.logo h1{
	color: #0083ce;
}
.login{
	width: 48px;
    font-size: 0.9em;
    line-height: 70px;
	background-position: 50px -27px;
	position: relative;
	color:#bbb;
}
.login a{
	color: inherit;
}
.login .arr{
	background-image: url('../../public/img/header/toplist.png')
}
.login:hover>.arr, .login:hover>ul{
	transform:scaleY(1);
	opacity: 1;
}
.login>.arr, .login>ul{
	transform: scaleY(0);
	opacity: 0;
	overflow: hidden;
	transition: transform 0.3s ease,
				opacity 0.3s ease;
}
.login>.arr{
	position: absolute;
	top: 48px;
	left: 8px;
	width: 14px;
	height: 8px;
	background-position: -20px 0;
}
.login>ul{
	width: 168px;
	position: absolute;
	top: 57px;
	left: -64px;
	background-color: #2A2A2A;
	font-size: 1em;
	box-shadow: 0px 8px 28px 1px #444;
	border-radius: 5px;
	transform-origin: center 0;
	z-index: 100;
	color:#bbb;
}

.login>ul li{
	height: 38px;
	line-height: 38px;
	border-bottom:1px solid #222222;
	
}
.login>ul li>i{
	display:inline-block;
	width: 18px;
	height: 18px;
	background-image: url('../../public/img/header/toplist.png');
	margin-left: 19px;
    margin-right: 5px;
    vertical-align: middle;
}
.login .mb_icon{
	background-position: 0 0;
}
.login .wx_icon{
	background-position: -20px -20px;
}
.login .qq_icon{
	background-position: -20px -40px;
}
.login .wb_icon{
	background-position: 0 -20px;
}
.login .wy_icon{
	background-position: 0 -40px;
}
.login .hm_icon{
	background-position: 0 -80px;
}
.login .msg_icon{
	background-position: -20px -120px;
}
.login .lv_icon{
	background-position: 0px -100px;
}
.login .mbr_icon{
	background-position: 0px -220px;
}
.login .st_icon{
	background-position: 0px -140px;
}
.login .ex_icon{
	background-position: 0px -200px;
}
.login.islogin{
	display:none;
}
.login.islogin .avatar{
	border-radius:50%;
	width:30px;
	height:30px;
}
.nav{
	background-color: #2c323b;
	text-align:center;
	font-size: 0.9em;
	width:1200px;
	height:34px;
	margin:0 auto;
}
.nav>ul{
	font-size: 0.8em;
    justify-content: center;
    margin-left: -140px;
}
.nav>ul li{
	margin-right: 2%;
    line-height: 34px;
}
.nav>ul li a{
	padding: 3px 15px;
    border-radius: 13px;
	color:#fff;
}
.nav>ul li a:hover, .navActive{
    background-color:#0c8ed9;
}
</style>