<template>
  <div>
    <h3>品牌{{ brand }}</h3>
    <h3>价格{{ price }}</h3>
    <h3>颜色{{ color }}</h3>
  </div>
</template>

<script>
export default {
    data() {
        return {
            brand : 'BMWR8',
            price : '20',
            color : 'schwarz'
        }
    }

}
</script>
