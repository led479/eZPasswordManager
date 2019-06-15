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
      title: 'Pass',
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
    abreSenha(senha) {
      this.$router.push(`/password/${senha.id}`)
    }
  }
}
</script>
