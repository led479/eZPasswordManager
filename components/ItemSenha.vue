<template>
  <v-flex xs12 @click="abreSenha">
    <div style="font-size: 17px; padding-bottom: 4px;">
      <v-img
        style="display: inline-block; vertical-align: top"
        :src="require(`@/assets/images/${senha.icone}-icon.png`)"
        height="20"
        width="20"></v-img>  {{ senha.nome }}
    </div>
    <div style="font-size: 17px">
      Login: {{ senha.login }}
    </div>
    <div style="font-size: 17px; ">
      Senha: {{ estaEscondida ? senhaEscondida() : senha.senha }}
      <v-icon style="float: right" @click.stop="copiaSenha">content_copy</v-icon>
      <v-icon style="float: right; padding-right: 15px" @click.stop="estaEscondida = !estaEscondida">remove_red_eye</v-icon>
    </div>
    <hr/>
  </v-flex>
</template>

<script>
export default {
  name: "icone-senha",

  props: {
    senha: Object
  },
  data() {
    return {
      estaEscondida: true
    }
  },
  methods: {
    senhaEscondida() {
      return '*'.repeat(this.senha.senha.length)
    },
    abreSenha(){
      this.$parent.$parent.abreSenha(this.senha)
    },
    copiaSenha() {
      this.$toast.info('Senha copiada para o clipboard.', { duration: 5000 })
    },
  }


}
</script>

<style>
hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 1em 0;
    padding: 0;
}
</style>