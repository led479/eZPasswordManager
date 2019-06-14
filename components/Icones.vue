<template>
  <v-layout align-start justify-start row fill-height wrap>
    <icone-senha
      v-for="(item, idx) in senhas"
      :key="idx"
      :icone="item.icone"
      :nome="item.nome"
      :senha="item.senha"
      :anotacoes="item.anotacoes"></icone-senha>
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
