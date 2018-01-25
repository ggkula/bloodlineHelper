<template>
  <div class="container">
    <slot name="back"></slot>
    {{title}}
    <slot name="Btn"></slot>
  </div>
</template>

<script>
  export default {
    name: "header",
    props:[title]
  }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  @import "../global/main.scss";

  .container{
    width: 100vw;
    height: pxRem(90);
  }
</style>
