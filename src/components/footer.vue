<template>
    <div class="main">
        <div class="footer">
            <div>
                <h3>下载新起点音乐客户端</h3>
                <ul class="download_list">
                    <li class="dl_item">
                        <i class="icon_pc"></i>
                        <p><a href="">PC版</a></p>
                    </li>
                    <li class="dl_item">
                        <i class="icon_mac"></i>
                        <p><a href="">Mac版</a></p>
                    </li>
                    <li class="dl_item">
                        <i class="icon_andr"></i>
                        <p><a href="">Android版</a></p>
                    </li>
                    <li class="dl_item">
                        <i class="icon_iph"></i>
                        <p><a href="">iPhone版</a></p>
                    </li>
                </ul>
            </div>
            <div>
                <h3>特色产品</h3>
                <ul class="products_list">
                    <li class='prod_item'>
                        <i class="icon_k"></i>
                        <p><a href="">天天k歌</a></p>
                    </li>
                    <li class='prod_item'>
                        <i class="icon_sp"></i>
                        <p><a href="">SUPER SOUND</a></p>
                    </li>
                    <li class='prod_item'>
                        <i class="icon_qPlay"></i>
                        <p><a href="">Qplay</a></p>
                    </li>
                    <li class='prod_item'>
                        <p><a href="">车载互联</a></p>
                    </li>
                    <li class='prod_item'>
                        <p><a href="">新演唱会</a></p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="foot_bottom">
            <p>
                 Copyright © 1997 -
                <a href="javascript:;" title="All RightsReserved.">All Rights Reserved.</a>
            </p>
            <p>
                新起点公司
                <a href="javascript:;" title="版权所有">版权所有</a>
                <a href="javascript:;" title="网络文化经营许可证"网络文化经营许可证</a>
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        
    }
</script>
<style scoped>
    .main{
        background-color: #aaa;
    }
    .footer{
        
        width: 1200px;
        margin: 0 auto;
        padding: 15px 15px;
        display: flex;
        justify-content: space-around;
    }
.download_list{
    display: flex;
    justify-content: space-around;
}
.dl_item,.prod_item{
    padding: 10px 20px;
}
.icon_pc, 
.icon_mac, 
.icon_andr, 
.icon_iph,
.icon_k,
.icon_sp,
.icon_qPlay{
    display: block;
    width:48px;
    height: 48px;
    background:url(../../public/img/footer/footer.png) no-repeat;
    margin:0 auto;
} 
.icon_pc{
    background-position:-2px 0;
    width: 40px;
}
.icon_mac{
    background-position:-92px 0;
} 
.icon_andr{
    background-position:-190px 0;
    width: 38px;
} 
.icon_iph{
    background-position:-279px 0;
    width: 34px;
}
.icon_pc:hover{
    background-position:-2px -49px;
}
.icon_mac:hover{
    background-position:-92px -49px;
}
.icon_andr:hover{
    background-position:-190px -49px;
}
.icon_iph:hover{
    background-position:-279px -47px;
}
.products_list{
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    width: 400px;
}
.icon_iph:hover{
    background-position:-279px -47px;
}
.icon_k:hover{
    background-position:-370px -49px;
}
.icon_sp:hover{
    background-position:-462px -47px;
}
.icon_qPlay:hover{
    background-position:-561px -49px;
}
.foot_bottom{
    text-align: center;
    padding: 50px 0;
}
</style>