<template>

</template>

<script>
  import header from 'header';
  import line from 'line';

  export default {
    name: "index",
    data(){
      return{
        title:'',                 //标题
        rhythmVersion:[],         //节奏榜版本
        archerVersion:[],         //射手榜版本
        listType:''               //榜的类型
      }
    },
    components:{
      header,line,
    }
  }
</script>

<style scoped>

</style>
