<template>
  <v-flex xs4>
    <div style="text-align: center; padding-bottom: 18px" @click="abreSenha()">
      <v-img
        style="margin: auto; vertical-align: middle"
        :src="require(`@/assets/images/${senha.icone}-icon.png`)"
        height="60"
        width="60"></v-img>
      <span style="font-size: 17px">{{ senha.nome }}</span>
    </div>
  </v-flex>
</template>

<script>
export default {
  name: "icone-senha",

  props: {
    senha: Object
  },
  methods: {
    abreSenha(){
      this.$parent.$parent.abreSenha(this.senha)
    }
  }


}
</script>

<style>

</style>
