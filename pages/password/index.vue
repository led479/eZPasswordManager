<template>
<v-layout column justify-center align-center>
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
            <v-radio label="Ícones" value="icones"></v-radio>
          </v-list-tile>
          <v-list-tile>
            <v-radio label="Lista" value="lista"></v-radio>            
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
    <h1 v-if="$store.state.modoVisualizacao == 'icones'">Visão por icones</h1>
    <h1 v-else>Visão em lista</h1>
</v-layout>
</template>

<script>
export default {
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
    }
  }
}
</script>
