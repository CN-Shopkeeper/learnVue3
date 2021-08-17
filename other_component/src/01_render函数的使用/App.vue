<script>
import {h} from 'vue';
import HelloWorld from './HelloWorld.vue';
  export default {
    render() {
      return h(HelloWorld,{},{
        default: props=>h("span",null,`App传入HelloWorld的内容: ${props.name}`)
      });
    },
  }
</script>

<style scoped>

</style>