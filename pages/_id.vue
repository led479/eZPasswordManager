<template>
  <v-layout justify-center align-center>
  <v-toolbar app>
    <v-btn icon @click="$router.push('/')">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title v-text="title" />
    <v-spacer />
    <v-btn class="text-none">
      <v-icon small>create</v-icon>&ensp;Editar
    </v-btn>
    <v-btn @click="abreConfirmarApagar" class="text-none">
      <v-icon small>delete</v-icon>&ensp;Apagar
    </v-btn>
    
  </v-toolbar>
  <v-flex>
    <v-img
        style="margin: auto; vertical-align: middle"
        :src="require(`@/assets/images/${this.senha.icone}-icon.png`)"
        height="160"
        width="160"></v-img>
      <br>

      <div style="padding-bottom:20px">
        <h2 style="padding-bottom:10px">Login</h2>
        <big><v-icon>person</v-icon>  {{ senha.login }}</big>
      </div>

      <div style="padding-bottom:20px">
        <h2 style="padding-bottom:10px">Senha</h2>
        <big><v-icon>vpn_key</v-icon>  {{ senha.senha }}</big>
        <v-icon style="float: right" @click="copiaSenha">content_copy</v-icon>
      </div>
      
      <div v-if="this.senha.anotacoes != ''">
        <h2 style="padding-bottom:10px">Anotações</h2>
        <big>{{ senha.anotacoes }}</big>
      </div>
      
    </v-flex>
    <v-dialog v-model="exibeApagar">
       <v-card>
        <v-card-title class="headline">Apagar senha</v-card-title>

        <v-card-text>
          Você realmente deseja apagar a senha {{ senha.nome }}?
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="exibeApagar = false"
          >
            Cancelar
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="apagaSenha"
          >
            Apagar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
      exibeApagar: false,
      senha: {},
      title: '',
      senhas: [
        {
          id: 1,
          icone: 'default',
          nome: 'Net Virtua',
          login: 'uepa@net.com.br',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha da net vírtua, que é paga todo mes dia 15.'
        },
        {
          id: 2,
          icone: 'default',
          nome: 'Vivo',
          login: 'girafa123@eab.com',
          senha: 'ine5614EPO',
          anotacoes: 'Senha utilizada para pagar a conta do celular que vence todo mes dia 08.'
        },
        {
          id: 3,
          icone: 'default',
          nome: 'Moodle',
          login: 'exemplo.martins',
          senha: 'abc1234',
          anotacoes: ''
        },
        {
          id: 4,
          icone: 'netflix',
          nome: 'Netflix',
          login: 'abc@eab.com',
          senha: 'abc1234',
          anotacoes: ''
        }
      ]
    }
    
  },

  methods: {
    copiaSenha() {
      this.$toast.info('Senha copiada para o clipboard.', { duration: 5000 })
    },
    abreConfirmarApagar() {
      this.exibeApagar = true
    },
    apagaSenha() {
      this.exibeApagar = false
      this.$store.commit('CRIA_SENHA_NOVA', {}) 
      this.$toast.info('Senha apagada com sucesso!')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
