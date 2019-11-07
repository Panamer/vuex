<template>
  <div>路由传参，如果是个对象的话 页面刷新参数会丢失，打印是[Object,Object] ，可以把参数转化成字符串来解决这问题
      {{ JSON.parse(this.$route.params.success).id }}
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(`this.$route.params.success--${JSON.stringify(this.$route.params)}`)
    }
}
</script>
    
<style>

</style>