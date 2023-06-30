<!--  -->
<template>
   <!-- <button @click="handleClick"><slot/></button> -->
   <button v-on="$listeners">{{ label}}</button>
</template>

<script>
export default {
  name:'LgButton',
    props: {
        label: {
        type: String,
        default: 'button'
        }
    },
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    // handleClick(evt){
    //     this.$emit('click',evt)
    //     evt.preventDefault()
    // }
  }
}

</script>
<style lang='scss' scoped>
</style>