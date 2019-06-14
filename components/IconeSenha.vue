<template>
  <v-flex xs4>
    <div style="text-align: center; padding-bottom: 18px">
      <v-img
        style="margin: auto; vertical-align: middle"
        :src="require(`@/assets/images/${icone}-icon.png`)"
        height="60"
        width="60"></v-img>
      <span style="font-size: 17px">{{ nome }}</span>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "icone-senha",

  props: {
    nome: {
      type: String,
      required: true
    },
    icone: {
      type: String,
      required: true
    },
    senha: String,
    anotacoes: String
  }


}
</script>

<style>

</style>
