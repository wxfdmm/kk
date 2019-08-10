<template>
    <div class="father">
        <div class="cbg">
        </div>
        <div class="con">
            <div>
                <img src="../../public/img/index/content7.jpg" >
                <p class="p">下载这首歌</p>
            </div>
            <div class="txt">
                    <h4>萧玉芬</h4> 
                    <h3>幸福的勇气</h3>
                    
                    <h5>︿☆幸福的勇气☆︿</h5>  
                    
                    <h4>演唱：萧玉芬</h4> 
                    
                    <p>阮的心内藏着一个人</p>
                    <p>只是一直不敢讲出来</p>
                    <p>身边的朋友苦劝我</p>
                    <p>不通继续憨憨等</p>
                    <p>因为是我一人 底勒作暝梦</p>
                    <p>有一天你出现底阮面前</p>
                    <p>欢喜的心情 亲像春天的花蕊</p>
                    <p>应该要把握这一切</p>
                    <p>对你表明我的心意</p>
                    <p>心中才袂有后悔这两字</p>
                    <p>惦这个世界</p>
                    <p>幸福的人需要很大的勇气</p>
                    <p>想要讲的话 不愿搁藏心内</p>
                    <p>看到你的笑容 那对迷人的眼神</p>
                    <p>心中所有的爱 想要全部乎你</p>
                    <p>惦这个世界</p>
                    <p>幸福的人需要很大的勇气</p>
                    <p>想要讲的话 不愿搁藏心底</p>
                    <p>想要牵你的手 对你讲出我爱你</p>
                    <p>希望甲你作伙 陪伴你到永远</p>
                    <p>有一天你出现底阮面前</p>
                    <p>欢喜的心情 亲像春天的花蕊</p>
                    <p>应该要把握这一切</p>
                    <p>对你表明我的心意</p>
                    <p>心中才袂有后悔这两字</p>
                    <p>惦这个世界</p>
                    <p>幸福的人需要很大的勇气</p>
                    <p>想要讲的话 不愿搁藏心内</p>
                    <p>看到你的笑容 那对迷人的眼神</p>
                    <p>心中所有的爱 想要全部乎你</p>
                    <p>惦这个世界</p>
                    <p>幸福的人需要很大的勇气</p>
                    <p>想要讲的话 不愿搁藏心底</p>
                    <p>想要牵你的手 对你讲出我爱你</p>
                    <p>希望甲你作伙 陪伴你到永远</p>
                    <p>希望甲你作伙 陪伴你到永远</p> 
            </div>
        </div>
        <div class="audio">
            <audio controls>
                <source src="../../public/img/song/bg.mp3" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .father{
        width: 1200px;
        margin: 80px auto 100px;
        position: relative;
    }
    .cbg{
        width: 600px;
        height: 600px;
        margin: 0 auto;
        background-image: url('../../public/img/index/content7.jpg');
        filter: blur(100px);
    }
    .con img{
        width: 300px;
    }
    .con{
        width: 900px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top:50px ;
        left: 120px;
    }
    .con .p{
        margin: 20px 0;
        padding:10px 0;
        text-align: center;
        border: 2px solid #aaa;
        border-radius: 20px;
        cursor: pointer;
    }
    .txt{
        width: 380px;
        height: 420px;
        overflow-y:scroll; 
    }
    .txt p{
        padding:10px 0px;
    }
    .audio>audio{
        width:1200px;
    }
    
</style>