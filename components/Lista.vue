<template>
  <v-layout align-start justify-center row fill-height wrap>
    <item-senha
      v-for="(item, idx) in senhas"
      :key="idx"
      :senha="item"></item-senha>
  </v-layout>
</template>

<script>
import ItemSenha from '~/components/ItemSenha.vue'

export default {
  name: "lista-senhas",
  components: { ItemSenha },
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
