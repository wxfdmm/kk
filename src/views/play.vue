<template>
    <div class="father">
           <div class="cbg">
            </div><div class="con">
            <div>
                <img :src="'http://127.0.0.1:3000/img/'+list.mmg" >
                <p class="p">下载这首歌</p>
            </div>
            <div class="txt">
                    <h4>{{list.autor}}</h4> 
                    <h3>{{list.title}}</h3>
                    
                    <h5>︿☆{{list.title}}☆︿</h5>  
                    
                    <h4>演唱：{{list.autor}}</h4> 
                    
                    <p v-for='(item,i) of list.txt'>{{item}}</p>
                    
            </div>
            </div>
            <div class="audio">
                <audio controls>
                    <source :src="'http://127.0.0.1:3000/img/'+bg.mp3" type="audio/mpeg">
                </audio>
            </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            list:{}
        }
    },
    props:['lid'],
    methods: {
        loadMore5(){
            var url='playMlist'
            this.axios.get(url,{params:{lid:this.lid}}).then((result)=>{
                console.log(result)
                this.list=result.data[0]
                this.list.txt=this.list.txt.split(',')
                console.log(this.list)
            })
        }
    },
    created() {
        this.loadMore5()
    },
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