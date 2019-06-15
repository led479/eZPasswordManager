<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-radio-group v-model="modoVisualizacao">
          <v-list-tile>
            <h1>Modo de visualização</h1>
          </v-list-tile>
          <v-list-tile>
            <v-radio label="Ícones" value="icones" color="#FFFFFF"></v-radio>
          </v-list-tile>
          <v-list-tile>
            <v-radio label="Lista" value="lista" color="#FFFFFF"></v-radio>            
          </v-list-tile>
        </v-radio-group>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar fixed app>
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn to="/password/new" class="text-none">
        <v-icon small>add</v-icon>
        &ensp;Adicionar
      </v-btn>
    </v-toolbar>
    <icones 
      v-if="$store.state.modoVisualizacao == 'icones'" :senhas="senhas"></icones>
    <lista v-else></lista>
  </div>
</template>

<script>
import Icones from '~/components/Icones.vue'
import Lista from '~/components/Lista.vue'
import { mapState } from 'vuex'

export default {
  components: { Icones, Lista },
  computed: mapState(['senhaNova']),
  watch: {
    modoVisualizacao() {
      if (this.modoVisualizacao == 'icones') {
        this.$store.commit('SET_MODO_VISUALIZACAO', 'icones')
      } else {
        this.$store.commit('SET_MODO_VISUALIZACAO', 'lista')
      }
    },
    senhaNova(velha, nova) {
      console.log('nova senha criada', this.nova)
      this.senhas.push(this.senhaNova)
    },
    '$store.state.senhaNova'() {
      console.log('nova senha criada', this.senhaNova)
      this.senhas.push(this.$store.state.senhaNova)
    }

  },
  mounted() {
    if (this.$store.state.senhaNova.nome != undefined) this.senhas.push(this.$store.state.senhaNova)
  },
  data() {
    return {
      modoVisualizacao: this.$store.state.modoVisualizacao,
      drawer: false,
      title: 'eZ Password Manager',
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
          login: 'abc@eab.com',
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
  },
  methods: {
    abreSenha(senha) {
      this.$router.push(`/password/${senha.id}`)
    }
  }
}
</script>
