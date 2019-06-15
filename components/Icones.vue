<template>
  <v-layout align-start justify-start row fill-height wrap>
    <icone-senha
      v-for="(item, idx) in senhas"
      :key="idx"
      :senha="item"></icone-senha>
  </v-layout>
</template>

<script>
import IconeSenha from '~/components/IconeSenha.vue'


export default {
  name: "icones-senhas",
  components: { IconeSenha },
  props: {
    senhas: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>
