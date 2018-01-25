<template>
  <header :title="title">
    <div slot="Btn">
      <img src="" alt="">
    </div>
  </header>
  <div v-for="(value,key) in thePlate">
    <div v-if="value.type === 'score'">
      <line :num="value.score" :thisData="value.dataList" :color="value.color"></line>
    </div>
    <div v-else>
      {{value.description}}
    </div>
  </div>
</template>

<script>
  import header from 'header';
  import line from 'line';
  import rhythm_plate from '../global/plate'
  import cardData from '../global/cardData'

  export default {
    name: "index",
    data() {
      return {
        title: '',                 //标题
        cardData: cardData,        //卡牌数据
        rhythmVersion: [],         //节奏榜版本
        archerVersion: [],         //射手榜版本
        rhythmScore: [],           //节奏榜评分
        archerScore: [],           //射手榜评分
        evaluationScore: [],
        listType: true,            //榜的类型，true=节奏榜，false=射手榜，默认为t
        plate: rhythm_plate,       //榜的板式
        theVersion: '',            //当前版本
        thePlate: '',              //当前板式
      }
    },
    components: {
      header, line,
    },
    methods: {
      scoreMatch() {
        //把分数插入到卡牌数据中
        //v，取到角标值，然后把选中的版本的节奏榜评分值获得
        let score = []
        if (this.listType) {
          let v = this.this.rhythmVersion.indexOf(this.theVersion);
          score = this.rhythmScore[v]
        } else {
          let v = this.this.archerVersion.indexOf(this.theVersion)
          score = this.rhythmScore[v]
        }
        this.cardData.forEach((item, index, arr) => {
          item.rhythm_num = score[index];
          item.archer_num = score[index];
          item.evaluation_num = this.evaluationScore[index];
          if (arr.length === index + 1) {
            this.setPlateData()
          }
        })
      },
      getTitle() {
        //把标题设置好
      },
      setPlateData() {
        //把卡牌数据输入到板式中的每一栏中。外循环用大数组，内循环用小数组，降低运算量
        this.cardData.forEach((item, index, arr) => {
          this.thePlate.forEach((plate, key, array) => {
            if (plate.type === 'score') {
              if(this.listType){
                if (plate.score === item.rhythm_num) {
                  let obj = {
                    headUrl: item.headUrl,
                    id: item.id,
                  };
                  plate.dataList.push(obj);
                }
              }
              else {
                if (plate.score === item.archer_num) {
                  let obj = {
                    headUrl: item.headUrl,
                    id: item.id,
                  };
                  plate.dataList.push(obj);
                }
              }
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">

</style>
