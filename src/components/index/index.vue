<template>

</template>

<script>
  import header from 'header';
  import line from 'line';
  import rhythm_plate from '../global/plate'

  export default {
    name: "index",
    data(){
      return{
        title:'',                 //标题
        rhythmVersion:[],         //节奏榜版本
        archerVersion:[],         //射手榜版本
        listType:'r',             //榜的类型，r=节奏榜，a=射手榜，默认为r
        plate:rhythm_plate[0]     //榜的板式
      }
    },
    components:{
      header,line,
    }
  }
</script>

<style scoped>

</style>
