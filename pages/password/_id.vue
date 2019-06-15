<template>
  <v-layout justify-center align-center>
  <v-toolbar app>
    <v-btn icon @click="$router.push('/password')">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn icon>
      <v-icon>pencil</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>trash_can</v-icon>
    </v-btn>
    
  </v-toolbar>
  <v-flex>
    <v-img
        style="margin: auto; vertical-align: middle"
        :src="require(`@/assets/images/${this.senha.icone}-icon.png`)"
        height="80"
        width="80"></v-img>
      <br>

      <h2>Login</h2>
      <v-text-field
        v-model="senha.login"
        label="exemplo@exemplo.com"
        single-line
        prepend-icon="person"
      ></v-text-field>
      <br>

      <h2>Senha</h2>
      <v-text-field
        v-model="senha.senha"
        label="senha-exemplo123"
        single-line
        prepend-icon="vpn_key"
      ></v-text-field>
      <br>

      <h2>Anotações</h2>
      <v-textarea 
        v-model="senha.anotacoes"
        label="Anotação exemplo..."
        single-line>
      </v-textarea>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'tela-senha',
  created() {
    if (this.$store.state.senhaNova.nome != undefined) this.senhas.push(this.$store.state.senhaNova)
    this.senha = this.senhas.find(senha => senha.id == this.id)
    this.title = this.senha.nome
  },
  data() {
    return {
      id: this.$route.params.id,
      senha: {},
      title: '',
      senhas: [
        {
          id: 1,
          icone: 'facebook',
          nome: 'Facebook',
          login: 'abc@eab.com',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        },
        {
          id: 2,
          icone: 'email',
          nome: 'Gmail',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        },
        {
          id: 3,
          icone: 'netflix',
          nome: 'Netflix',
          login: 'abc@eab.com',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        },
        {
          id: 4,
          icone: 'default',
          nome: 'Moodle',
          login: 'abc@eab.com',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        }
      ]
    }
    
  }
}
</script>

<style>

</style>
