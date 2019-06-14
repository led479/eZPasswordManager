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
      <v-btn icon to="/password/new">
        <v-icon>add</v-icon>
      </v-btn>
    </v-toolbar>
    <icones v-if="$store.state.modoVisualizacao == 'icones'" :senhas="senhas"></icones>
    <lista v-else></lista>
  </div>
</template>

<script>
import Icones from '~/components/Icones.vue'
import Lista from '~/components/Lista.vue'


export default {
  components: { Icones, Lista },
  watch: {
    modoVisualizacao() {
      if (this.modoVisualizacao == 'icones') {
        this.$store.commit('SET_MODO_VISUALIZACAO', 'icones')
      } else {
        this.$store.commit('SET_MODO_VISUALIZACAO', 'lista')
      }
    }
  },
  data() {
    return {
      modoVisualizacao: this.$store.state.modoVisualizacao,
      drawer: false,
      title: 'eZ Password Manager',
      senhas: [
        {
          icone: 'facebook',
          nome: 'Facebook',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        },
        {
          icone: 'email',
          nome: 'Gmail',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        },
        {
          icone: 'netflix',
          nome: 'Netflix',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        },
        {
          icone: 'default',
          nome: 'Moodle',
          senha: 'abc1234',
          anotacoes: 'Esta é a minha senha do facebook'
        }
      ]
    }
  }
}
</script>
