<template>
  <div class="container">
    <div class="left">{{num}}</div>
    <div class="right">
      <div class="imgBox">
        <img :src="value.headUrl" alt="" v-for="(value,key) in thisData" @click="goToDetail(value.id)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "line",
    props:[num,thisData,color],
    mounted(){
      let s = document.getElementsByClassName('imgBox');
      s[0].style.width = 15 * this.thisData.length + 'vw';

      let v = document.getElementsByClassName('container');
      v[0].style.backgroundColor = this.color;
    },
    methods:{
      goToDetail(id){
        this.$router.push({path:'',query:{id:id}})
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../global/main.scss";

  .container {
    width: 100%;
    height: pxRem(120);
    .left {
      width: pxRem(119);
      height: pxRem(100);
      display: inline-block;
      border-right: pxRem(1) solid #000;
      line-height: pxRem(100);
      text-align: center;
      font-size: pxRem(50);
    }
    .right{
      height: pxRem(120);
      width: pxRem(680);
      display: inline-block;
      overflow: scroll;
      .imgBox{
        height: pxRem(120);
        display: inline-block;
        img{
          width: pxRem(100);
          height: pxRem(100);
          margin: pxRem(10) 0 pxRem(10) pxRem(10);
        }
      }
    }
  }
</style>
